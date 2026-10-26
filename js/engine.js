/* 문제 선택 · 섞기 */
(function () {
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  // 가중치: 최근 틀림 > 처음 보는 문제 > 아직 익숙하지 않은 문제 > 마스터한 문제
  function weight(q) {
    var p = Store.get(q.id), w;
    if (!p) w = 3;
    else if (p.lw) w = 6;
    else if (p.st < 2) w = 2.5;
    else w = 0.6 + Math.min(2, (Date.now() - p.t) / 864e5 / 7);   // 오래될수록 복습 확률 증가
    return w * (0.5 + Math.random());
  }
  window.Eng = {
    shuffle: shuffle,
    pool: function (o) {
      o = o || {};
      return QB.filter(function (q) {
        if (o.ids && o.ids.indexOf(q.id) < 0) return false;
        if (o.unit && q.u !== o.unit) return false;
        if (o.mode && o.mode !== 'all' && q.cat !== o.mode) return false;
        if (o.wrongOnly) { var p = Store.get(q.id); if (!p || !p.w || p.st >= 2) return false; }
        return true;
      });
    },
    pick: function (pool, n) {
      var scored = pool.map(function (q) { return { q: q, w: weight(q) }; });
      scored.sort(function (a, b) { return b.w - a.w; });
      return shuffle(scored.slice(0, n).map(function (s) { return s.q; }));
    }
  };
})();
