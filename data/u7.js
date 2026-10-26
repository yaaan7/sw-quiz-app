/* 단원 7 — 이벤트 (Lec 9) — 슬라이드 범위만 */
(function () {
  var U = 'u7';

  // ── 개념 ────────────────────────────────────
  mc(U, '이벤트(event)란?',
    ['클릭, 키 입력, 로딩 완료, 타임아웃 등 사용자 행위나 문서·브라우저 상태 변화로 발생한 사건', '자바스크립트 변수의 종류', 'HTML 태그의 종류', '서버가 보내는 응답 코드'], 0,
    '이벤트가 발생하면 이에 대처하기 위해 작성한 자바스크립트 코드(이벤트 리스너)가 호출돼요.',
    '7주차 · 이벤트 개요', { tag: '이벤트 개념' });

  mc(U, '이벤트 리스너 이름은 어떻게 만들까?',
    ['이벤트 이름 앞에 on을 붙인다 (mousedown → onmousedown)', '이벤트 이름 뒤에 Listener를 붙인다', '이벤트 이름 앞에 get을 붙인다', '이벤트 이름과 같다'], 0,
    'HTML5의 이벤트 종류는 70여 가지예요. keydown의 리스너는 onkeydown, mousedown의 리스너는 onmousedown이에요.',
    '7주차 · 이벤트 종류', { tag: '이벤트 개념' });

  mc(U, '이벤트와 발생 상황의 짝으로 알맞은 것은?',
    ['dblclick – 마우스 더블클릭 / resize – 윈도우 크기 변경', 'load – 키를 누를 때 / keyup – 이미지 로딩 완료', 'submit – reset 버튼 클릭 / reset – submit 버튼 클릭', 'change – 문서 로딩 완료 / click – 키를 놓을 때'], 0,
    'keydown(키를 누를 때), keyup(키를 놓을 때), load(이미지·문서 로딩 완료), change(라디오 등 선택 변경), submit/reset(해당 버튼 클릭)이에요.',
    '7주차 · 브라우저에 발생하는 다양한 이벤트', { tag: '이벤트 종류' });

  // ── 리스너 작성 ─────────────────────────────
  mc(U, '이벤트 리스너를 만드는 3가지 방법으로 알맞은 것은?',
    ['HTML 태그 내에 작성 / DOM 객체의 이벤트 리스너 프로퍼티에 작성 / addEventListener() 메소드 이용', 'CSS에 작성 / HTML에 작성 / 서버에 작성', 'onclick / onload / onsubmit', 'alert / confirm / prompt'], 0,
    '슬라이드에서는 이 3가지에, 익명 함수를 쓰는 방식을 더해 4~5가지로 비교해요.',
    '7주차 · 이벤트 리스너 만들기', { tag: '리스너 작성' });

  fb(U, '마우스를 올리면 orchid, 내리면 흰색으로 배경을 바꾸는 리스너를 HTML 태그에 작성하세요.',
    '<p ___="this.style.backgroundColor=\'orchid\'"\n   ___="this.style.backgroundColor=\'white\'">', ['onmouseover', 'onmouseout'], ['onmouseover', 'onmouseout', 'onmouseon', 'onmouseleave', 'onhover'],
    'HTML 태그의 이벤트 리스너 속성에 리스너 코드를 직접 써요. 여기서 this는 이벤트가 발생한 <p> 자신이에요.',
    '7주차 · 예제 9-1', { tag: 'HTML 태그 리스너' });

  mc(U, 'p.onmouseover = over; 와 p.onmouseover = over(); 의 차이는?',
    ['앞은 over 함수를 리스너로 등록하고, 뒤는 over를 바로 실행해 그 결과를 대입하는 잘못된 코드', '둘 다 같다', '앞이 잘못된 코드다', '뒤가 정상이고 앞은 오류다'], 0,
    '리스너 프로퍼티에는 함수 이름(함수 자체)을 대입해야 해요. 괄호를 붙이면 그 자리에서 호출돼요.',
    '7주차 · 이벤트 리스너 프로퍼티', { tag: '리스너 프로퍼티', x: { 3: '뒤의 over()는 호출 결과를 대입하므로 잘못된 코드예요.' }, code: 'p.onmouseover = over;    // ?\np.onmouseover = over();  // ?' });

  fb(U, 'DOM 객체의 리스너 프로퍼티에 함수를 등록하세요.',
    'let p = document.getElementById("p")\np.___ = over\np.___ = out', ['onmouseover', 'onmouseout'], ['onmouseover', 'onmouseout', 'mouseover', 'mouseout', 'onhover'],
    '프로퍼티 이름은 on이 붙은 onmouseover / onmouseout이에요.',
    '7주차 · 예제 9-2', { tag: '리스너 프로퍼티' });

  fb(U, 'addEventListener()로 리스너를 등록하세요.',
    'p.___("___", over)', ['addEventListener', 'mouseover'], ['addEventListener', 'mouseover', 'onmouseover', 'attachEvent', 'addListener'],
    'addEventListener("이벤트 이름", 리스너). 이벤트 이름에는 on을 붙이지 않아요 (mouseover ○, onmouseover ✕).',
    '7주차 · 예제 9-3', { tag: 'addEventListener' });

  mc(U, 'addEventListener("mouseover", over)에서 첫 번째 인수는?',
    ['"mouseover" (on이 붙지 않은 이벤트 이름)', '"onmouseover"', 'over()', 'this'], 0,
    '리스너 프로퍼티는 onmouseover, addEventListener의 이벤트 이름은 mouseover예요.',
    '7주차 · addEventListener', { tag: 'addEventListener' });

  mc(U, '익명 함수(anonymous function)란?',
    ['함수 이름 없이 필요한 곳에 함수 코드를 바로 작성한 것', '이름이 숨겨진 변수', '매개변수가 없는 함수', '리턴값이 없는 함수'], 0,
    '코드가 짧거나 한 곳에서만 사용할 때 편리해요. 예: p.onmouseover = function () { this.style.backgroundColor = "orchid" }',
    '7주차 · 익명 함수로 이벤트 리스너 작성', { tag: '익명 함수' });

  fb(U, '익명 함수로 mouseout 리스너를 등록하세요.',
    'p.addEventListener("mouseout",\n  ___ () { this.style.backgroundColor = "white" }\n)', ['function'], ['function', 'func', 'def', 'lambda', 'fn'],
    'function 뒤에 이름 없이 바로 ( ) { } 를 써요. 이 안에서 this는 이벤트를 받은 객체예요.',
    '7주차 · 예제 9-4', { tag: '익명 함수' });

  mc(U, '다음 중 이벤트 리스너를 등록한 올바른 코드가 아닌 것은?',
    ['p.onmouseover(function () { ... })', 'p.onmouseover = over', 'p.addEventListener("mouseover", over)', 'p.onmouseover = function () { ... }'], 0,
    '리스너 프로퍼티는 함수를 대입(=)해서 등록해요. 함수처럼 호출하는 형태는 등록이 아니에요.',
    '7주차 · 이벤트 리스너 작성 방법 비교', { tag: '리스너 작성' });

  // ── 이벤트 객체 ─────────────────────────────
  mc(U, '이벤트 객체(event object)란?',
    ['발생한 이벤트에 관련된 다양한 정보를 담은 객체', '이벤트 리스너 함수 자체', 'HTML 태그', '이벤트가 발생할 때까지 유지되는 전역 변수'], 0,
    'mousedown이면 마우스 좌표·버튼 번호·휠 값, keydown이면 키 값 등이 들어 있어요. 이벤트 처리가 끝나면 이벤트 객체는 소멸해요.',
    '7주차 · 이벤트 객체', { tag: '이벤트 객체' });

  mc(U, '이벤트 객체는 리스너 함수의 어디로 전달될까?',
    ['첫 번째 매개변수', '마지막 매개변수', 'this', '전역 변수 e'], 0,
    'function f(e) { } 처럼 첫 번째 매개변수 e로 전달받아요. 익명 함수도 function (e) { } 로 똑같이 받아요.',
    '7주차 · 이벤트 객체 전달받기', { tag: '이벤트 객체' });

  fb(U, 'HTML 태그의 리스너 속성에서 이벤트 객체를 f()로 넘기세요.',
    '<button onclick="f(___)">버튼</button>', ['event'], ['event', 'e', 'this', 'evt', 'window'],
    'HTML 태그에 작성한 리스너 코드에서는 이벤트 객체를 event라는 이름으로 쓸 수 있어요.',
    '7주차 · 예제 9-5', { tag: '이벤트 객체' });

  mc(U, '<div onclick="alert(event.type)">를 클릭하면 어떤 값이 출력될까?',
    ['click', 'onclick', 'div', 'mouse'], 0,
    'e.type은 이벤트의 종류예요. on이 붙지 않은 "click"이 출력돼요.',
    '7주차 · 이벤트 객체', { cat: 'predict', tag: '이벤트 객체', code: '<div onclick="alert(event.type)">버튼</div>', x: { 1: 'type은 on이 붙지 않은 이벤트 이름이에요.' } });

  mc(U, '이벤트 객체의 target 프로퍼티는?',
    ['이벤트를 유발시킨 DOM 객체(이벤트 타겟)를 가리킨다', '이벤트 종류를 문자열로 가진다', '이벤트 취소 여부를 가진다', '이벤트 발생 시각이다'], 0,
    '<button>을 클릭했다면 click 이벤트의 이벤트 타겟은 그 버튼이에요.',
    '7주차 · 이벤트 객체에 들어 있는 정보', { tag: '이벤트 객체' });

  mc(U, '이벤트 객체의 공통 프로퍼티와 의미가 알맞게 짝지어진 것은?',
    ['type – 이벤트 종류 / target – 이벤트 타겟 / currentTarget – 현재 리스너가 실행 중인 객체 / defaultPrevented – 디폴트 행동 취소 여부', 'type – 이벤트 대상 / target – 종류 / currentTarget – 취소 여부 / defaultPrevented – 시각', 'type – 좌표 / target – 키 값 / currentTarget – 버튼 번호 / defaultPrevented – 이름', 'type – 시각 / target – 취소 / currentTarget – 종류 / defaultPrevented – 타겟'], 0,
    '예제 9-6에서 type, target, currentTarget, defaultPrevented를 출력해 봤어요.',
    '7주차 · 예제 9-6', { tag: '이벤트 객체' });

  // ── 디폴트 행동 취소 ───────────────────────
  mc(U, '이벤트의 디폴트 행동으로 알맞지 않은 것은?',
    ['<button>의 click 이벤트 – 자동으로 alert 출력', '<a>의 click 이벤트 – 웹 페이지 이동', 'submit 버튼의 click 이벤트 – 폼 데이터 전송', '<input type="checkbox">의 click 이벤트 – 체크박스 선택'], 0,
    '디폴트 행동은 특정 이벤트에 대한 HTML 태그의 기본 행동이에요.',
    '7주차 · 이벤트의 디폴트 행동', { tag: '디폴트 행동' });

  mc(U, '이벤트의 디폴트 행동을 취소하는 방법 두 가지는?',
    ['이벤트 리스너에서 false 리턴 / 이벤트 객체의 preventDefault() 호출', 'return true / stopDefault()', 'cancel() / break', 'event.stop() / exit()'], 0,
    '이벤트 객체의 cancelable 프로퍼티가 true인 경우만 취소할 수 있어요.',
    '7주차 · 이벤트의 디폴트 행동 취소', { tag: '디폴트 행동' });

  mc(U, '<a href="http://www.naver.com" onclick="return false">링크</a>를 클릭하면?',
    ['페이지 이동이 일어나지 않는다', '네이버로 이동한다', '새 창이 열린다', '오류가 난다'], 0,
    'onclick 리스너가 false를 리턴하면 디폴트 행동(페이지 이동)이 취소돼요. event.preventDefault()도 같은 효과예요.',
    '7주차 · 이벤트의 디폴트 행동 취소', { cat: 'predict', tag: '디폴트 행동', code: '<a href="http://www.naver.com" onclick="return false">\n  이동 안되는 링크\n</a>' });

  fb(U, '체크박스가 클릭돼도 체크되지 않도록 하세요.',
    'function noAction(e) {\n  e.___()\n}', ['preventDefault'], ['preventDefault', 'stopDefault', 'cancel', 'stopPropagation', 'return'],
    'preventDefault()는 이벤트의 디폴트 행동을 강제로 취소해요. 예제 9-7의 "술" 체크박스는 체크되지 않아요.',
    '7주차 · 예제 9-7', { tag: '디폴트 행동' });

  mc(U, '<a onclick="return query()">에서 query()가 confirm() 결과를 return하면 "취소"를 눌렀을 때는?',
    ['false가 리턴되어 링크 이동이 취소된다', 'true가 리턴되어 이동한다', '오류가 난다', '창이 닫힌다'], 0,
    'confirm()은 확인이면 true, 취소이면 false를 리턴해요. 그 값을 그대로 return하면 false일 때 이동이 취소돼요.',
    '7주차 · 예제 9-7', { tag: '디폴트 행동' });

  // ── onload / Image ─────────────────────────
  mc(U, 'onload 리스너가 호출되는 시점은?',
    ['웹 페이지(문서) 또는 이미지의 로딩이 완료되었을 때', '페이지를 닫을 때', '키를 누를 때', '이미지를 클릭할 때'], 0,
    '<body onload="init()">은 문서 전체가 로딩된 뒤 init()을 실행해요. 그래서 init() 안에서 getElementById로 태그를 안전하게 찾을 수 있어요.',
    '7주차 · onload', { tag: 'onload' });

  fb(U, '문서 로딩이 완료되면 실행되도록 window에 리스너를 등록하세요.',
    'window.___ = function () {\n  tds = document.getElementsByTagName("td")\n}', ['onload'], ['onload', 'onready', 'onstart', 'oninit', 'onopen'],
    '예제 9-21처럼 window.onload에 익명 함수를 대입하면 문서 로딩 완료 시 실행돼요.',
    '7주차 · 예제 9-21', { tag: 'onload' });

  mc(U, '예제 9-14에서 img.onload 리스너로 이미지의 width, height를 출력하는 이유는?',
    ['새 이미지 로딩이 완료된 시점에 크기를 알 수 있기 때문', '이미지 크기는 CSS로만 알 수 있기 때문', 'onload가 클릭 이벤트이기 때문', '이미지를 삭제하기 위해'], 0,
    'img.src를 바꾸면 로딩이 시작되고, 로딩이 끝나면 img.onload가 호출돼요. 그때 img.width, img.height를 읽어요.',
    '7주차 · 예제 9-14', { tag: 'onload' });

  or(U, 'new Image()로 이미지를 미리 로딩해 출력하는 순서대로 누르세요.',
    null,
    ['let img = new Image()', 'img.src = "banana.png"', 'myImg.src = img.src'], [],
    '이미지 객체를 만들고(화면에는 안 나옴) → src를 지정해 로딩 → <img> 태그의 src에 대입해 출력해요.',
    '7주차 · new Image()', { cat: 'quiz', tag: 'new Image()' });

  mc(U, 'new Image()로 만든 이미지 객체는?',
    ['생성만으로는 화면에 출력되지 않는다', '만들자마자 화면에 출력된다', 'body에 자동으로 추가된다', '오류가 난다'], 0,
    '이미지를 미리 로딩해 두고, 필요할 때 <img> 태그의 src에 대입해 출력하는 데 써요.',
    '7주차 · new Image()', { tag: 'new Image()' });

  mc(U, 'files 배열의 이미지 8장을 new Image()로 미리 로딩하는 이유는?',
    ['클릭해서 이미지를 바꿀 때 바로 보이도록 미리 로딩해 두기 위해', '이미지 크기를 줄이기 위해', '이미지를 삭제하기 위해', '서버에 업로드하기 위해'], 0,
    '예제 9-15: imgs[i] = new Image(); imgs[i].src = files[i]; 로 로딩해 두고, 클릭 시 img.src = imgs[next].src로 바꿔요.',
    '7주차 · 예제 9-15', { tag: 'new Image()' });

  mc(U, 'next가 0~7을 돌도록 다음 인덱스를 처리하는 코드로 알맞은 것은? (imgs.length = 8)',
    ['next++; next %= imgs.length', 'next--; next %= imgs.length', 'next = imgs.length', 'next += imgs.length'], 0,
    '1 증가 후 길이로 나눈 나머지를 취하면 마지막 다음에 0으로 돌아와요.',
    '7주차 · 예제 9-15', { cat: 'predict', tag: 'new Image()', code: 'let next = 7\nnext++\nnext %= 8\nconsole.log(next)' });

  // ── 라디오 / 체크박스 / select ──────────────
  fb(U, 'name이 "city"인 라디오 버튼들을 모두 가져오세요.',
    'let kcity = document.___("city")', ['getElementsByName'], ['getElementsByName', 'getElementById', 'getElementsByTagName', 'getElementByName', 'querySelectorAll'],
    '라디오 버튼은 같은 name을 가지므로 getElementsByName으로 컬렉션을 얻고 kcity[0], kcity[1]...로 접근해요.',
    '7주차 · 라디오버튼', { tag: '라디오버튼' });

  fb(U, '선택된 라디오 버튼을 찾으세요.',
    'for (let i = 0; i < kcity.length; i++) {\n  if (kcity[i].___ == true)\n    found = kcity[i]\n}', ['checked'], ['checked', 'selected', 'value', 'active', 'on'],
    '체크된 상태이면 checked 프로퍼티가 true예요. 그 객체의 value로 선택한 값을 알 수 있어요.',
    '7주차 · 예제 9-17', { tag: '라디오버튼' });

  mc(U, '체크박스를 체크했을 때 합계가 늘어나고 해제하면 줄어들게 하는 코드는?',
    ['if (cBox.checked) sum += parseInt(cBox.value); else sum -= parseInt(cBox.value)', 'sum += cBox.value 만 실행', 'sum = cBox.checked', 'if (cBox.value) sum++'], 0,
    '체크박스의 value는 문자열이라 parseInt로 정수로 바꿔서 더해요. onclick="calc(this)"처럼 this로 클릭된 체크박스를 넘겨요.',
    '7주차 · 예제 9-18', { tag: '체크박스' });

  mc(U, 'select 객체의 설명으로 알맞은 것은?',
    ['<select> 태그로 만든 콤보박스이고, 옵션 아이템은 <option> 태그의 option 객체다', '<option>이 콤보박스를 만든다', '<input type="select">로 만든다', '옵션은 선택할 수 없다'], 0,
    'sel.options[인덱스]로 option 객체에 접근하고, option의 value 속성으로 값을 얻어요.',
    '7주차 · select 객체', { tag: 'select' });

  fb(U, '선택된 옵션의 인덱스를 알아내세요.',
    'let sel = document.getElementById("fruits")\nlet index = sel.___', ['selectedIndex'], ['selectedIndex', 'selected', 'index', 'selectedOption', 'checked'],
    'select 객체의 selectedIndex는 선택된 옵션의 인덱스예요. 대입하면 그 옵션이 선택돼요(sel.selectedIndex = 2).',
    '7주차 · select 객체', { tag: 'select' });

  mc(U, '<select id="fruits">에서 "바나나"(두 번째 옵션)가 selected일 때 sel.selectedIndex는?',
    ['1', '2', '0', '"바나나"'], 0,
    '옵션 인덱스는 0부터 시작해요. 딸기 0, 바나나 1, 사과 2예요. sel.selectedIndex = 2를 대입하면 "사과"가 선택돼요.',
    '7주차 · select 객체', { cat: 'predict', tag: 'select', code: '<select id="fruits">\n  <option value="1">딸기</option>\n  <option value="2" selected>바나나</option>\n  <option value="3">사과</option>\n</select>' });

  fb(U, '선택된 옵션의 value로 이미지를 바꾸세요.',
    'img.src = sel.options[sel.___].value', ['selectedIndex'], ['selectedIndex', 'selected', 'index', 'value', 'checked'],
    '선택된 옵션 인덱스로 options[]에 접근해서 value를 얻어요.',
    '7주차 · 예제 9-19', { tag: 'select' });

  mc(U, '<select onchange="drawImage()">에서 onchange는 언제 호출되는가?',
    ['선택된 옵션이 변경될 때', '문서가 로딩될 때', '옵션을 클릭하기만 해도 항상', '폼이 전송될 때'], 0,
    'select 객체의 onchange 리스너는 선택된 옵션이 바뀌면 호출돼요.',
    '7주차 · select와 onchange', { tag: 'onchange' });

  // ── 키 이벤트 ──────────────────────────────
  mc(U, 'onkeydown, onkeypress, onkeyup의 설명으로 알맞은 것은?',
    ['keydown은 모든 키가 눌러질 때, keypress는 문자 키·Enter·Space·Esc일 때, keyup은 키를 뗄 때', 'keydown은 키를 뗄 때, keyup은 누를 때', 'keypress는 모든 키에 대해 호출', 'keyup은 문자 키만 호출'], 0,
    'F1, Shift, PgDn, Del, Ins 같은 문자 키가 아닌 키는 keypress가 호출되지 않아요.',
    '7주차 · 키 이벤트', { tag: '키 이벤트' });

  mc(U, 'Shift 키를 눌렀을 때 호출되는 리스너는?',
    ['onkeydown과 onkeyup (onkeypress는 호출되지 않음)', 'onkeypress만', '세 가지 모두', '아무것도 호출되지 않음'], 0,
    'Shift는 문자 키가 아니므로 keypress는 호출되지 않아요.',
    '7주차 · 키 이벤트', { tag: '키 이벤트' });

  mc(U, '키 이벤트 객체에서 눌러진 키의 이름은 e.key, 물리적 키 코드는 어떤 프로퍼티로 알까?',
    ['e.code', 'e.type', 'e.target', 'e.value'], 0,
    '예제 9-20은 e.key와 e.code를 출력해요. 방향키는 e.key가 "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"예요.',
    '7주차 · 예제 9-20', { tag: '키 이벤트' });

  fb(U, '아래 방향키를 눌렀을 때 셀을 한 줄(3칸) 아래로 이동하세요.',
    'window.onkeydown = function (e) {\n  switch (e.___) {\n    case "___":\n      index += 3\n      break\n  }\n}', ['key', 'ArrowDown'], ['key', 'ArrowDown', 'ArrowUp', 'code', 'Down'],
    'e.key가 "ArrowDown"이면 3×3 표에서 인덱스를 3 늘려요. 위는 -3, 왼쪽은 --, 오른쪽은 ++ 예요.',
    '7주차 · 예제 9-21', { tag: '키 이벤트' });

  mc(U, '3×3 표(셀 인덱스 0~8)에서 index가 4일 때 ArrowRight를 누르면? (오른쪽 끝이면 이동하지 않음: index%3 == 2)',
    ['index가 5가 된다', 'index가 4로 유지된다', 'index가 7이 된다', 'index가 3이 된다'], 0,
    '4%3은 1이라 오른쪽 끝이 아니므로 index++가 실행돼요. 반대로 index가 5이면 5%3 == 2라 이동하지 않아요.',
    '7주차 · 예제 9-21', { cat: 'predict', tag: '키 이벤트', code: 'let index = 4\nif (index % 3 == 2) {\n  // 이동 안 함\n} else {\n  index++\n}\nconsole.log(index)' });

  // ── onreset / onsubmit ─────────────────────
  mc(U, 'onreset과 onsubmit 리스너를 어디에 달아야 할까?',
    ['<form> 태그', '<input type="submit"> 태그', '<body> 태그', '<script> 태그'], 0,
    '<form onreset="..." onsubmit="..."> 형태로 폼 태그에 작성해요.',
    '7주차 · onreset과 onsubmit', { tag: 'onsubmit' });

  mc(U, '<form onsubmit="return false">에서 submit 버튼을 누르면?',
    ['폼이 전송되지 않는다', '폼이 전송된다', '폼이 초기화된다', '오류가 난다'], 0,
    'onsubmit 리스너가 false를 리턴하면 폼을 전송하지 않아요. onreset도 false를 리턴하면 폼이 초기화되지 않아요.',
    '7주차 · onreset과 onsubmit', { cat: 'predict', tag: 'onsubmit', code: '<form onsubmit="return false">\n  <input type="submit">\n</form>', x: { 2: 'reset이 아니라 submit이에요.' } });

  mc(U, '<form onreset="return false">에서 reset 버튼을 누르면?',
    ['폼이 초기화되지 않는다', '폼이 초기화된다', '폼이 전송된다', '페이지가 닫힌다'], 0,
    'onreset이 false를 리턴하면 reset의 디폴트 행동(초기화)이 취소돼요.',
    '7주차 · onreset과 onsubmit', { cat: 'predict', tag: 'onreset', code: '<form onreset="return false">\n  <input type="reset">\n</form>' });
})();
