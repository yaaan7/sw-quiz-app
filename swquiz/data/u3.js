/* 단원 3 — 자바스크립트 기초 (Lec 4) */
(function () {
  var U = 'u3';

  // ── 개요 ────────────────────────────────────
  mc(U, '자바스크립트에 대한 설명으로 맞는 것은?',
    ['컴파일 없이 인터프리터로 바로 실행되는 스크립트 언어다', '실행 전에 반드시 컴파일해야 한다', '서버에서만 실행된다', '변수 타입을 반드시 선언해야 한다'], 0,
    '1995년 넷스케이프가 개발해 Netscape Navigator 2.0에 최초 탑재됐어요. HTML 문서에 내장하는 조각 소스 코드이고 C언어 구조를 차용해 배우기 쉬워요.',
    '3주차 · 자바스크립트 언어', { tag: '개요' });

  mc(U, '웹 페이지에서 "마우스와 키보드 입력"을 처리할 수 있는 것은?',
    ['오직 자바스크립트', 'HTML', 'CSS', 'HTTP'], 0,
    '마우스·키보드 입력은 오직 자바스크립트로만 가능해요. 그 밖에 계산, HTML 콘텐츠/CSS 동적 변경, 브라우저 제어, 서버 통신 등을 해요.',
    '3주차 · 자바스크립트의 역할', { tag: '역할' });

  mc(U, '자바스크립트 코드를 작성할 수 있는 위치가 아닌 것은?',
    ['CSS 파일(.css)', 'HTML 태그의 이벤트 리스너 속성', '<script></script> 태그', '링크의 href에 javascript: 형태'], 0,
    '위치는 4가지: 이벤트 리스너 속성, <script> 태그, 별도 .js 파일, URL 부분(href="javascript:alert(...)").',
    '3주차 · 자바스크립트 코드의 위치', { tag: '코드 위치' });

  fb(U, '외부 자바스크립트 파일 lib.js를 불러오는 코드를 완성하세요.',
    '<script ___="lib.js"></script>', ['src'], ['src', 'href', 'link', 'import'],
    'src 속성으로 불러와요. HTML5부터는 src를 쓴 <script> 안에 코드를 추가로 쓰면 안 돼요.',
    '3주차 · 별도 파일 작성', { tag: '<script>' });

  mc(U, '이벤트 리스너 속성 안의 this는 무엇을 가리킬까?',
    ['이벤트가 발생한 현재 태그(img)', 'window 객체', 'document 객체', '자바스크립트 파일'], 0,
    '현재 img 태그를 가리키는 자바스크립트 키워드예요. onmouseover="this.src=\'media/banana.png\'"처럼 자기 자신을 바꿀 수 있어요.',
    '3주차 · 예제 6-1', { tag: 'this', code: '<img src="media/apple.png"\n     onmouseover="this.src=\'media/banana.png\'"\n     onmouseout="this.src=\'media/apple.png\'">' });

  mc(U, 'document.writeln()을 쓰면 출력 뒤에 줄바꿈(다음 줄로 이동)이 될까?',
    ['안 된다. HTML에서는 빈 칸 하나 정도 띄는 효과뿐이다', '된다', '<br>이 자동 삽입된다', '오류가 난다'], 0,
    'writeln()은 텍스트 뒤에 \\n을 덧붙이지만 HTML에서 \\n은 빈 칸 하나 효과예요. 다음 줄로 넘어가려면 <br>을 써야 해요.',
    '3주차 · document.write()', { tag: 'document.write' });

  // ── 다이얼로그 ──────────────────────────────
  mc(U, 'prompt() 다이얼로그에서 사용자가 "취소"를 누르면 반환값은?',
    ['null', '""(빈 문자열)', 'false', 'undefined'], 0,
    '취소 버튼이나 창 닫기는 null, 입력 없이 확인을 누르면 빈 문자열 "", 입력했다면 그 문자열이에요.',
    '3주차 · 프롬프트 다이얼로그', { tag: 'prompt', x: { 1: '빈 문자열은 "입력 없이 확인"을 눌렀을 때예요.' } });

  mc(U, 'prompt()로 받은 "30"에 5를 더하는 코드의 결과는?',
    ['"305"', '35', 'NaN', '오류'], 0,
    'prompt()가 리턴하는 것은 문자열이라서 "30" + 5는 문자열 연결이에요. 숫자로 바꾸려면 parseInt()를 써요.',
    '3주차 · 예제 6-15 / 6-18', { cat: 'predict', tag: 'prompt', code: 'let n = "30";   // prompt()가 돌려준 값\nconsole.log(n + 5);', run: 'let n = "30"; console.log(n + 5);' });

  mc(U, 'confirm()에서 "확인"을 누르면 true, "취소"나 창 닫기는?',
    ['false', 'null', '0', 'undefined'], 0,
    'confirm은 true/false를 리턴해요. (null은 prompt의 취소!)',
    '3주차 · 확인 다이얼로그', { tag: 'confirm' });

  // ── 식별자·변수 ─────────────────────────────
  mc(U, '올바른 식별자(변수 이름)는?',
    ['student_ID', '6variable', 'if', '%calc'], 0,
    '첫 글자는 알파벳·_·$만 가능(숫자 시작 불가), 예약어(if, for, null...)와 %는 쓸 수 없어요. 대소문자는 구분돼요(bar와 Bar는 다름).',
    '3주차 · 식별자', { tag: '식별자', x: { 1: '숫자로 시작할 수 없어요.', 2: 'if는 예약어예요.', 3: '%는 사용할 수 없는 문자예요.' } });

  mc(U, '자바스크립트의 데이터 타입이 아닌 것은?',
    ['문자(char) 타입', '숫자 타입', '논리 타입', '문자열 타입'], 0,
    '자바스크립트에는 문자 타입이 없고 문자도 문자열로 표현해요. 그 외 객체 레퍼런스 타입, null이 있어요.',
    '3주차 · 데이터 타입', { tag: '타입' });

  mc(U, 'const로 선언한 변수에 값을 다시 대입하면?',
    ['오류가 발생한다', '값이 바뀐다', '무시된다', '경고만 출력된다'], 0,
    'const는 상수 선언이라 값 수정과 재선언이 불가능해요. 블록 범위에서만 사용돼요.',
    '3주차 · 상수', { cat: 'predict', tag: 'const', code: 'const MAX = 10;\nMAX = 20;', run: 'const MAX = 10; MAX = 20;' });

  mc(U, 'let으로 같은 이름의 변수를 두 번 선언하면?',
    ['오류가 발생한다', '두 번째가 덮어쓴다', '무시된다', '변수가 두 개 만들어진다'], 0,
    'var는 재선언이 가능해서 실수가 생기기 쉬웠어요. let은 재선언 불가라 ES6(2015)에서 이를 막으려 도입됐어요.',
    '3주차 · let의 특징', { cat: 'predict', tag: 'let/var', code: 'let x = 1;\nlet x = 2;', run: 'eval("let x = 1; let x = 2;")', x: { 1: 'var였다면 덮어써요. let은 재선언 자체가 오류!' } });

  mc(U, '아래 코드의 마지막 줄을 실행하면?',
    ['오류 (b는 블록 밖에서 사용할 수 없음)', '41', '40', 'undefined'], 0,
    'let은 블록 변수라서 선언된 if 블록 안에서만 쓸 수 있어요. 블록이 끝나면 소멸해요.',
    '3주차 · 변수의 사용 범위', { cat: 'predict', tag: '스코프', code: 'if (true) {\n  let b = 40;\n  b++;\n}\nconsole.log(b);', run: 'if (true) { let b = 40; b++; } console.log(b);' });

  mc(U, '함수 안에서 var/let 없이 "z = 30;"을 실행하고 함수 밖에서 z를 출력하면?',
    ['30', '오류', 'undefined', 'null'], 0,
    'var/let 없이 선언하면 새로운 전역 변수가 만들어져요. (권장하지 않는 방식이에요.)',
    '3주차 · 예제 6-6', { cat: 'predict', tag: '전역 변수', code: 'function f() {\n  z = 30;\n}\nf();\nconsole.log(z);', run: 'function f(){ z = 30; } f(); console.log(z);' });

  mc(U, '함수 안에 let으로 선언한 지역 변수의 사용 범위와 생명은?',
    ['선언된 함수 안에서만 사용, 함수 실행 시 생성되고 종료 시 소멸', '프로그램 전역, 프로그램 종료 시 소멸', '선언된 블록 안, 블록 시작 시 생성', '파일 전체, 브라우저 종료 시 소멸'], 0,
    '전역 변수는 프로그램 전체, 지역 변수는 함수 안, 블록 변수는 if/for/while 블록 안에서 사용해요.',
    '3주차 · 변수의 사용 범위와 생명', { tag: '스코프' });

  mc(U, '지역 변수와 이름이 같은 전역 변수(var로 선언)에 접근하는 방법은?',
    ['this.변수이름', 'global.변수이름', 'window.this', '불가능하다'], 0,
    '예: this.x = 100; (단, let으로 선언된 전역 변수는 this로 접근할 수 없어요.)',
    '3주차 · this로 전역변수 접근', { tag: 'this' });

  mc(U, '8진수 리터럴 015는 10진수로 얼마일까?',
    ['13', '15', '17', '21'], 0,
    '8진수 015 = 1×8 + 5 = 13이에요. 16진수 0x15는 1×16 + 5 = 21.',
    '3주차 · 예제 6-7 리터럴', { cat: 'predict', tag: '리터럴', run: 'console.log(015)', code: 'let oct = 015;\nconsole.log(oct);' });

  mc(U, '16진수 리터럴 0x15는 10진수로 얼마일까?',
    ['21', '15', '13', '25'], 0,
    '0x15 = 1×16 + 5 = 21이에요.',
    '3주차 · 예제 6-7 리터럴', { cat: 'predict', tag: '리터럴', run: 'console.log(0x15)', code: 'let hex = 0x15;\nconsole.log(hex);' });

  // ── 연산자 ──────────────────────────────────
  mc(U, 'total의 값은?',
    ['113', '116', '100', '134'], 0,
    '곱셈·나눗셈이 먼저예요. 32*2/4 = 16 → 100 + 16 - 3 = 113.',
    '3주차 · 산술 연산', { cat: 'predict', tag: '산술', code: 'let x = 32;\nlet total = 100 + x*2/4 - 3;\nconsole.log(total);', run: 'let x = 32; let total = 100 + x*2/4 - 3; console.log(total);' });

  mc(U, '실행 후 a와 b의 값은?',
    ['a = 2, b = 1', 'a = 2, b = 2', 'a = 1, b = 1', 'a = 1, b = 2'], 0,
    '후위 증가(a++)는 "증가 전의 값"을 반환해요. b에는 1이 들어가고 a는 그다음 2가 돼요. 전위(++a)였다면 b도 2.',
    '3주차 · 증감 연산자', { cat: 'predict', tag: '증감 연산자', code: 'let a = 1;\nlet b = a++;\nconsole.log(a, b);', x: { 1: '그건 전위 증가(++a)일 때예요.' } });

  mc(U, 'z의 최종 값은?',
    ['1', '0', '3', '6'], 0,
    'z %= 2 는 z = z % 2 예요. 3 % 2 = 1. (x += 3 → 6, y *= 3 → 9)',
    '3주차 · 예제 6-9 대입 연산', { cat: 'predict', tag: '대입 연산', code: 'let z = 3;\nz %= 2;\nconsole.log(z);', run: 'let z = 3; z %= 2; console.log(z);' });

  mc(U, '결과는?',
    ['false', 'true', 'null', '오류'], 0,
    '문자열은 사전순으로 비교해요. "kitae"는 "park"보다 사전순으로 앞이라 name > "park"는 false예요.',
    '3주차 · 문자열 연산자', { cat: 'predict', tag: '문자열 비교', code: 'let name = "kitae";\nconsole.log(name > "park");', run: 'let name = "kitae"; console.log(name > "park");' });

  mc(U, '결과는?',
    ['true', 'false', 'null', '-1'], 0,
    '||는 하나라도 참이면 참이에요. (3==2)는 false지만 (-1<0)이 true라서 전체가 true.',
    '3주차 · 논리 연산', { cat: 'predict', tag: '논리 연산', code: 'console.log((3 == 2) || (-1 < 0));', run: 'console.log((3 == 2) || (-1 < 0));' });

  fb(U, '두 수 중 큰 값을 big에 넣는 조건 연산자를 완성하세요.',
    'let x = 5, y = 3;\nlet big = (x > y) ___ x ___ y;', ['?', ':'], ['?', ':', '&&', '||', '=>'],
    '조건 ? 참일 때 값 : 거짓일 때 값. x > y가 참이라 big은 5예요.',
    '3주차 · 조건 연산자', { tag: '조건 연산자', exec: 'let x = 5, y = 3; let big = (x > y) ? x : y; console.log(big)' });

  mc(U, '23 + 35 + "abc"의 결과는?',
    ['"58abc"', '"2335abc"', '"23abc35"', '오류'], 0,
    '왼쪽부터 계산해요. 23 + 35 = 58(숫자 더하기) 후 58 + "abc"는 문자열 연결이라 "58abc".',
    '3주차 · 문자열 연산자', { cat: 'predict', tag: '문자열 연산', code: 'console.log(23 + 35 + "abc");', run: 'console.log(23 + 35 + "abc")', x: { 1: '문자열이 나오기 전의 23 + 35는 숫자 계산이에요.' } });

  mc(U, '"abc" + 23 + 35의 결과는?',
    ['"abc2335"', '"abc58"', '"58abc"', '오류'], 0,
    '왼쪽부터: "abc" + 23 → "abc23", 그다음 "abc23" + 35 → "abc2335". 앞에 문자열이 있으면 이후는 전부 이어붙여져요.',
    '3주차 · 문자열 연산자', { cat: 'predict', tag: '문자열 연산', code: 'console.log("abc" + 23 + 35);', run: 'console.log("abc" + 23 + 35)' });

  mc(U, 'x = 10일 때 x << 1 의 값은?',
    ['20', '5', '10', '11'], 0,
    '왼쪽 시프트는 곱하기 2 효과, 오른쪽 시프트(x >> 1)는 나누기 2 효과(5)예요.',
    '3주차 · 비트 시프트 연산', { cat: 'predict', tag: '비트 연산', run: 'let x = 10; console.log(x << 1)', code: 'let x = 10;\nconsole.log(x << 1);' });

  // ── 조건문·반복문 ───────────────────────────
  fb(U, 'switch 문을 완성하세요. (매칭되면 실행하고 빠져나오기, 어느 값도 아닐 때 처리)',
    'switch (fruits) {\n  case "바나나": price = 200; ___;\n  case "사과":   price = 300; break;\n  ___: price = 0;\n}',
    ['break', 'default'], ['break', 'default', 'continue', 'else', 'return'],
    'break는 switch 종료, default는 어느 case와도 같지 않을 때 실행돼요.',
    '3주차 · switch 문', { tag: 'switch' });

  or(U, 'city가 "Seoul"일 때 console.log가 출력하는 순서대로 눌러보세요.',
    'let city = "Seoul";\nswitch (city) {\n  case "Seoul":\n    console.log("서울");\n  case "NewYork":\n    console.log("뉴욕");\n    break;\n  case "Paris":\n    console.log("파리");\n}',
    ['서울', '뉴욕'], ['파리'],
    'break를 만날 때까지 아래로 계속 실행돼요(fall-through). 서울 → 뉴욕에서 break로 끝나서 파리는 실행되지 않아요.',
    '3주차 · switch 문의 break 역할', { tag: 'switch', run: 'let city = "Seoul"; switch (city) { case "Seoul": console.log("서울"); case "NewYork": console.log("뉴욕"); break; case "Paris": console.log("파리"); }' });

  mc(U, 'switch 문의 case 값으로 사용할 수 없는 것은?',
    ['변수 a (let a = 3)', '리터럴 "Seoul"', 'const로 선언한 상수 MAX', '식 2+3 (5로 먼저 계산됨)'], 0,
    'case 값은 const 상수나 리터럴만 가능해요. 변수나 비교식(a > 3)은 쓸 수 없어요.',
    '3주차 · case 문의 값', { tag: 'switch' });

  mc(U, '다음 for 문은 몇 번 반복할까?',
    ['6번', '5번', '7번', '26번'], 0,
    'size = 10, 15, 20, 25, 30, 35 → 6번이에요. (35 <= 35까지 포함)',
    '3주차 · 예제 6-17 for 문', { cat: 'predict', tag: 'for', code: 'for (let size = 10; size <= 35; size += 5) {\n  // ...\n}', run: 'let c = 0; for (let size = 10; size <= 35; size += 5) c++; console.log(c + "번")' });

  mc(U, 'sum의 최종 값은?',
    ['22', '55', '12', '27'], 0,
    'i % 3 != 1이면 continue로 건너뛰어요. 더해지는 값은 나머지가 1인 1, 4, 7, 10 → 합 22.',
    '3주차 · 예제 6-21 continue 문', { cat: 'predict', tag: 'continue', code: 'let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  if (i % 3 != 1) continue;\n  sum += i;\n}\nconsole.log(sum);', run: 'let sum = 0; for (let i = 1; i <= 10; i++) { if (i % 3 != 1) continue; sum += i; } console.log(sum);' });

  mc(U, '중첩된 반복문에서 안쪽 반복문의 break는 어디까지 벗어날까?',
    ['가장 안쪽 반복문 하나만 벗어난다', '모든 반복문을 벗어난다', '바깥 반복문만 벗어난다', '프로그램이 종료된다'], 0,
    'break는 가장 안쪽 반복문 하나만 빠져나가요. continue는 이번 반복을 중단하고 다음 반복으로 점프합니다.',
    '3주차 · break와 continue', { tag: 'break' });

  mc(U, '다음 코드를 실행하면 출력은?',
    ['5', '아무것도 출력되지 않는다', '5, 6', '오류'], 0,
    'do-while은 조건 검사 전에 본문을 먼저 실행하므로 조건이 처음부터 거짓이어도 최소 한 번 실행돼요.',
    '3주차 · do-while 문', { cat: 'predict', tag: 'do-while', code: 'let i = 5;\ndo {\n  console.log(i);\n  i++;\n} while (i < 5);', run: 'let i = 5; do { console.log(i); i++; } while (i < 5);' });
})();
