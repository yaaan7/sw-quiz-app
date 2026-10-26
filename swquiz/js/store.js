/* 진행 상황 저장 (localStorage, 실패하면 메모리) */
(function () {
  var KEY = 'swquiz.v1', mem = null;
  function def() { return { v: 1, p: {}, xp: 0, days: {}, goal: 20, fast: true, mode: 'all' }; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dkey(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); if (o && typeof o === 'object') return Object.assign(def(), o); }
    } catch (e) {}
    return def();
  }
  var S = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { mem = S; }
  }

  window.Store = {
    S: S,
    get: function (id) { return S.p[id] || null; },
    // ok: 맞췄는지, first: 첫 시도인지(세션 내 재도전은 false)
    rec: function (id, ok, first) {
      var p = S.p[id] || (S.p[id] = { s: 0, c: 0, w: 0, st: 0, t: 0, lw: 0 });
      p.s++; p.t = Date.now();
      if (ok) { p.c++; p.st++; p.lw = 0; } else { p.w++; p.st = 0; p.lw = 1; }
      var gain = ok ? (first ? 10 : 5) : 0;
      S.xp += gain;
      if (first) { var k = dkey(new Date()); S.days[k] = (S.days[k] || 0) + 1; }
      save();
      return gain;
    },
    todayCount: function () { return S.days[dkey(new Date())] || 0; },
    streak: function () {
      var d = new Date(), n = 0;
      if (!S.days[dkey(d)]) d.setDate(d.getDate() - 1);
      while (S.days[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },
    set: function (k, v) { S[k] = v; save(); },
    isMastered: function (id) { var p = S.p[id]; return !!p && p.st >= 2; },
    exportJSON: function () { return JSON.stringify(S); },
    importJSON: function (txt) {
      var o = JSON.parse(txt);
      if (!o || typeof o !== 'object' || typeof o.p !== 'object') throw new Error('형식이 올바르지 않아요');
      var n = Object.assign(def(), o);
      Object.keys(S).forEach(function (k) { delete S[k]; });
      Object.assign(S, n); save();
    },
    reset: function () {
      Object.keys(S).forEach(function (k) { delete S[k]; });
      Object.assign(S, def()); save();
    }
  };
})();
