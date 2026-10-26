/* 단원 7 — 이벤트 (Lec 9) */
(function () {
  var U = 'u7';

  mc(U, '이벤트(event)란?',
    ['사용자 입력이나 브라우저 상태 변화 등 발생한 사건', '자바스크립트의 변수 종류', 'HTML 태그의 종류', '서버 응답 코드'], 0,
    '클릭, 키 입력, 로딩 완료, 타이머 등 "일어난 일"이에요. 이벤트가 발생하면 등록해 둔 이벤트 리스너(핸들러)가 실행돼요.',
    '6주차 · 이벤트', { tag: '이벤트 개념' });

  mc(U, '이벤트 리스너를 등록하는 방법이 아닌 것은?',
    ['CSS의 :event 선택자', 'HTML 태그의 onclick 속성', 'DOM 객체의 onclick 프로퍼티', 'addEventListener() 메서드'], 0,
    '등록 방법은 3가지: HTML 이벤트 속성, DOM 프로퍼티 대입, addEventListener().',
    '6주차 · 이벤트 리스너 등록', { tag: '리스너 등록' });

  fb(U, 'addEventListener로 클릭 이벤트를 등록하세요.',
    'const btn = document.getElementById("b");\nbtn.___("___", function () {\n  alert("클릭!");\n});', ['addEventListener', 'click'], ['addEventListener', 'click', 'onclick', 'attachEvent', 'mouseclick'],
    'addEventListener(이벤트 이름, 리스너). 이벤트 이름에는 on을 붙이지 않아요(click ○, onclick ✕).',
    '6주차 · addEventListener', { tag: 'addEventListener' });

  mc(U, '같은 요소에 onclick 프로퍼티를 두 번 대입하면?',
    ['나중 것으로 덮어써져 마지막 리스너만 실행된다', '둘 다 실행된다', '오류가 난다', '첫 번째만 실행된다'], 0,
    '프로퍼티 방식은 하나만 저장돼요. 여러 개를 달려면 addEventListener를 써요.',
    '6주차 · 리스너 등록', { tag: '리스너 등록' });

  mc(U, '같은 요소에 addEventListener("click", ...)을 두 번 등록하면?',
    ['등록 순서대로 둘 다 실행된다', '마지막 것만 실행된다', '첫 번째만 실행된다', '오류가 난다'], 0,
    'addEventListener는 여러 개를 중복 등록할 수 있고 등록한 순서대로 호출돼요.',
    '6주차 · addEventListener', { tag: 'addEventListener' });

  mc(U, '이벤트 리스너를 제거하는 메서드는?',
    ['removeEventListener', 'deleteEventListener', 'clearEvent', 'off'], 0,
    'removeEventListener(이름, 같은 함수 참조)로 제거해요. 익명 함수는 참조가 없어 제거할 수 없어요.',
    '6주차 · 리스너 제거', { tag: '리스너 제거' });

  mc(U, '이벤트 리스너 함수가 받는 매개변수(event 객체)로 알 수 있는 것은?',
    ['이벤트 종류, 발생 대상, 좌표 등 이벤트 정보', '서버 응답', '전체 DOM 트리', '현재 시간만'], 0,
    'event.type(종류), event.target(이벤트가 발생한 요소), clientX/clientY(마우스 좌표), key(키보드) 등이 있어요.',
    '6주차 · event 객체', { tag: 'event 객체' });

  mc(U, 'event.target이 가리키는 것은?',
    ['이벤트가 실제로 발생한 요소', '리스너가 등록된 요소', 'document', 'window'], 0,
    'target = 실제로 클릭된 가장 안쪽 요소, currentTarget = 리스너가 붙은 요소예요.',
    '6주차 · event.target', { tag: 'target', x: { 1: '그건 currentTarget이에요.' } });

  mc(U, '리스너가 부모(ul)에만 등록되어 있다. 자식 li를 클릭했을 때 e.target과 e.currentTarget은?',
    ['target = li, currentTarget = ul', 'target = ul, currentTarget = li', '둘 다 li', '둘 다 ul'], 0,
    '이벤트는 버블링으로 부모에게 전달돼요. target은 실제 클릭된 li, currentTarget은 리스너가 달린 ul.',
    '6주차 · 버블링', { tag: '버블링', code: '<ul id="list">\n  <li>A</li>\n  <li>B</li>\n</ul>\n<script>\n  list.addEventListener("click", e => {\n    // li 클릭 시 e.target? e.currentTarget?\n  });\n</script>' });

  mc(U, '이벤트 버블링이란?',
    ['자식에서 발생한 이벤트가 부모 → 조상 방향으로 전파되는 것', '부모에서 자식으로 전파되는 것', '이벤트가 취소되는 것', '이벤트가 반복되는 것'], 0,
    '버블링: 안쪽 → 바깥쪽. 캡처링: 바깥쪽 → 안쪽. 기본은 버블링 단계에서 리스너가 실행돼요.',
    '6주차 · 이벤트 전파', { tag: '버블링' });

  or(U, '내부 버튼을 클릭할 때 로그가 찍히는 순서는? (모두 버블링)',
    '<div id="a">\n  <div id="b">\n    <button id="c">클릭</button>\n  </div>\n</div>\n// 각 요소 리스너: console.log("a" | "b" | "c")',
    ['c', 'b', 'a'], [],
    '버블링은 클릭된 요소(c)부터 부모(b) → 조상(a) 순서로 올라가요.',
    '6주차 · 이벤트 전파', { tag: '버블링' });

  mc(U, '이벤트 전파를 막는 메서드는?',
    ['event.stopPropagation()', 'event.preventDefault()', 'event.stop()', 'event.cancel()'], 0,
    'stopPropagation은 전파 중단, preventDefault는 브라우저의 기본 동작 취소예요.',
    '6주차 · 이벤트 전파', { tag: 'stopPropagation', x: { 1: 'preventDefault는 기본 동작(링크 이동, 폼 제출 등)을 막아요. 전파는 그대로예요.' } });

  mc(U, 'event.preventDefault()가 하는 일은?',
    ['링크 이동, 폼 제출 같은 브라우저 기본 동작을 취소한다', '이벤트 전파를 막는다', '리스너를 제거한다', '이벤트를 다시 발생시킨다'], 0,
    '예: <a>의 클릭 시 페이지 이동, <form>의 submit 시 서버 전송을 막을 수 있어요.',
    '6주차 · preventDefault', { tag: 'preventDefault' });

  mc(U, '마우스 버튼을 눌렀다 떼는 동안 발생하는 이벤트 순서는?',
    ['mousedown → mouseup → click', 'click → mousedown → mouseup', 'mouseup → mousedown → click', 'mousedown → click → mouseup'], 0,
    'click은 mousedown과 mouseup이 같은 요소에서 일어난 후에 발생해요.',
    '6주차 · 마우스 이벤트', { tag: '마우스' });

  mc(U, '마우스가 요소 위로 올라올 때 발생하는 이벤트는?',
    ['mouseover', 'mouseout', 'mousemove', 'mouseclick'], 0,
    'mouseover(올라옴) / mouseout(벗어남) / mousemove(움직임). mouseclick은 존재하지 않아요.',
    '6주차 · 마우스 이벤트', { tag: '마우스' });

  mc(U, '입력창(input)의 값이 바뀔 때마다 즉시 발생하는 이벤트는?',
    ['input', 'change', 'blur', 'submit'], 0,
    'input: 값이 바뀔 때마다. change: 값이 바뀐 뒤 포커스를 잃을 때(텍스트 입력). ',
    '6주차 · 입력 이벤트', { tag: '입력' });

  mc(U, '키보드에서 어떤 키가 눌렸는지 확인하는 이벤트 속성은?',
    ['event.key', 'event.mouse', 'event.value', 'event.target.key'], 0,
    'keydown 이벤트에서 e.key로 눌린 키(예: "Enter", "a")를 알 수 있어요.',
    '6주차 · 키보드', { tag: '키보드' });

  mc(U, '폼 전송 시 발생하는 이벤트와 그 이름은?',
    ['submit (form 요소)', 'send (button 요소)', 'post (input 요소)', 'enter (form 요소)'], 0,
    'form 요소의 submit 이벤트에서 preventDefault()로 페이지 이동을 막고 직접 처리하는 경우가 많아요.',
    '6주차 · 폼 이벤트', { tag: 'submit' });

  mc(U, '페이지의 모든 리소스(이미지 등)가 로드된 뒤 발생하는 이벤트는?',
    ['window의 load', 'document의 click', 'body의 scroll', 'window의 ready'], 0,
    'load는 이미지, 스타일 등까지 모두 불러온 뒤, DOMContentLoaded는 HTML 파싱이 끝났을 때 발생해요.',
    '6주차 · 로드 이벤트', { tag: 'load' });

  mc(U, '실행 결과로 콘솔에 출력되는 값은? (버튼을 한 번 클릭)',
    ['1', '0', '2', 'undefined'], 0,
    'addEventListener에 전달한 함수가 클릭 시 호출되어 count가 1이 돼요.',
    '6주차 · 이벤트 리스너', { cat: 'predict', tag: '리스너', code: 'let count = 0;\nbtn.addEventListener("click", () => {\n  count++;\n  console.log(count);\n});\n// btn을 한 번 클릭' });

  mc(U, 'HTML 속성 방식 onclick="f()"와 onclick="f"의 차이는?',
    ['f()는 함수를 호출하는 코드, f는 사용할 수 없다 (속성에는 코드를 쓴다)', '둘 다 동일하다', 'f가 올바르고 f()는 오류다', '둘 다 오류다'], 0,
    'HTML 속성 방식은 문자열로 된 "코드"를 쓰므로 onclick="f()"처럼 호출식을 써요. 프로퍼티 방식은 btn.onclick = f 처럼 함수 참조를 대입해요.',
    '6주차 · 리스너 등록', { tag: '리스너 등록' });

  fb(U, '프로퍼티 방식으로 클릭 리스너를 등록하세요. (함수 참조를 대입)',
    'function hello() { alert("hi"); }\nbtn.___ = hello;', ['onclick'], ['onclick', 'click', 'addEventListener', 'onClick()', 'on-click'],
    '이벤트 프로퍼티는 on + 이벤트 이름이에요. btn.onclick = hello() 처럼 괄호를 붙이면 등록 시점에 바로 실행되니 참조만 대입하세요.',
    '6주차 · 리스너 등록', { tag: '리스너 등록' });
})();
