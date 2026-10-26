/* 가벼운 코드 하이라이터 (HTML / CSS / JS). 빈칸 ___ 는 \uE000 로 치환해 보호합니다. */
(function () {
  var BL = '\uE000';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function sp(c, t) { return '<span class="' + c + '">' + esc(t) + '</span>'; }

  var KW = /^(?:function|return|const|let|var|if|else|for|while|do|switch|case|break|continue|default|new|class|extends|super|static|get|set|this|typeof|instanceof|in|of|try|catch|finally|throw|async|await|delete|void|import|export)$/;
  var LIT = /^(?:null|undefined|true|false|NaN|Infinity)$/;
  var BI = /^(?:console|document|window|Math|Object|Array|Promise|JSON|Number|String|parseInt|parseFloat|setTimeout|setInterval|clearTimeout|clearInterval|fetch|alert|prompt|confirm|location|history)$/;

  function hlJS(src) {
    var re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)|(0x[0-9a-fA-F]+|\b\d+(?:\.\d+)?(?:e\d+)?\b)|([A-Za-z_$\uE000][\w$\uE000]*)|([\s\S])/g;
    var out = '', m;
    while ((m = re.exec(src))) {
      if (m[1]) out += sp('c', m[1]);
      else if (m[2]) out += sp('s', m[2]);
      else if (m[3]) out += sp('n', m[3]);
      else if (m[4]) {
        var w = m[4], rest = src.slice(re.lastIndex);
        if (w.indexOf(BL) >= 0) out += esc(w);
        else if (KW.test(w)) out += sp('k', w);
        else if (LIT.test(w)) out += sp('n', w);
        else if (BI.test(w)) out += sp('b', w);
        else if (/^\s*\(/.test(rest)) out += sp('f', w);
        else out += esc(w);
      } else out += esc(m[5]);
    }
    return out;
  }

  function hlCSS(src) {
    var re = /(\/\*[\s\S]*?\*\/)|("[^"]*"|'[^']*')|([^{};]+?(?=\s*\{))|([\w\-\uE000]+)(\s*:)|(#[0-9a-fA-F]{3,8}\b)|(-?\d*\.?\d+(?:px|em|rem|%|s|deg|vw|vh|pt)?)|([\s\S])/g;
    var out = '', m;
    while ((m = re.exec(src))) {
      if (m[1]) out += sp('c', m[1]);
      else if (m[2]) out += sp('s', m[2]);
      else if (m[3]) out += sp('k', m[3]);
      else if (m[4]) out += sp('b', m[4]) + esc(m[5]);
      else if (m[6]) out += sp('n', m[6]);
      else if (m[7]) out += sp('n', m[7]);
      else out += esc(m[8]);
    }
    return out;
  }

  function hlTag(t) {
    var m = /^(<\/?)([\w\-\uE000]+)([\s\S]*?)(\/?>)$/.exec(t);
    if (!m) return esc(t);
    var out = esc(m[1]) + sp('k', m[2]), a = m[3], x;
    var re = /(\s+)|([\w:\-\uE000]+)(?:(=)("[^"]*"|'[^']*'|[^\s>]+))?|([\s\S])/g;
    while ((x = re.exec(a))) {
      if (x[1]) out += x[1];
      else if (x[2]) out += sp('b', x[2]) + (x[3] ? esc(x[3]) + sp('s', x[4]) : '');
      else out += esc(x[5]);
    }
    return out + esc(m[4]);
  }
  function hlHTML(src) {
    var re = /(<!--[\s\S]*?-->)|(<script\b[^>]*>)([\s\S]*?)(<\/script>)|(<style\b[^>]*>)([\s\S]*?)(<\/style>)|(<\/?[A-Za-z][^>]*>)|([\s\S])/g;
    var out = '', m;
    while ((m = re.exec(src))) {
      if (m[1]) out += sp('c', m[1]);
      else if (m[2]) out += hlTag(m[2]) + hlJS(m[3]) + hlTag(m[4]);
      else if (m[5]) out += hlTag(m[5]) + hlCSS(m[6]) + hlTag(m[7]);
      else if (m[8]) out += hlTag(m[8]);
      else out += esc(m[9]);
    }
    return out;
  }

  function detect(c) {
    var hasTag = /<\/?[A-Za-z][^>]*>/.test(c);
    var jsish = /\b(function|const|let|var|class|=>|console)\b/.test(c);
    if (/^\s*</.test(c) || (hasTag && !jsish)) return 'html';
    if (!jsish && /[^\s{};][^{};]*\{[^{}]*:[^{}]*\}?/.test(c)) return 'css';
    return 'js';
  }

  // 반환: HTML 문자열. 빈칸은 \uE000 가 그대로 남으므로 호출자가 치환합니다.
  window.Hl = {
    BL: BL,
    esc: esc,
    render: function (code) {
      var src = String(code).replace(/___/g, BL), l = detect(src);
      return l === 'html' ? hlHTML(src) : l === 'css' ? hlCSS(src) : hlJS(src);
    }
  };
})();
