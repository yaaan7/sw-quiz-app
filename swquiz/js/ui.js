/* 화면 · 라우팅 · 세션 진행 */
(function () {
  var esc = Hl.esc;
  var app = document.getElementById('app');
  var sess = null, st = null;

  var MODES = [['all', '섞어서'], ['quiz', '퀴즈'], ['code', '코드 채우기'], ['predict', '결과 예측']];
  var CAT = { quiz: ['퀴즈', '🧠'], code: ['코드 채우기', '🧩'], predict: ['결과 예측', '🔮'] };
  var PRAISE = ['정답!', '좋아요!', '완벽해요!', '굿!', '맞아요!', '깔끔해요!'];
  var UN = {};
  UNITS.forEach(function (u, i) { u.n = i + 1; UN[u.id] = u; });

  function $(s, r) { return (r || document).querySelector(s); }
  function modeName(m) { return (MODES.filter(function (x) { return x[0] === m; })[0] || [])[1] || ''; }
  function toast(msg) {
    var t = $('#toast'); t.textContent = msg; t.className = 'show';
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.className = ''; }, 1900);
  }
  function go(h) { if (location.hash === h) render(); else location.hash = h; }
  function mono(s) { return /[가-힣]/.test(s) ? '' : ' mono'; }

  /* ───────── 모달 ───────── */
  function modal(html) {
    var m = $('#modal'); m.innerHTML = '<div class="mback" data-act="mclose"></div><div class="mbox">' + html + '</div>'; m.hidden = false;
  }
  function closeModal() { var m = $('#modal'); m.hidden = true; m.innerHTML = ''; }
  function ask(msg, yes, cb, danger) {
    ask._cb = cb;
    modal('<p class="mmsg">' + msg + '</p><div class="mbtns"><button class="btn ghost" data-act="mclose">취소</button><button class="btn ' + (danger ? 'no' : 'primary') + '" data-act="myes">' + yes + '</button></div>');
  }

  /* ───────── 공통 계산 ───────── */
  function ansText(q) {
    if (q.t === 'mc') return q.opts[q.a];
    if (q.t === 'fb') return q.answers.join('  ·  ');
    return q.seq.join(' → ');
  }
  function wc(q) {
    if (!q.code) return '';
    var l = q.code.split('\n').filter(function (x) { return x.trim(); })[0] || '';
    return '<span class="wc">' + esc(l.trim()) + '</span>';
  }
  function wrongPool() { return Eng.pool({ wrongOnly: true }); }

  function start(o) {
    var pool = Eng.pool(o);
    if (!pool.length) { toast('풀 수 있는 문제가 없어요'); return; }
    var qs = Eng.pick(pool, Math.min(o.n || 10, pool.length));
    sess = { queue: qs.slice(), total: qs.length, i: 0, ok: 0, xp: 0, firstDone: {}, requeued: {}, missed: [], missedIds: {}, o: o };
    go('#/play');
  }

  /* ───────── 홈 ───────── */
  function ring(tc, goal) {
    var c = 2 * Math.PI * 20, p = Math.min(1, tc / goal);
    return '<svg class="ring" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" class="rb"/><circle cx="24" cy="24" r="20" class="rf" style="stroke-dasharray:' + (c * p).toFixed(1) + ' ' + c.toFixed(1) + '"/><text x="24" y="28" text-anchor="middle">' + (tc >= goal ? '✓' : tc) + '</text></svg>';
  }
  function viewHome() {
    var S = Store.S, mode = S.mode, tc = Store.todayCount();
    var chips = MODES.map(function (m) {
      var n = Eng.pool({ mode: m[0] }).length;
      return '<button class="mchip' + (mode === m[0] ? ' on' : '') + '" data-act="mode" data-m="' + m[0] + '">' + m[1] + '<small>' + n + '</small></button>';
    }).join('');
    var units = UNITS.map(function (u) {
      var pool = Eng.pool({ unit: u.id, mode: mode });
      var mas = pool.filter(function (q) { return Store.isMastered(q.id); }).length;
      var seen = pool.filter(function (q) { return Store.get(q.id); }).length;
      var pct = pool.length ? Math.round(mas / pool.length * 100) : 0;
      var pct2 = pool.length ? Math.round(seen / pool.length * 100) : 0;
      return '<button class="unit" data-act="unit" data-u="' + u.id + '"' + (pool.length ? '' : ' disabled') + '>' +
        '<span class="ub">' + u.n + '</span>' +
        '<span class="ut"><b>' + esc(u.name) + '</b><small>' + esc(u.sub) + ' · ' + pool.length + '문제</small>' +
        '<span class="pbar"><i class="seen" style="width:' + pct2 + '%"></i><i style="width:' + pct + '%"></i></span></span>' +
        '<span class="um">' + mas + '<small>/' + pool.length + '</small></span></button>';
    }).join('');
    var wn = wrongPool().length;
    return '<div class="home">' +
      '<header class="htop"><div><h1>SW융합설계</h1><p>이동 시간에 한 판, 10문제</p></div>' +
      '<div class="stats"><span class="pill fire" title="연속 학습일">🔥 ' + Store.streak() + '</span><span class="pill xp" title="경험치">⚡ ' + S.xp + '</span>' +
      '<span class="goal" title="오늘 목표 ' + S.goal + '문제">' + ring(tc, S.goal) + '</span></div></header>' +
      '<div class="modes" role="tablist">' + chips + '</div>' +
      '<button class="btn primary big" data-act="quick">▶ ' + modeName(mode) + ' 빠른 시작 <small>10문제</small></button>' +
      (wn ? '<button class="wrongbar" data-act="wrongStart"><span>📝 틀린 문제 ' + wn + '개 복습하기</span><b>›</b></button>' : '') +
      '<h2 class="sec">단원별 학습</h2><div class="units">' + units + '</div>' +
      '<p class="legend"><i class="seen"></i> 풀어봄 <i class="mas"></i> 마스터(2번 연속 정답)</p></div>';
  }

  /* ───────── 오답노트 ───────── */
  function viewWrong() {
    var list = wrongPool().sort(function (a, b) { return Store.get(b.id).t - Store.get(a.id).t; });
    var beaten = QB.filter(function (q) { var p = Store.get(q.id); return p && p.w && p.st >= 2; }).length;
    var items = list.map(function (q) {
      var p = Store.get(q.id);
      return '<details class="witem"><summary><span class="wq">' + esc(q.q) + '</span>' + wc(q) + '<span class="wm"><em>' + esc(UN[q.u].name) + '</em> · ' + p.w + '번 틀림</span></summary>' +
        '<div class="wbody">' + (q.code ? '<pre class="code"><code>' + Hl.render(q.code).replace(//g, '<span class="blank">___</span>') + '</code></pre>' : '') +
        '<p class="wa"><b>정답</b> <span class="' + mono(ansText(q)).trim() + '">' + esc(ansText(q)) + '</span></p><p class="ww">' + esc(q.why) + '</p>' +
        (q.src ? '<p class="wsrc">📖 ' + esc(q.src) + '</p>' : '') + '</div></details>';
    }).join('');
    return '<div class="page"><header class="ptitle"><h1>오답노트</h1><p>' + (list.length ? '아직 극복하지 못한 문제 ' + list.length + '개' : '') + (beaten ? ' · 극복한 문제 ' + beaten + '개 🎉' : '') + '</p></header>' +
      (list.length ? '<button class="btn primary big" data-act="wrongStart">▶ 오답 복습 시작 <small>최대 10문제</small></button><div class="wlist">' + items + '</div>'
        : '<div class="empty"><div>✨</div><p>틀린 문제가 없어요.<br>문제를 풀다 보면 여기에 쌓여요.</p></div>') + '</div>';
  }

  /* ───────── 기록 · 설정 ───────── */
  function viewMe() {
    var S = Store.S, seen = 0, ok = 0, mas = 0;
    QB.forEach(function (q) { var p = S.p[q.id]; if (p) { seen += p.s; ok += p.c; if (p.st >= 2) mas++; } });
    var acc = seen ? Math.round(ok / seen * 100) : 0, days = Object.keys(S.days).length;
    var goals = [10, 20, 30, 50].map(function (g) { return '<button class="seg' + (S.goal === g ? ' on' : '') + '" data-act="goal" data-g="' + g + '">' + g + '</button>'; }).join('');
    return '<div class="page"><header class="ptitle"><h1>기록</h1></header>' +
      '<div class="grid"><div class="stat"><b>' + Store.streak() + '일</b><span>🔥 연속 학습</span></div><div class="stat"><b>' + S.xp + '</b><span>⚡ 경험치</span></div>' +
      '<div class="stat"><b>' + mas + '<small>/' + QB.length + '</small></b><span>🏅 마스터</span></div><div class="stat"><b>' + acc + '%</b><span>🎯 누적 정답률</span></div>' +
      '<div class="stat"><b>' + seen + '</b><span>✍️ 푼 횟수</span></div><div class="stat"><b>' + days + '일</b><span>📅 공부한 날</span></div></div>' +
      '<h2 class="sec">설정</h2><div class="card">' +
      '<div class="row"><span>하루 목표<small>문제 수</small></span><span class="segs">' + goals + '</span></div>' +
      '<div class="row"><span>객관식 탭하면 바로 채점<small>끄면 선택 후 [확인]을 눌러요</small></span><button class="sw' + (S.fast ? ' on' : '') + '" data-act="fast" aria-label="빠른 채점"><i></i></button></div></div>' +
      '<h2 class="sec">백업</h2><div class="card"><p class="note">기록은 이 브라우저에만 저장돼요. 폰을 바꾸거나 브라우저 데이터를 지우기 전에 백업하세요.</p>' +
      '<div class="btns"><button class="btn ghost" data-act="export">내보내기</button><button class="btn ghost" data-act="import">가져오기</button></div></div>' +
      '<div class="card"><button class="btn ghost danger" data-act="reset">기록 전부 초기화</button></div>' +
      '<p class="ver">문제 ' + QB.length + '개 · 단원 ' + UNITS.length + '개 · v1.0</p></div>';
  }

  /* ───────── 풀이 화면 ───────── */
  function newState(q) {
    var s = { q: q, done: false, ok: false, picked: null };
    if (q.t === 'mc') s.order = Eng.shuffle(q.opts.map(function (_, i) { return i; }));
    else if (q.t === 'fb') {
      var base = [], cnt = {};
      (q.bank || []).concat(q.answers).forEach(function (t) { if (base.indexOf(t) < 0) base.push(t); });
      q.answers.forEach(function (a) { cnt[a] = (cnt[a] || 0) + 1; });
      Object.keys(cnt).forEach(function (a) { for (var k = 1; k < cnt[a]; k++) base.push(a); });
      s.toks = Eng.shuffle(base); s.slots = q.answers.map(function () { return -1; });
    } else {
      var t = q.seq.concat(q.extra || []), tries = 0, sh;
      do { sh = Eng.shuffle(t); tries++; } while (t.length > 1 && sh.join('\u0001') === q.seq.join('\u0001') && tries < 8);
      s.toks = sh; s.ans = [];
    }
    return s;
  }

  function codeBlock(q) {
    if (!q.code) return '';
    var html = Hl.render(q.code), k = 0;
    if (q.t === 'fb') {
      html = html.replace(//g, function () {
        var i = k++, ti = st.slots[i], txt = ti >= 0 ? esc(st.toks[ti]) : '';
        var cls = 'slot' + (ti >= 0 ? ' on' : '') + (st.done ? (st.toks[ti] === q.answers[i] ? ' ok' : ' no') : '');
        return '<button class="' + cls + '" data-act="slot" data-i="' + i + '"' + (st.done ? ' disabled' : '') + '>' + (txt || '&nbsp;&nbsp;&nbsp;') + '</button>';
      });
    } else html = html.replace(//g, '___');
    return '<pre class="code"><code>' + html + '</code></pre>';
  }

  function bodyHTML() {
    var q = st.q, out = '';
    out += '<div class="chips"><span class="chip c-' + q.cat + '">' + CAT[q.cat][1] + ' ' + CAT[q.cat][0] + '</span>' + (q.tag ? '<span class="chip">' + esc(q.tag) + '</span>' : '') + '<span class="chip u">' + esc(UN[q.u].name) + '</span></div>';
    out += '<h2 class="q">' + esc(q.q) + '</h2>' + codeBlock(q);
    if (q.t === 'mc') {
      out += '<div class="opts">' + st.order.map(function (oi, k) {
        var cls = 'opt';
        if (st.done) cls += oi === q.a ? ' good' : (oi === st.picked ? ' bad' : ' dim'); else if (st.picked === oi) cls += ' sel';
        return '<button class="' + cls + '" data-act="opt" data-o="' + oi + '"' + (st.done ? ' disabled' : '') + '><span class="ol">' + 'ABCDE'[k] + '</span><span class="ot' + mono(q.opts[oi]) + '">' + esc(q.opts[oi]) + '</span></button>';
      }).join('') + '</div>';
    } else if (q.t === 'fb') {
      out += '<div class="bank">' + st.toks.map(function (t, i) {
        var used = st.slots.indexOf(i) >= 0;
        return '<button class="tok' + (used ? ' used' : '') + '" data-act="tok" data-t="' + i + '"' + (used || st.done ? ' disabled' : '') + '>' + esc(t) + '</button>';
      }).join('') + '</div>';
    } else {
      out += '<div class="ansarea' + (st.done ? (st.ok ? ' ok' : ' no') : '') + '">' + (st.ans.length ? st.ans.map(function (ti, k) {
        return '<button class="tok on" data-act="ans" data-k="' + k + '"' + (st.done ? ' disabled' : '') + '>' + esc(st.toks[ti]) + '</button>';
      }).join('<i class="arr">→</i>') : '<span class="ph">아래 카드를 순서대로 눌러 보세요</span>') + '</div>';
      out += '<div class="bank">' + st.toks.map(function (t, i) {
        var used = st.ans.indexOf(i) >= 0;
        return '<button class="tok' + (used ? ' used' : '') + '" data-act="tok" data-t="' + i + '"' + (used || st.done ? ' disabled' : '') + '>' + esc(t) + '</button>';
      }).join('') + '</div>';
    }
    return out;
  }

  function canCheck() {
    var q = st.q;
    if (q.t === 'mc') return st.picked !== null;
    if (q.t === 'fb') return st.slots.indexOf(-1) < 0;
    return st.ans.length > 0;
  }
  function footHTML() {
    var q = st.q;
    if (!st.done) {
      if (q.t === 'mc' && Store.S.fast) return '<p class="hint">보기를 누르면 바로 채점돼요</p>';
      return '<button class="btn primary big" data-act="check"' + (canCheck() ? '' : ' disabled') + '>확인</button>';
    }
    var last = sess.i >= sess.queue.length - 1;
    var x = '';
    if (!st.ok && q.t === 'mc' && q.x && q.x[st.picked]) x = '<p class="sh-x">💡 ' + esc(q.x[st.picked]) + '</p>';
    var ans = '';
    if (!st.ok) {
      ans = '<div class="sh-a"><span>정답</span> ' + (q.t === 'fb' ? q.answers.map(function (a) { return '<code>' + esc(a) + '</code>'; }).join(' ')
        : q.t === 'or' ? q.seq.map(function (a) { return '<code>' + esc(a) + '</code>'; }).join(' → ')
          : '<b class="' + mono(q.opts[q.a]).trim() + '">' + esc(q.opts[q.a]) + '</b>') + '</div>';
    }
    return '<div class="sheet ' + (st.ok ? 'ok' : 'no') + '"><div class="sh-t">' + (st.ok ? '✅ ' + PRAISE[Math.floor(Math.random() * PRAISE.length)] + (st.gain ? ' <em>+' + st.gain + ' XP</em>' : '') : '❌ 아쉬워요') + '</div>' +
      ans + '<p class="sh-w">' + esc(q.why) + '</p>' + x + (q.src ? '<p class="sh-s">📖 ' + esc(q.src) + '</p>' : '') +
      '<button class="btn ' + (st.ok ? 'ok' : 'no') + ' big" data-act="next" id="nextBtn">' + (last ? '결과 보기' : '계속') + '</button></div>';
  }

  function paint(enter) {
    var b = $('#pb'), f = $('#pf'); if (!b) return;
    b.innerHTML = bodyHTML(); f.innerHTML = footHTML();
    b.className = 'pbody' + (enter ? ' enter' : '') + (st.done ? (st.ok ? ' right' : ' wrong') : '');
    var pct = Math.round(sess.i / sess.queue.length * 100);
    $('#bar').style.width = (st.done ? Math.round((sess.i + 1) / sess.queue.length * 100) : pct) + '%';
    $('#cnt').textContent = (sess.i + 1) + '/' + sess.queue.length;
    if (st.done) { var nb = $('#nextBtn'); if (nb) nb.focus({ preventScroll: true }); f.scrollIntoView && f.scrollIntoView({ block: 'end', behavior: 'smooth' }); }
  }

  function viewPlay() {
    var q = sess.queue[sess.i];
    if (!q) { go('#/result'); return ''; }
    st = newState(q);
    setTimeout(function () { paint(true); }, 0);
    return '<div class="play"><header class="ptop"><button class="x" data-act="quit" aria-label="나가기">✕</button><div class="bar"><i id="bar"></i></div><span id="cnt" class="cnt"></span></header>' +
      '<main id="pb" class="pbody"></main><footer id="pf" class="pfoot"></footer></div>';
  }

  function grade() {
    var q = st.q, ok;
    if (q.t === 'mc') ok = st.picked === q.a;
    else if (q.t === 'fb') ok = q.answers.every(function (a, i) { return st.toks[st.slots[i]] === a; });
    else ok = st.ans.length === q.seq.length && st.ans.every(function (t, i) { return st.toks[t] === q.seq[i]; });
    st.done = true; st.ok = ok;
    var first = !sess.firstDone[q.id]; sess.firstDone[q.id] = true;
    st.gain = Store.rec(q.id, ok, first); sess.xp += st.gain;
    if (ok) { if (first) sess.ok++; }
    else {
      if (!sess.missedIds[q.id]) { sess.missedIds[q.id] = 1; sess.missed.push(q); }
      if (!sess.requeued[q.id]) { sess.requeued[q.id] = 1; sess.queue.push(q); }   // 한 번 더 나옴
      try { navigator.vibrate && navigator.vibrate(70); } catch (e) {}
    }
    paint(false);
  }

  /* ───────── 결과 ───────── */
  function viewResult() {
    var n = Object.keys(sess.firstDone).length, acc = n ? Math.round(sess.ok / n * 100) : 0;
    var emo = acc >= 80 ? '🎉' : acc >= 50 ? '👍' : '💪';
    var msg = acc >= 80 ? '아주 좋아요!' : acc >= 50 ? '좋은 흐름이에요' : '틀린 건 다음에 또 나와요';
    var missed = sess.missed.map(function (q) {
      return '<details class="witem"><summary><span class="wq">' + esc(q.q) + '</span>' + wc(q) + '<span class="wm"><em>' + esc(UN[q.u].name) + '</em></span></summary><div class="wbody">' +
        '<p class="wa"><b>정답</b> <span class="' + mono(ansText(q)).trim() + '">' + esc(ansText(q)) + '</span></p><p class="ww">' + esc(q.why) + '</p></div></details>';
    }).join('');
    return '<div class="page result"><div class="big-emo">' + emo + '</div><h1>' + msg + '</h1>' +
      '<div class="grid g3"><div class="stat"><b>' + acc + '%</b><span>정답률</span></div><div class="stat"><b>+' + sess.xp + '</b><span>XP</span></div><div class="stat"><b>' + sess.ok + '/' + n + '</b><span>한 번에 정답</span></div></div>' +
      (missed ? '<h2 class="sec">틀린 문제 ' + sess.missed.length + '개</h2><div class="wlist">' + missed + '</div>' : '<p class="perfect">틀린 문제가 없어요 ✨</p>') +
      '<div class="rbtns"><button class="btn primary big" data-act="again">한 판 더</button><button class="btn ghost big" data-act="home">홈으로</button></div></div>';
  }

  /* ───────── 라우터 ───────── */
  function render() {
    var v = (location.hash || '#/').replace(/^#\/?/, '') || 'home';
    if ((v === 'play' || v === 'result') && !sess) { location.replace('#/'); return; }
    if (['home', 'wrong', 'me', 'play', 'result'].indexOf(v) < 0) v = 'home';
    document.body.dataset.view = v;
    Array.prototype.forEach.call(document.querySelectorAll('#tabs a'), function (a) { a.classList.toggle('on', a.dataset.tab === v); });
    var wb = $('#wrongBadge'), wn = wrongPool().length; wb.hidden = !wn; wb.textContent = wn > 99 ? '99+' : wn;
    app.innerHTML = v === 'home' ? viewHome() : v === 'wrong' ? viewWrong() : v === 'me' ? viewMe() : v === 'play' ? viewPlay() : viewResult();
    window.scrollTo(0, 0);
  }

  /* ───────── 이벤트 ───────── */
  function pickOpt(oi) {
    if (st.done) return;
    st.picked = oi;
    if (Store.S.fast) grade(); else paint(false);
  }
  function download(name, text) {
    try {
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
      a.download = name; document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    } catch (e) { toast('다운로드에 실패했어요'); }
  }
  function ymd() { var d = new Date(); return d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2); }

  var acts = {
    mode: function (t) { Store.set('mode', t.dataset.m); render(); },
    quick: function () { start({ mode: Store.S.mode, n: 10 }); },
    unit: function (t) { start({ unit: t.dataset.u, mode: Store.S.mode, n: 10 }); },
    wrongStart: function () { start({ wrongOnly: true, n: 10 }); },
    again: function () { start(sess.o); },
    home: function () { go('#/'); },
    opt: function (t) { pickOpt(+t.dataset.o); },
    tok: function (t) {
      if (st.done) return; var i = +t.dataset.t;
      if (st.q.t === 'fb') { var s = st.slots.indexOf(-1); if (s < 0) return; st.slots[s] = i; }
      else st.ans.push(i);
      paint(false);
    },
    slot: function (t) { if (st.done) return; st.slots[+t.dataset.i] = -1; paint(false); },
    ans: function (t) { if (st.done) return; st.ans.splice(+t.dataset.k, 1); paint(false); },
    check: function () { if (!st.done && canCheck()) grade(); },
    next: function () {
      if (!st.done) return;
      sess.i++;
      if (sess.i >= sess.queue.length) go('#/result'); else render();
    },
    quit: function () { ask('그만할까요?<br><small>지금까지 푼 문제는 기록돼요.</small>', '나가기', function () { go('#/'); }); },
    goal: function (t) { Store.set('goal', +t.dataset.g); render(); },
    fast: function () { Store.set('fast', !Store.S.fast); render(); },
    export: function () {
      var json = Store.exportJSON();
      download('swquiz-backup-' + ymd() + '.json', json);
      try { navigator.clipboard.writeText(json).then(function () { toast('파일 저장 + 클립보드에 복사했어요'); }, function () { toast('파일로 저장했어요'); }); } catch (e) { toast('파일로 저장했어요'); }
    },
    import: function () {
      modal('<p class="mmsg">백업 파일을 선택하거나 내용을 붙여넣으세요.<br><small>현재 기록은 덮어써져요.</small></p>' +
        '<input type="file" id="impFile" accept=".json,application/json"><textarea id="impText" rows="4" placeholder="{ ... } 붙여넣기"></textarea>' +
        '<div class="mbtns"><button class="btn ghost" data-act="mclose">취소</button><button class="btn primary" data-act="doImport">가져오기</button></div>');
    },
    doImport: function () {
      var f = $('#impFile').files[0], txt = $('#impText').value.trim();
      function apply(s) { try { Store.importJSON(s); closeModal(); toast('가져왔어요'); render(); } catch (e) { toast('가져오기 실패: ' + e.message); } }
      if (f) { var r = new FileReader(); r.onload = function () { apply(String(r.result)); }; r.readAsText(f); }
      else if (txt) apply(txt); else toast('파일이나 내용을 넣어주세요');
    },
    reset: function () { ask('모든 기록을 지울까요?<br><small>되돌릴 수 없어요.</small>', '초기화', function () { Store.reset(); toast('초기화했어요'); render(); }, true); },
    mclose: closeModal,
    myes: function () { var cb = ask._cb; closeModal(); if (cb) cb(); }
  };

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-act]'); if (!t || t.disabled) return;
    var f = acts[t.dataset.act]; if (f) f(t, e);
  });
  document.addEventListener('keydown', function (e) {
    if (document.body.dataset.view !== 'play' || !st || !$('#modal').hidden) return;
    if (e.target && /^(INPUT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.key === 'Enter' || (e.key === ' ' && st.done)) {
      e.preventDefault(); if (st.done) acts.next(); else acts.check();
    } else if (/^[1-5]$/.test(e.key) && st.q.t === 'mc' && !st.done) {
      var oi = st.order[+e.key - 1]; if (oi !== undefined) pickOpt(oi);
    }
  });
  window.addEventListener('hashchange', render);
  window.addEventListener('pageshow', function () { /* 뒤로가기 복귀 시 최신 상태로 */ if (document.body.dataset.view === 'home') render(); });

  render();

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
  window.__quiz = { start: start, get sess() { return sess; }, get st() { return st; } };   // 디버깅용
})();
