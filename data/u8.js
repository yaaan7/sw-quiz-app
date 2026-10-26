/* 단원 8 — DOM (Lec 8: HTML DOM) — 슬라이드 범위만 */
(function () {
  var U = 'u8';

  // ── DOM 개념 ────────────────────────────────
  mc(U, '자바스크립트 코드가 브라우저로부터 제공받아 활용하는 객체 3가지 유형은?',
    ['BOM 객체, HTML DOM 객체, 코어 객체', 'CSS 객체, HTML 객체, 코어 객체', 'window, history, location', 'BOM 객체, XML 객체, 서버 객체'], 0,
    'window·history 같은 BOM 객체, document·body 같은 HTML DOM 객체, Array·Date 같은 코어 객체가 있어요.',
    '6주차 · HTML 페이지와 자바스크립트 객체', { tag: '3가지 객체' });

  mc(U, 'HTML DOM의 설명으로 맞는 것은?',
    ['웹 페이지에 작성된 HTML 태그 하나당 객체(DOM 객체)가 하나씩 생성된다', '태그 종류와 관계없이 객체가 하나만 생성된다', 'CSS 파일마다 객체가 생성된다', '이벤트마다 객체가 생성된다'], 0,
    '목적은 HTML 태그가 출력된 모양이나 콘텐츠를 제어하는 것이에요. 태그의 포함관계에 따라 부모-자식 트리(DOM 트리)가 만들어져요.',
    '6주차 · HTML DOM', { tag: 'DOM 개념' });

  mc(U, 'DOM 트리의 루트(뿌리)는?',
    ['document 객체', 'html 객체', 'body 객체', 'window 객체'], 0,
    'DOM 트리의 루트는 document 객체예요. 브라우저는 HTML 문서를 로드하기 전에 document 객체를 먼저 생성하고 그 아래로 트리를 만들어요.',
    '6주차 · DOM 트리의 특징', { tag: 'DOM 트리', x: { 3: 'window는 BOM 객체예요. DOM 트리의 루트는 document예요.' } });

  or(U, '브라우저가 HTML 태그를 화면에 그리는 과정을 순서대로 누르세요.',
    null,
    ['DOM 트리의 틀(document) 생성', 'HTML 태그를 읽어 DOM 객체 생성', 'DOM 객체를 화면에 출력', '로딩 완료 시 DOM 트리 완성'], [],
    '1. document 생성 → 2. 태그를 읽어 DOM 객체 생성 → 3. 화면 출력 → 4. 로딩이 끝나면 트리 완성. 이후 DOM 객체를 변경하면 브라우저가 해당 태그의 출력 모양을 바로 갱신해요.',
    '6주차 · DOM 트리의 특징', { cat: 'quiz', tag: 'DOM 트리' });

  mc(U, 'DOM 객체를 변경하면 화면은?',
    ['브라우저가 해당 HTML 태그의 출력 모양을 바로 갱신한다', '새로고침해야 반영된다', '변하지 않는다', '오류가 난다'], 0,
    'DOM 객체를 제어하면 HTML 태그를 제어하는 효과가 나요.',
    '6주차 · DOM 트리의 특징', { tag: 'DOM 트리' });

  mc(U, 'DOM 객체를 구성하는 5가지 요소가 아닌 것은?',
    ['서버 응답', '프로퍼티', '메소드', '컬렉션'], 0,
    '프로퍼티, 메소드, 컬렉션, 이벤트 리스너, CSS3 스타일 이렇게 5가지예요.',
    '6주차 · DOM 객체의 구성 요소', { tag: 'DOM 구성' });

  mc(U, 'DOM 객체의 "컬렉션"이란?',
    ['자식 DOM 객체들의 주소를 가지는 등 배열과 비슷한 집합적 정보', 'HTML 속성을 반영한 값', 'CSS 스타일 정보', '이벤트 리스너 목록'], 0,
    '프로퍼티는 HTML 태그의 속성을 반영하고, 메소드는 DOM 객체의 멤버 함수, style 프로퍼티로는 CSS3 스타일을 제어해요.',
    '6주차 · DOM 객체의 구성 요소', { tag: 'DOM 구성' });

  mc(U, 'HTML 태그(엘리먼트)를 구성하는 5가지 요소는?',
    ['엘리먼트 이름, 속성, CSS3 스타일, 이벤트 리스너, 콘텐츠(innerHTML)', '이름, 값, 타입, 크기, 위치', '태그, 클래스, 아이디, 링크, 이미지', '프로퍼티, 메소드, 컬렉션, 리스너, 스타일'], 0,
    '마지막 선택지는 DOM 객체의 5가지 구성 요소예요. 둘을 헷갈리지 마세요.',
    '6주차 · HTML 태그의 요소', { tag: 'HTML 태그 요소' });

  mc(U, 'DOM 트리에서 form의 nextElementSibling은? (body 안에 p, form이 순서대로 있음)',
    ['null', 'p', 'body', 'html'], 0,
    'form 다음에 형제가 없으므로 null이에요. 반대로 p의 previousElementSibling도 null, p의 nextElementSibling은 form이에요.',
    '6주차 · DOM 객체 사이의 관계', { tag: 'DOM 관계', x: { 1: 'p는 form의 이전 형제(previousElementSibling)예요.' } });

  mc(U, 'DOM 객체의 parentElement / firstElementChild / childElementCount가 각각 나타내는 것은?',
    ['부모 요소 / 첫 번째 자식 요소 / 자식 요소의 개수', '형제 요소 / 마지막 자식 / 글자 수', '조상 요소 / 모든 자식 / 태그 이름', '부모 요소 / 마지막 자식 / 속성 개수'], 0,
    'lastElementChild는 마지막 자식, nextElementSibling / previousElementSibling은 다음/이전 형제를 가리켜요.',
    '6주차 · DOM 객체 사이의 관계', { tag: 'DOM 관계' });

  // ── 요소 찾기 · 스타일 · 내용 ────────────────
  fb(U, 'id가 firstP인 DOM 객체를 찾아 글자 색을 바꾸세요.',
    'let p = document.___("firstP")\np.style.color = "red"', ['getElementById'], ['getElementById', 'getElementsById', 'getElementByName', 'querySelector', 'findById'],
    'document.getElementById("id값")은 id가 일치하는 DOM 객체 하나를 리턴해요. (Elements가 아니라 Element예요.)',
    '6주차 · DOM 객체 찾기', { tag: 'getElementById' });

  mc(U, 'CSS의 font-size 스타일을 자바스크립트로 바꿀 때 올바른 표기는?',
    ['span.style.fontSize = "30px"', 'span.style.font-size = "30px"', 'span.fontSize.style = "30px"', 'span.style("font-size") = "30px"'], 0,
    'background-color → backgroundColor, font-size → fontSize처럼 하이픈을 없애고 다음 글자를 대문자로 써요(camelCase).',
    '6주차 · CSS3 스타일 동적 변경', { tag: '스타일', x: { 1: '하이픈(-)은 자바스크립트에서 빼기 연산자라서 쓸 수 없어요.' } });

  fb(U, '<span>의 테두리를 3px magenta 점선으로 바꾸세요.',
    'span.style.___ = "3px dotted magenta"', ['border'], ['border', 'borderStyle', 'outline', 'line', 'frame'],
    'style.border에 CSS의 border 단축 속성 값을 문자열로 넣어요.',
    '6주차 · 예제 8-2', { tag: '스타일' });

  mc(U, 'span.style.display = "block"을 실행하면?',
    ['인라인 박스가 블록 박스로 바뀐다', 'span이 사라진다', '글자색이 바뀐다', '오류가 난다'], 0,
    '예제 8-2에서는 display, width, border, margin을 바꿔 인라인 요소인 span을 박스처럼 보이게 했어요.',
    '6주차 · 예제 8-2', { tag: '스타일' });

  mc(U, 'innerHTML 프로퍼티의 설명으로 맞는 것은?',
    ['시작 태그와 종료 태그 사이에 들어 있는 HTML 콘텐츠다', '태그의 id 값이다', '태그의 CSS 스타일 전체다', '태그의 부모 요소다'], 0,
    'innerHTML을 수정하면 HTML 태그의 콘텐츠가 바뀌어요. 문자열 안에 태그가 있으면 HTML로 해석돼요.',
    '6주차 · innerHTML', { tag: 'innerHTML' });

  mc(U, 'p.innerHTML = "나의 <img src=\'puppy.jpg\'> 강아지입니다."를 실행하면 화면에는?',
    ['이미지가 포함된 문장이 출력된다', '<img ...> 글자가 그대로 보인다', '아무것도 안 보인다', '오류가 난다'], 0,
    'innerHTML 안의 태그는 HTML로 해석돼 DOM 객체로 바뀌어요. 그래서 이미지가 보여요.',
    '6주차 · 예제 8-3', { tag: 'innerHTML' });

  mc(U, '<button onclick="this.style.backgroundColor=\'orange\'">을 클릭하면 어떤 일이 일어날까?',
    ['클릭된 버튼 자신의 배경색이 orange로 바뀐다', '모든 버튼의 배경색이 바뀐다', 'window의 배경이 바뀐다', '아무 일도 없다'], 0,
    'this는 객체 자신을 가리키는 키워드예요. DOM 객체에서는 이벤트가 발생한 그 태그 자신을 가리켜요.',
    '6주차 · this', { tag: 'this' });

  mc(U, '<button onclick="change(this, \'30px\', \'red\')">에서 change 함수의 첫 번째 인수 this는?',
    ['이 <button> 객체의 주소', 'window 객체', 'document 객체', '문자열 "this"'], 0,
    '함수 change(obj, size, color)에서 obj.style.color = color처럼 클릭된 객체를 직접 제어할 수 있어요.',
    '6주차 · 예제 8-4', { tag: 'this' });

  // ── document 객체 ──────────────────────────
  mc(U, 'document 객체에 대한 설명으로 맞는 것은?',
    ['HTML 문서 전체를 대변하는 객체이고, DOM 트리의 최상위 객체다', 'HTML 태그 하나를 대변하는 객체다', '브라우저 창을 대변하는 객체다', '서버를 대변하는 객체다'], 0,
    'window.document 또는 document 이름으로 접근해요. DOM 객체에 접근하는 경로의 시작점이에요.',
    '6주차 · document 객체', { tag: 'document' });

  mc(U, 'document.style.color = "red"를 실행하면?',
    ['오류 (document에는 CSS3 스타일 시트가 연결되어 있지 않다)', '문서의 글자색이 빨강이 된다', '배경이 빨강이 된다', '무시된다'], 0,
    'document 객체는 DOM 객체가 아니라서 style 프로퍼티가 없어요. 글자색을 바꾸려면 document.body.style.color를 써요.',
    '6주차 · document 객체', { cat: 'predict', tag: 'document', code: 'document.style.color = "red"' });

  mc(U, 'document.documentElement.tagName은 무엇을 가리킬까?',
    ['<html> 태그 (문서의 최상위 요소)', '<head> 태그', '<body> 태그', '<title> 태그'], 0,
    'document의 주요 프로퍼티: location/URL(주소), title(제목), head, body, domain, lastModified, readyState, referrer, activeElement(포커스 가진 요소), documentElement(html 요소).',
    '6주차 · 예제 8-5', { tag: 'document 프로퍼티' });

  mc(U, 'document.activeElement는?',
    ['현재 포커스를 가지고 있는 요소', '마지막으로 클릭한 요소', '가장 위에 있는 요소', '이벤트가 없는 요소'], 0,
    '예제 8-5에서 input 태그에 focus()를 주면 activeElement.value로 그 input의 값을 읽을 수 있어요. 커서가 깜박이고 있으면 포커스가 있다는 뜻이에요.',
    '6주차 · 예제 8-5', { tag: 'document 프로퍼티' });

  mc(U, 'document.getElementsByTagName("div")가 리턴하는 것은?',
    ['태그 이름이 같은 모든 DOM 객체의 컬렉션', '첫 번째 div 하나', 'div의 개수(숫자)', '문자열'], 0,
    '컬렉션의 length로 개수를 알 수 있고, 인덱스([0])로 접근해요. getElementsByClassName도 같은 방식으로 class가 같은 모든 객체의 컬렉션을 리턴해요.',
    '6주차 · DOM 객체 찾기', { tag: '요소 찾기' });

  fb(U, 'class가 "place"인 모든 요소를 찾아 순회하세요.',
    'let tagArray = document.___("place")\nfor (let i = 0; i < tagArray.length; i++) {\n  tagArray[i].style.color = "orchid"\n}', ['getElementsByClassName'], ['getElementsByClassName', 'getElementsByTagName', 'getElementById', 'getClass', 'querySelector'],
    'class 속성으로 찾을 때는 getElementsByClassName, 태그 이름으로 찾을 때는 getElementsByTagName이에요.',
    '6주차 · 예제 8-7', { tag: '요소 찾기' });

  mc(U, 'class="plain"인 div가 2개, class="important"인 div가 1개일 때 document.getElementsByClassName("plain").length는?',
    ['2', '3', '1', '0'], 0,
    'class가 plain인 태그의 개수만 세요.',
    '6주차 · DOM 객체 찾기', { cat: 'predict', tag: '요소 찾기', code: '<div class="plain">...</div>\n<div class="important">...</div>\n<div class="plain">...</div>\n<script>\n  let plainClasses = document.getElementsByClassName("plain")\n  console.log(plainClasses.length)\n</script>' });

  // ── write() · open/close ──────────────────
  mc(U, 'document.write()가 하는 일은?',
    ['document 객체에 담긴 HTML 콘텐츠 마지막에 HTML 태그들을 추가한다', '문서 전체를 지운다', '새 창을 연다', '파일에 저장한다'], 0,
    '추가된 HTML 태그는 DOM 객체로 바뀌어 DOM 트리에 들어가고 화면에 출력돼요.',
    '6주차 · document.write()', { tag: 'write' });

  mc(U, 'document.writeln(5) 뒤에 이어서 출력하면?',
    ['다음 줄로 넘어가지 못하고 빈 칸 하나 정도 띄는 효과만 있다', '항상 다음 줄로 넘어간다', '<br>이 자동으로 붙는다', '오류가 난다'], 0,
    'writeln()은 텍스트에 \\n을 덧붙이는데 HTML에서 \\n은 한 칸 띄는 효과예요. 줄을 바꾸려면 <br>을 써야 해요.',
    '6주차 · 예제 8-8', { tag: 'writeln' });

  mc(U, '문서 로딩이 끝난 뒤(클릭 이벤트 등) document.write()를 호출하면?',
    ['이전 내용이 지워지고 write한 내용만 남는다', '문서 끝에 추가된다', '오류가 난다', '아무 일도 없다'], 0,
    '문서가 닫힌 뒤 write()를 하면 document가 다시 열려서 기존 내용이 지워져요. 예제 8-9가 "write()를 잘못 사용하는 예"예요.',
    '6주차 · 예제 8-9', { tag: 'write', code: '<body onclick="document.write(\'<h3>클릭되었습니다</h3>\')">\n<h3>write()를 잘못 사용하는 예</h3>\n<p>웹브라우저의 바탕 아무 곳이나 클릭해보세요.</p>\n</body>' });

  mc(U, 'document.open()과 document.close()의 역할은?',
    ['open: 기존 콘텐츠를 지우고 새 HTML 페이지 시작 / close: 페이지 완성(이후 write 불가)', 'open: 파일 열기 / close: 프로그램 종료', 'open: 새 창 열기 / close: 창 닫기', 'open: 태그 열기 / close: 태그 닫기'], 0,
    'document.close()를 호출하면 현재 HTML 페이지가 완성되고 더 이상 document.write()를 할 수 없어요.',
    '6주차 · document 열기와 닫기', { tag: 'open/close' });

  // ── 동적 구성 ───────────────────────────────
  fb(U, '<div> DOM 객체를 만들어 내용을 넣고 부모에 붙이세요.',
    'let newDIV = document.___("div")\nnewDIV.innerHTML = "새로 생성된 DIV입니다."\nobj.___(newDIV)', ['createElement', 'appendChild'], ['createElement', 'appendChild', 'createNode', 'insertChild', 'newElement', 'removeChild'],
    'createElement("태그이름")으로 DOM 객체를 만들고 부모.appendChild(객체)로 DOM 트리의 마지막 자식으로 삽입해요.',
    '6주차 · 문서의 동적 구성', { tag: '동적 생성' });

  mc(U, 'DOM 트리에 삽입하는 메소드 두 가지는?',
    ['appendChild(DOM객체), insertBefore(DOM객체, 기준자식)', 'addChild, addBefore', 'append, prepend만 있다', 'push, unshift'], 0,
    'appendChild는 마지막 자식으로, insertBefore는 기준 자식 앞에 삽입해요.',
    '6주차 · 문서의 동적 구성', { tag: '동적 생성' });

  mc(U, 'newDIV.setAttribute("id", "myDiv")가 하는 일은?',
    ['태그에 id="myDiv" 속성을 지정한다', 'newDIV를 삭제한다', 'myDiv라는 변수를 만든다', '배경색을 바꾼다'], 0,
    '이 코드는 사실상 <div id="myDiv" style="background-color:yellow">새로 생성된 DIV입니다.</div> 태그 정보를 가진 DOM 객체를 만드는 거예요.',
    '6주차 · 문서의 동적 구성', { tag: '동적 생성' });

  fb(U, '자신을 부모에서 제거하세요.',
    'newDIV.onclick = function () {\n  let p = this.parentElement\n  p.___(this)\n}', ['removeChild'], ['removeChild', 'remove', 'deleteChild', 'delete', 'dropChild'],
    '부모.removeChild(떼어내고자 하는 자식 객체)로 삭제해요. 예제 8-11에서는 DIV를 클릭하면 삭제돼요.',
    '6주차 · 예제 8-11', { tag: '동적 삭제' });

  mc(U, 'document.createElement("div")만 호출하고 appendChild는 하지 않았다면?',
    ['DOM 객체는 만들어졌지만 화면에는 나타나지 않는다', '화면에 바로 나타난다', '오류가 난다', '문서 맨 위에 나타난다'], 0,
    '만든 객체를 DOM 트리에 삽입해야 브라우저가 화면에 출력해요.',
    '6주차 · 문서의 동적 구성', { tag: '동적 생성' });

  mc(U, 'window.open("", "outWin", "width=300,height=200")으로 연 새 창에 HTML을 쓰는 순서로 알맞은 것은?',
    ['newWin.document.open() → write() → close()', 'write() → open() → close()', 'close() → write() → open()', 'open()만 호출하면 된다'], 0,
    'HTML 문서 작성기 예제(8-10)처럼 새 창의 document를 열고, write로 내용을 쓰고, close로 완성해요.',
    '6주차 · 예제 8-10', { tag: 'open/close' });
})();
