/* 단원 8 — DOM (Lec 8) */
(function () {
  var U = 'u8';

  mc(U, 'DOM(Document Object Model)이란?',
    ['HTML 문서를 객체의 트리 구조로 표현해 자바스크립트로 접근·조작하게 하는 모델', 'CSS 파일 형식', '서버 데이터베이스', '브라우저 확장 프로그램'], 0,
    '브라우저가 HTML을 파싱해 DOM 트리를 만들고, 자바스크립트는 DOM을 통해 요소를 읽고 바꿔요.',
    '6주차 · DOM', { tag: 'DOM 개념' });

  mc(U, 'DOM 트리의 최상위(루트) 노드는?',
    ['document', 'html', 'body', 'window'], 0,
    'document 객체가 트리의 루트, 그 아래 document.documentElement(html), head, body 순이에요. window는 브라우저 창 객체예요.',
    '6주차 · DOM 트리', { tag: 'DOM 트리', x: { 1: 'html 요소는 document의 자식이에요.', 3: 'window는 DOM이 아니라 BOM(브라우저 객체)이에요.' } });

  mc(U, 'DOM에서 노드의 종류가 아닌 것은?',
    ['CSS 노드', '요소(Element) 노드', '텍스트(Text) 노드', '속성(Attribute) 노드'], 0,
    '요소 노드, 텍스트 노드, 속성 노드, 주석 노드, 문서 노드 등이 있어요.',
    '6주차 · 노드 종류', { tag: '노드' });

  fb(U, 'id가 "title"인 요소를 찾아 변수에 담으세요.',
    'const el = document.___("title");', ['getElementById'], ['getElementById', 'getElementsById', 'querySelector', 'getElement', 'findById'],
    'getElementById는 id가 일치하는 요소 하나를 반환해요. (Elements 복수형이 아니에요!) querySelector를 쓸 땐 "#title"로 써야 해요.',
    '6주차 · 요소 선택', { tag: '요소 선택', exec: 'const document = { getElementById: () => "ok" }; const el = document.getElementById("title"); console.log(el)' });

  mc(U, 'document.querySelector(".box")가 반환하는 것은?',
    ['조건에 맞는 첫 번째 요소 하나', '조건에 맞는 모든 요소', '요소의 개수', '문자열'], 0,
    'querySelector는 첫 번째 요소(없으면 null), querySelectorAll은 모든 요소(NodeList)를 반환해요.',
    '6주차 · 요소 선택', { tag: 'querySelector', x: { 1: '모든 요소는 querySelectorAll이에요.' } });

  mc(U, '조건에 맞는 요소가 없을 때 querySelector의 반환값은?',
    ['null', 'undefined', '빈 배열', '오류'], 0,
    '없으면 null이에요. null에 .style 등을 접근하면 TypeError이므로 확인이 필요해요.',
    '6주차 · 요소 선택', { cat: 'predict', tag: 'querySelector', code: 'const el = document.querySelector(".none");\nconsole.log(el);' });

  mc(U, 'getElementsByClassName()의 반환값은?',
    ['여러 요소가 담긴 유사 배열(HTMLCollection)', '요소 하나', '문자열', '진짜 배열'], 0,
    '복수형(Elements)은 컬렉션을 반환해요. 인덱스([0])로 접근하고 반복하려면 for 문 또는 Array.from을 써요.',
    '6주차 · 요소 선택', { tag: '요소 선택' });

  mc(U, '요소의 텍스트 내용을 바꾸는 가장 안전한 프로퍼티는?',
    ['textContent', 'innerHTML', 'outerHTML', 'html'], 0,
    'textContent는 문자열을 텍스트로만 처리해요. innerHTML은 HTML로 해석해서 태그가 실행되므로 사용자 입력에 쓰면 XSS 위험이 있어요.',
    '6주차 · 내용 변경', { tag: '내용 변경', x: { 1: 'innerHTML도 변경은 가능하지만 HTML로 해석돼 보안 위험이 있어요.' } });

  mc(U, 'innerHTML과 textContent의 차이로 맞는 것은?',
    ['innerHTML은 문자열을 HTML로 해석하고 textContent는 텍스트 그대로 넣는다', '둘은 완전히 같다', 'textContent가 HTML 태그를 해석한다', 'innerHTML은 읽기 전용이다'], 0,
    '예: el.innerHTML = "<b>안녕</b>" → 굵은 글씨. el.textContent = "<b>안녕</b>" → 태그가 글자 그대로 보여요.',
    '6주차 · 내용 변경', { tag: '내용 변경' });

  fb(U, '요소의 글자색을 빨강으로 바꾸세요.',
    'el.___.color = "red";', ['style'], ['style', 'css', 'class', 'attr', 'font'],
    'el.style.속성 으로 인라인 스타일을 바꿔요. CSS 속성이 하이픈이면 camelCase로 써요. (background-color → backgroundColor)',
    '6주차 · 스타일 변경', { tag: '스타일' });

  mc(U, 'CSS의 background-color를 자바스크립트로 바꿀 때 올바른 표기는?',
    ['el.style.backgroundColor', 'el.style.background-color', 'el.style["backgroundcolor"]', 'el.css.background_color'], 0,
    '하이픈은 자바스크립트에서 빼기 연산자라서 camelCase(backgroundColor)로 써요.',
    '6주차 · 스타일 변경', { tag: '스타일' });

  mc(U, '요소의 클래스를 추가하는 방법은?',
    ['el.classList.add("on")', 'el.class.add("on")', 'el.addClass("on")', 'el.className.add("on")'], 0,
    'classList.add/remove/toggle/contains로 클래스를 다뤄요. addClass는 jQuery 메서드예요.',
    '6주차 · 클래스 조작', { tag: 'classList' });

  mc(U, 'classList.toggle("on")를 두 번 연속 호출한 뒤 클래스 상태는? (처음엔 없음)',
    ['on 클래스가 없다', 'on 클래스가 있다', '오류', 'on이 두 번 들어 있다'], 0,
    'toggle은 있으면 제거, 없으면 추가해요. 첫 번째 호출로 추가, 두 번째 호출로 다시 제거.',
    '6주차 · 클래스 조작', { cat: 'predict', tag: 'classList', code: 'el.classList.toggle("on");\nel.classList.toggle("on");\n// 처음에는 on 클래스가 없었다' });

  mc(U, '요소의 속성 값을 읽거나 바꾸는 메서드 쌍은?',
    ['getAttribute / setAttribute', 'getProp / setProp', 'readAttr / writeAttr', 'attr / setAttr'], 0,
    'el.getAttribute("href"), el.setAttribute("href", "...")처럼 써요. img.src처럼 프로퍼티로 직접 접근할 수도 있어요.',
    '6주차 · 속성 조작', { tag: '속성' });

  fb(U, 'div 요소를 새로 만들어 body에 추가하세요.',
    'const d = document.___("div");\nd.textContent = "새 요소";\ndocument.body.___(d);', ['createElement', 'appendChild'], ['createElement', 'appendChild', 'createNode', 'add', 'newElement', 'insert'],
    'createElement로 노드를 만들고, appendChild(또는 append)로 DOM 트리에 붙여야 화면에 보여요. 만들기만 하면 화면에 나오지 않아요.',
    '6주차 · 노드 생성', { tag: '노드 생성' });

  mc(U, 'createElement로 만든 요소를 appendChild 하지 않으면?',
    ['화면에 나타나지 않는다', '자동으로 body 끝에 붙는다', '오류가 난다', '맨 위에 붙는다'], 0,
    '만든 노드는 메모리에만 있어요. DOM 트리에 연결(append)해야 화면에 렌더링돼요.',
    '6주차 · 노드 생성', { tag: '노드 생성' });

  mc(U, '요소를 DOM에서 제거하는 방법은?',
    ['el.remove()', 'el.delete()', 'el.destroy()', 'document.remove(el)'], 0,
    'el.remove() 또는 부모.removeChild(el)로 제거해요.',
    '6주차 · 노드 제거', { tag: '노드 제거' });

  mc(U, 'el.parentNode / el.children / el.nextElementSibling 이 각각 나타내는 것은?',
    ['부모 / 자식 요소들 / 다음 형제 요소', '자식 / 부모 / 이전 형제', '조상 / 후손 / 다음 형제', '부모 / 자식 / 첫 형제'], 0,
    'DOM 탐색: 위(parentNode), 아래(children, firstElementChild), 옆(nextElementSibling, previousElementSibling).',
    '6주차 · DOM 탐색', { tag: 'DOM 탐색' });

  mc(U, '자바스크립트를 <head>에 두면 id로 요소를 찾지 못하는 이유는?',
    ['스크립트 실행 시점에 body의 요소가 아직 만들어지지 않았기 때문', 'head에서는 자바스크립트가 금지돼서', 'id는 body에서만 쓰여서', '브라우저 버그라서'], 0,
    '브라우저는 위에서 아래로 파싱해요. 해결: 스크립트를 body 끝에 두거나, defer 속성, 또는 DOMContentLoaded/load 이벤트 안에서 실행해요.',
    '6주차 · 스크립트 위치', { tag: '로딩 시점' });

  mc(U, '<script src="a.js" defer>의 defer가 하는 일은?',
    ['HTML 파싱이 끝난 뒤에 스크립트를 실행한다', '스크립트를 무시한다', '스크립트를 두 번 실행한다', '비동기로 즉시 실행한다'], 0,
    'defer는 다운로드는 병렬로, 실행은 HTML 파싱 완료 후에 해요. 그래서 head에 두어도 요소를 찾을 수 있어요.',
    '6주차 · defer', { tag: 'defer' });

  mc(U, '실행 결과로 화면에 보이는 것은?',
    ['<b>굵게</b> 라는 글자 그대로', '굵은 글씨의 "굵게"', '아무것도 안 보임', '오류'], 0,
    'textContent는 HTML을 해석하지 않고 문자 그대로 보여줘요.',
    '6주차 · textContent', { cat: 'predict', tag: '내용 변경', code: '<p id="p"></p>\n<script>\n  p.textContent = "<b>굵게</b>";\n</script>' });

  mc(U, 'document.getElementById("a").value로 값을 읽을 수 있는 요소는?',
    ['input, textarea, select 같은 폼 요소', 'div', 'p', 'span'], 0,
    'value는 폼 요소의 입력 값이에요. 일반 요소의 글자는 textContent/innerText로 읽어요. 또 value는 항상 문자열이에요.',
    '6주차 · 폼 값', { tag: 'value' });

  mc(U, 'input의 value로 읽은 "5"와 "3"을 더하면?',
    ['"53"', '8', 'NaN', '오류'], 0,
    'value는 문자열이라 + 연산은 이어붙이기예요. Number()나 parseInt로 변환해서 더해야 해요.',
    '6주차 · 폼 값', { cat: 'predict', tag: 'value', code: 'const a = "5";   // input.value\nconst b = "3";   // input.value\nconsole.log(a + b);', run: 'const a="5"; const b="3"; console.log(a + b)' });

  mc(U, 'window 객체에 속하지 않는 것은?',
    ['HTML 요소 하나하나', 'document', 'location', 'history'], 0,
    'BOM(브라우저 객체 모델)의 window 아래에는 document, location, history, navigator, screen 등이 있어요. 개별 요소는 document(DOM)를 통해 접근해요.',
    '6주차 · BOM', { tag: 'BOM' });
})();
