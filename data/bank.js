/* 문제 은행 공통 정의 — 단원 목록과 문제 생성 헬퍼
 *
 * 문제 추가 방법: data/u1.js ~ u9.js 중 알맞은 파일을 열어서 아래 헬퍼를 호출하면 됩니다.
 *
 *  mc(단원, 질문, [보기들], 정답번호(0부터), 해설, 출처, {code, cat, x, tag})
 *      - code : 질문 아래에 보여줄 코드 (선택)
 *      - cat  : 'quiz'(기본) | 'predict'(결과 예측 탭에 표시)
 *      - x    : {보기번호: "그 보기를 골랐을 때 보여줄 추가 설명"} (선택)
 *      - tag  : 질문 위에 뜨는 소주제 칩 (선택)
 *
 *  fb(단원, 질문, 코드, [빈칸 정답들], [보기 토큰들], 해설, 출처, {tag})
 *      - 코드 안의 ___ (밑줄 3개)가 빈칸입니다. 빈칸 정답은 등장 순서대로.
 *      - 보기 토큰에는 정답 + 오답을 섞어서 넣으면 됩니다(정답이 빠져 있으면 자동 추가).
 *
 *  or(단원, 질문, 코드|null, [올바른 순서], [헷갈리게 할 오답 토큰], 해설, 출처, {cat, tag})
 *      - 토큰을 눌러 순서대로 나열하는 문제(출력 결과 예측, 실행 순서 등)
 */
(function () {
  var B = (window.QB = window.QB || []);

  window.UNITS = [
    { id: 'u1', name: '웹과 HTML 기초', sub: '1–2주차 · Lec 1–2' },
    { id: 'u2', name: 'CSS3', sub: '3주차 · Lec 3' },
    { id: 'u3', name: '자바스크립트 기초', sub: '3–4주차 · Lec 4' },
    { id: 'u4', name: '함수', sub: '5주차 · Ch 5' },
    { id: 'u5', name: '객체와 프로토타입', sub: '7주차 · Ch 6' },
    { id: 'u6', name: '클래스', sub: '8주차 · Ch 9' },
    { id: 'u7', name: '이벤트', sub: '6주차 · Lec 9' },
    { id: 'u8', name: 'DOM', sub: '6주차 · Lec 8' },
    { id: 'u9', name: '콜스택 · 비동기', sub: '8주차 · Deep Dive 42·45·46' }
  ];

  function hash(s) {
    var x = 5381;
    for (var i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0;
    return (x >>> 0).toString(36);
  }
  function mkid(u, q, code) { return u + '-' + hash(q + '|' + (code || '')); }

  window.mc = function (u, q, opts, a, why, src, o) {
    o = o || {};
    B.push({ id: mkid(u, q, o.code), u: u, t: 'mc', cat: o.cat || 'quiz', q: q, code: o.code || null,
      opts: opts, a: a, why: why, src: src || '', x: o.x || null, tag: o.tag || '', run: o.run || null });
  };
  window.fb = function (u, q, code, answers, bank, why, src, o) {
    o = o || {};
    B.push({ id: mkid(u, q, code), u: u, t: 'fb', cat: 'code', q: q, code: code,
      answers: answers, bank: bank, why: why, src: src || '', tag: o.tag || '', exec: o.exec || null });
  };
  window.or = function (u, q, code, seq, extra, why, src, o) {
    o = o || {};
    B.push({ id: mkid(u, q, code), u: u, t: 'or', cat: o.cat || 'predict', q: q, code: code || null,
      seq: seq, extra: extra || [], why: why, src: src || '', tag: o.tag || '', run: o.run || null });
  };
})();
