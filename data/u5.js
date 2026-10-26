/* 단원 5 — 객체 (Ch 6: 6-1 객체의 기본 / 6-2 속성과 메소드 / 6-3 객체와 배열 고급) — 슬라이드 범위만 */
(function () {
  var U = 'u5';

  // ── 6-1 객체의 기본 ─────────────────────────
  mc(U, '배열과 객체가 요소에 접근하는 방식의 차이는?',
    ['배열은 인덱스, 객체는 키(key)를 사용한다', '둘 다 인덱스를 사용한다', '배열은 키, 객체는 인덱스를 사용한다', '둘 다 키를 사용한다'], 0,
    '객체는 중괄호 {...}로 만들고 "키: 값" 형태의 자료를 쉼표(,)로 연결해요.',
    '7주차 · 객체의 기본', { tag: '객체 기본' });

  mc(U, '객체를 만드는 올바른 형태는?',
    ['const product = { 제품명: "7D 건조 망고", 원산지: "필리핀" }', 'const product = [ 제품명: "7D 건조 망고", 원산지: "필리핀" ]', 'const product = ( 제품명 = "7D 건조 망고" )', 'const product = < 제품명: "7D 건조 망고" >'], 0,
    '키와 값은 콜론(:)으로, 각 속성은 쉼표(,)로 구분해요.',
    '7주차 · 객체의 기본', { tag: '객체 기본' });

  mc(U, 'product.원산지와 같은 결과를 내는 접근 방법은?',
    ['product["원산지"]', 'product->원산지', 'product(원산지)', 'product[원산지]  (따옴표 없이)'], 0,
    '대괄호 안에는 문자열 키를 넣어요. 따옴표 없이 쓰면 "원산지"라는 이름의 변수를 찾아요.',
    '7주차 · 객체 요소 접근', { tag: '접근', x: { 3: '따옴표가 없으면 문자열이 아니라 변수 이름으로 해석돼요.' } });

  mc(U, '식별자로 쓸 수 없는 문자열(예: "my-key")을 키로 쓴 속성에 접근하는 방법은?',
    ['반드시 대괄호 [ ]를 사용한다', '반드시 점(.)을 사용한다', '둘 다 가능하다', '접근할 수 없다'], 0,
    '식별자가 아닌 문자열을 키로 쓰면 무조건 대괄호로만 접근할 수 있어요.',
    '7주차 · 객체 요소 접근', { tag: '접근' });

  mc(U, '객체의 메소드란?',
    ['객체의 속성 중 함수 자료형인 속성', '객체를 복사하는 함수', '전역 함수', '배열 전용 함수'], 0,
    '속성은 모든 형태의 자료를 값으로 가질 수 있고, 그중 값이 함수이면 메소드라고 불러요.',
    '7주차 · 속성과 메소드', { tag: '메소드' });

  mc(U, 'pet.eat("밥")을 호출했을 때 this.name이 가리키는 것은?',
    ['pet 객체의 name 속성 (구름)', '전역 name 변수', 'undefined', 'eat 함수의 이름'], 0,
    '메소드 안의 this는 자기 자신이 가진 속성이라는 것을 표시해요.',
    '7주차 · 소스 6-1-1', { cat: 'predict', tag: 'this', code: 'const pet = {\n  name: "구름",\n  eat: function (food) {\n    console.log(this.name + "은/는 " + food + "을/를 먹습니다.")\n  }\n}\npet.eat("밥")' });

  or(U, 'pet.eat("밥")의 출력(한 줄)을 만들려면 어떤 순서로 이어질까? 순서대로 누르세요.',
    'const pet = {\n  name: "구름",\n  eat(food) {\n    console.log(this.name + "은/는 " + food + "을/를 먹습니다.")\n  }\n}\npet.eat("밥")',
    ['구름', '은/는', '밥', '을/를 먹습니다.'], ['pet', 'food'],
    'this.name → "은/는" → food → "을/를 먹습니다." 순으로 문자열이 이어져요. (메소드 간단 선언 구문: eat (food) { })',
    '7주차 · 소스 6-1-4', { tag: '메소드' });

  fb(U, '객체에 속성을 동적으로 추가하세요.',
    'const student = {}\nstudent.이름 = "윤인성"\nstudent.___ = "악기"\nconsole.log(JSON.stringify(student))', ['취미'], ['취미', 'student', '이름', 'add', '"취미"'],
    '이미 만든 객체에도 객체.속성 = 값 으로 속성을 추가할 수 있어요.',
    '7주차 · 소스 6-1-2', { tag: '속성 추가', exec: 'const student={}; student.이름="윤인성"; student.취미="악기"; console.log(JSON.stringify(student))' });

  fb(U, '객체의 속성을 제거하는 키워드를 채우세요.',
    'const student = { 이름: "윤인성", 장래희망: "생명공학자" }\n___ student.장래희망\nconsole.log(JSON.stringify(student))', ['delete'], ['delete', 'remove', 'del', 'pop', 'splice'],
    '삭제는 delete 객체.속성 형태로 해요.',
    '7주차 · 소스 6-1-3', { tag: 'delete', exec: 'const student = { 이름: "윤인성", 장래희망: "생명공학자" }; delete student.장래희망; console.log(JSON.stringify(student))' });

  mc(U, '속성을 삭제한 뒤의 출력은?',
    ['{"이름":"윤인성","취미":"악기"}', '{"이름":"윤인성","취미":"악기","장래희망":"생명공학자"}', '{"이름":"윤인성","취미":"악기","장래희망":null}', '오류'], 0,
    'delete로 제거한 속성은 객체에서 사라져요.',
    '7주차 · 소스 6-1-3', { cat: 'predict', tag: 'delete', code: 'const student = {}\nstudent.이름 = "윤인성"\nstudent.취미 = "악기"\nstudent.장래희망 = "생명공학자"\ndelete student.장래희망\nconsole.log(JSON.stringify(student))', run: 'const student={}; student.이름="윤인성"; student.취미="악기"; student.장래희망="생명공학자"; delete student.장래희망; console.log(JSON.stringify(student))' });

  mc(U, 'test.a()와 test.b()를 호출했을 때 this의 차이는? (a는 익명 함수, b는 화살표 함수)',
    ['a는 test 객체, b는 window 객체를 출력한다', '둘 다 test 객체를 출력한다', 'a는 window, b는 test를 출력한다', '둘 다 window 객체를 출력한다'], 0,
    '익명 함수(function)는 메소드로 쓰이면 호출한 객체를 this로 갖지만, 화살표 함수는 this가 객체가 아니라 바깥(window)을 가리켜요.',
    '7주차 · 화살표 함수를 사용한 메소드', { tag: 'this', code: 'const test = {\n  a: function () { console.log(this) },\n  b: () => { console.log(this) }\n}\ntest.a()\ntest.b()' });

  // ── 6-2 객체 자료형 · 기본 자료형 ─────────────
  mc(U, '자바스크립트에서 "객체"인 것은?',
    ['배열과 함수', '숫자 273', '문자열 "안녕하세요"', 'true'], 0,
    '속성과 메소드를 가질 수 있는 모든 것은 객체예요. 배열도 객체, 함수도 객체(실행 가능한 객체, 일급 객체)예요.',
    '7주차 · 객체 자료형', { tag: '객체 자료형', x: { 1: '숫자·문자열·불은 객체가 아닌 기본 자료형이에요.' } });

  mc(U, '배열 a에 속성을 추가하고 읽으면 결과는?',
    ['10', 'undefined', '오류', 'null'], 0,
    '배열도 객체라서 속성을 가질 수 있어요.',
    '7주차 · 객체 자료형', { cat: 'predict', tag: '객체 자료형', code: 'const a = []\na.sample = 10\nconsole.log(a.sample)', run: 'const a=[]; a.sample=10; console.log(a.sample)' });

  mc(U, '기본 자료형(숫자 273)에 속성을 추가하고 읽으면 결과는?',
    ['undefined', '10', '오류', 'null'], 0,
    '기본 자료형은 객체가 아니라서 속성을 가질 수 없어요. 대입은 오류 없이 지나가지만 실제로 만들어지지 않아요.',
    '7주차 · 기본 자료형', { cat: 'predict', tag: '기본 자료형', code: 'const c = 273\nc.sample = 10\nconsole.log(c.sample)', run: 'const c=273; c.sample=10; console.log(c.sample)' });

  mc(U, '기본 자료형을 모두 고르면?',
    ['숫자, 문자열, 불', '배열, 함수, 객체', '숫자, 배열, 불', '문자열, 함수, undefined'], 0,
    '기본 자료형은 실체가 있는 것 중에서 객체가 아닌 것으로, 숫자·문자열·불이 대표적이에요.',
    '7주차 · 마무리①', { tag: '기본 자료형' });

  mc(U, 'new Number(273)을 f에 담았을 때 typeof f는?',
    ['"object"', '"number"', '"function"', '"undefined"'], 0,
    'new로 만든 숫자 객체는 객체 자료형이라 속성을 가질 수 있고, f + 0이나 f.valueOf()로 값을 꺼낼 수 있어요.',
    '7주차 · 기본 자료형을 객체로', { cat: 'predict', tag: 'new Number', code: 'const f = new Number(273)\nconsole.log(typeof f)', run: 'const f = new Number(273); console.log(typeof f)' });

  mc(U, 'new Number(273)의 값을 숫자로 꺼내는 메소드는?',
    ['valueOf()', 'toValue()', 'getNumber()', 'number()'], 0,
    'f.valueOf()는 273을 돌려줘요. f + 0처럼 숫자와 똑같이 계산에도 쓸 수 있어요.',
    '7주차 · 기본 자료형을 객체로', { tag: 'valueOf' });

  mc(U, '기본 자료형의 승급이란?',
    ['기본 자료형이 일시적으로 객체 자료형으로 변하는 것', '객체가 기본 자료형으로 바뀌는 것', '변수가 상수로 바뀌는 것', '배열이 객체로 복사되는 것'], 0,
    '기본 자료형도 메소드를 쓸 수 있는 이유예요. 메소드를 쓰는 순간 임시로 객체처럼 다뤄져요.',
    '7주차 · 마무리①', { tag: '승급' });

  mc(U, '프로토타입으로 메소드를 추가한 뒤 a.power(3)의 결과는? (a = 12)',
    ['1728', '36', '144', '오류'], 0,
    'Number.prototype.power에 메소드를 추가하면 모든 숫자에서 쓸 수 있어요. power(n = 2)의 기본값만 2이고 3을 넘기면 12의 3제곱 = 1728이에요.',
    '7주차 · 소스 6-2-1', { cat: 'predict', tag: 'prototype', code: 'Number.prototype.power = function (n = 2) {\n  return this.valueOf() ** n\n}\nconst a = 12\nconsole.log(a.power(3))', run: 'Number.prototype.power = function (n = 2) { return this.valueOf() ** n }; const a = 12; console.log(a.power(3))' });

  mc(U, 'a.power()처럼 인수를 생략하면 위 power()의 결과는? (a = 12)',
    ['144', '12', '1728', 'NaN'], 0,
    '기본값 n = 2가 적용돼서 12 ** 2 = 144예요.',
    '7주차 · 소스 6-2-1', { cat: 'predict', tag: 'prototype', code: 'Number.prototype.power = function (n = 2) {\n  return this.valueOf() ** n\n}\nconst a = 12\nconsole.log(a.power())', run: 'Number.prototype.power = function (n = 2) { return this.valueOf() ** n }; const a = 12; console.log(a.power())' });

  mc(U, 'prototype 객체에 속성과 메소드를 추가하면?',
    ['해당 객체 자료형 전체(와 기본 자료형)에서 쓸 수 있다', '추가한 변수에서만 쓸 수 있다', '다음 줄에서만 쓸 수 있다', '아무 효과가 없다'], 0,
    'prototype 객체는 객체의 틀이에요. 이곳에 추가하면 해당 객체 전체에서 사용할 수 있어요.',
    '7주차 · 프로토타입으로 메소드 추가', { tag: 'prototype' });

  fb(U, '문자열 안에 어떤 문자열이 있는지 위치(인덱스)를 구하는 메소드를 채우세요.',
    'const j = "안녕하세요"\nconsole.log(j.___("하세"))', ['indexOf'], ['indexOf', 'search', 'find', 'contains', 'position'],
    'indexOf는 해당 문자열이 시작하는 인덱스를 돌려주고, 없으면 -1을 돌려줘요. "하세"는 2번 인덱스예요.',
    '7주차 · indexOf()', { tag: 'indexOf', exec: 'const j="안녕하세요"; console.log(j.indexOf("하세"))' });

  mc(U, '"안녕하세요".indexOf("없는 문자열")의 결과는?',
    ['-1', '0', 'undefined', 'false'], 0,
    '없는 문자열이면 -1을 출력해요. 그래서 contain()을 만들 때 indexOf(data) >= 0 으로 판별해요.',
    '7주차 · indexOf()', { cat: 'predict', tag: 'indexOf', code: 'const j = "안녕하세요"\nconsole.log(j.indexOf("없는 문자열"))', run: 'console.log("안녕하세요".indexOf("없는 문자열"))' });

  mc(U, 'String.prototype.contain = function (data) { return this.indexOf(data) >= 0 } 를 추가한 뒤 "안녕하세요".contain("안녕")의 결과는?',
    ['true', 'false', '0', '오류'], 0,
    'indexOf("안녕")이 0이고 0 >= 0이라서 true예요.',
    '7주차 · 소스 6-2-2', { cat: 'predict', tag: 'prototype', code: 'String.prototype.contain = function (data) {\n  return this.indexOf(data) >= 0\n}\nconsole.log("안녕하세요".contain("안녕"))', run: 'String.prototype.contain = function (data) { return this.indexOf(data) >= 0 }; console.log("안녕하세요".contain("안녕"))' });

  mc(U, '[273, 32, 103, 57, 52].contain(0)의 결과는? (Array.prototype.contain을 같은 방식으로 추가함)',
    ['false', 'true', '0', '오류'], 0,
    '배열에 0이 없으니 indexOf(0)은 -1이고, -1 >= 0 은 false예요.',
    '7주차 · 소스 6-2-2', { cat: 'predict', tag: 'prototype', code: 'Array.prototype.contain = function (data) {\n  return this.indexOf(data) >= 0\n}\nconsole.log([273, 32, 103, 57, 52].contain(0))', run: 'Array.prototype.contain = function (data) { return this.indexOf(data) >= 0 }; console.log([273, 32, 103, 57, 52].contain(0))' });

  // ── Number / String / Math 객체 ───────────
  mc(U, 'const l = 123.456789 일 때 l.toFixed(2)의 결과는?',
    ['"123.46"', '"123.45"', '123', '"123.4568"'], 0,
    'toFixed(n)은 소수점 이하 n자리까지만 출력하는데 반올림해서 문자열로 돌려줘요.',
    '7주차 · Number 객체', { cat: 'predict', tag: 'toFixed', code: 'const l = 123.456789\nconsole.log(l.toFixed(2))', run: 'const l = 123.456789; console.log(l.toFixed(2))' });

  mc(U, 'NaN인지 확인하는 올바른 방법은?',
    ['Number.isNaN(m)', 'm === NaN', 'm == NaN', 'typeof m === "NaN"'], 0,
    'NaN은 자기 자신과도 같지 않아서 m === NaN은 false가 나와요. Number.isNaN()을 사용해요.',
    '7주차 · isNaN()', { tag: 'isNaN', x: { 1: 'NaN과 비교해서는 NaN인지 확인할 수 없어요. 항상 false예요.' } });

  mc(U, 'Number.isFinite(10 / 0)의 결과는?',
    ['false', 'true', 'Infinity', '오류'], 0,
    '10 / 0은 Infinity(양의 무한대)이고, isFinite는 "유한한 숫자인가?"를 확인해서 false예요. 일반 숫자는 true.',
    '7주차 · isFinite()', { cat: 'predict', tag: 'isFinite', code: 'const n = 10 / 0\nconsole.log(Number.isFinite(n))', run: 'const n = 10 / 0; console.log(Number.isFinite(n))' });

  mc(U, '문자열 양쪽 끝의 공백을 없애는 String 메소드는?',
    ['trim()', 'strip()', 'cut()', 'clean()'], 0,
    'trim()은 앞뒤 공백(줄바꿈 포함)을 제거해요. 문자열 가운데 공백은 그대로예요.',
    '7주차 · String 객체', { tag: 'trim' });

  mc(U, '"a,b,c".split(",")의 결과는?',
    ['[ "a", "b", "c" ]', '"abc"', '[ "a,b,c" ]', '3'], 0,
    'split은 문자열을 매개변수(다른 문자열)로 잘라서 배열로 돌려줘요. 줄바꿈으로 자를 땐 split("\\n").',
    '7주차 · split()', { cat: 'predict', tag: 'split', code: 'console.log("a,b,c".split(","))', run: 'console.log("a,b,c".split(","))' });

  // ── JSON · 외부 파일 · 라이브러리 ───────────
  mc(U, 'JSON에 대한 설명으로 틀린 것은?',
    ['문자열은 작은따옴표나 큰따옴표 모두 가능하다', '값으로 문자열, 숫자, 불 자료형만 쓸 수 있다', '키에도 반드시 따옴표를 붙여야 한다', '문자열은 반드시 큰따옴표로 만들어야 한다'], 0,
    'JSON은 문자열을 반드시 큰따옴표로 만들고, 키에도 따옴표를 붙여야 해요. 함수 등은 값으로 쓸 수 없어요.',
    '7주차 · JSON 객체', { tag: 'JSON' });

  fb(U, '자바스크립트 객체를 JSON 문자열로 바꾸세요. (들여쓰기 2칸)',
    'console.log(JSON.___(data, null, 2))', ['stringify'], ['stringify', 'parse', 'toJSON', 'serialize', 'toString'],
    'JSON.stringify(객체, null, 2): 두 번째 매개변수는 거의 안 써서 null을 넣고, 세 번째로 들여쓰기 칸 수를 지정해요.',
    '7주차 · JSON.stringify()', { tag: 'JSON' });

  fb(U, 'JSON 문자열을 다시 자바스크립트 객체로 바꾸세요.',
    'const json = JSON.stringify(data)\nconsole.log(JSON.___(json))', ['parse'], ['parse', 'stringify', 'toObject', 'eval', 'decode'],
    'stringify는 객체 → 문자열, parse는 문자열 → 객체예요.',
    '7주차 · JSON.parse()', { tag: 'JSON' });

  mc(U, 'test.js를 먼저 불러온 main.html을 열면 콘솔 출력 순서는?',
    ['# test.js 파일 → # main.html의 script 태그', '# main.html의 script 태그 → # test.js 파일', '동시에 출력', '오류'], 0,
    '<script src="test.js">가 아래 script 태그보다 위에 있으므로 먼저 실행돼요.',
    '7주차 · 외부 script 파일', { cat: 'predict', tag: '외부 script', code: '<script src="test.js"></script>\n<script>\n  console.log("# main.html의 script 태그")\n  console.log("sample 값:", sample)\n</script>\n\n// test.js\nconsole.log("# test.js 파일")\nconst sample = 10' });

  mc(U, 'Lodash 라이브러리의 설명으로 맞는 것은?',
    ['개발할 때 보조적으로 쓰는 함수들을 제공하는 유틸리티 라이브러리다', '날짜를 다루는 라이브러리다', '그래프를 그리는 라이브러리다', '3차원 그래픽을 다루는 라이브러리다'], 0,
    '날짜는 Luxon/date-fns, 그래프는 D3.js/ChartJS, 3D는 Three.js예요. Lodash는 CDN으로 불러오고, _.sortBy()로 배열을 정렬해요.',
    '7주차 · Lodash 라이브러리', { tag: 'Lodash' });

  mc(U, 'CDN이란?',
    ['콘텐츠 전송 네트워크(Contents Delivery Network)', '코드 변환 도구', '자바스크립트 압축 파일', '데이터베이스의 일종'], 0,
    'CDN 링크로 라이브러리를 내려받지 않고 바로 불러올 수 있어요. min 버전은 코드를 응축(zipping)해 용량을 줄인 파일이에요.',
    '7주차 · Lodash 라이브러리', { tag: 'CDN' });

  mc(U, '마무리 확인 문제: 이 코드의 실행 결과는?',
    ['오류 (num.원은 함수가 아니다)', '"52000원"', 'undefined', '52000'], 0,
    '숫자 num은 기본 자료형이라 속성(num.원)이 만들어지지 않아요. 그래서 num.원()을 호출하면 TypeError. 메소드를 넣으려면 Number.prototype에 추가해야 해요.',
    '7주차 · 마무리 확인 문제', { cat: 'predict', tag: '기본 자료형', code: 'const num = 52000\nnum.원 = function () {\n  return this.valueOf() + "원"\n}\nconsole.log(num.원())', run: 'const num = 52000; num.원 = function(){ return this.valueOf() + "원" }; console.log(num.원())' });

  // ── 6-3 객체와 배열 고급 ───────────────────
  mc(U, '객체에 name 속성이 있는지 undefined 비교로 확인한 결과는? (author는 없는 속성)',
    ['name 속성이 있습니다. / author 속성이 없습니다.', '둘 다 있습니다.', '둘 다 없습니다.', '오류'], 0,
    '없는 속성을 읽으면 undefined라서 !== undefined 조건으로 존재 여부를 확인해요.',
    '7주차 · 소스 6-3-1', { cat: 'predict', tag: '속성 확인', code: 'const object = { name: "혼자 공부하는 파이썬", price: 18000 }\nif (object.name !== undefined) console.log("name 속성이 있습니다.")\nelse console.log("name 속성이 없습니다.")\nif (object.author !== undefined) console.log("author 속성이 있습니다.")\nelse console.log("author 속성이 없습니다.")' });

  mc(U, 'if (object.name)처럼 짧게 속성 존재를 검사할 때 주의할 점은?',
    ['속성값이 0, false, 빈 문자열처럼 false로 변환되는 값이면 없는 것으로 오해한다', '항상 오류가 난다', '문자열 속성만 검사할 수 있다', '주의할 점이 없다'], 0,
    '짧은 조건문은 속성이 false로 변환될 수 있는 값이 들어오지 않을 것이라는 전제가 있을 때만 안전해요.',
    '7주차 · 속성 존재 확인', { tag: '속성 확인' });

  fb(U, '짧은 조건문으로 객체의 기본 속성을 지정하세요.',
    'object.name = object.name ___ "제목 미정"\nobject.author = object.author ___ "저자 미상"', ['||', '||'], ['||', '&&', '??', '?', '!'],
    'object.author가 없으면(undefined이면) 뒤의 값이 대신 쓰여요. 삼항 연산자로 쓰면 object.author !== undefined ? object.author : "저자 미상".',
    '7주차 · 소스 6-3-2', { tag: '기본 속성', exec: 'const object={name:"x"}; object.name = object.name || "제목 미정"; object.author = object.author || "저자 미상"; console.log(JSON.stringify(object))' });

  fb(U, '객체에서 name과 price 속성을 꺼내 변수로 할당하세요.',
    'const object = { name: "혼자 공부하는 파이썬", price: 18000, publisher: "한빛미디어" }\nconst ___ name, price ___ = object\nconsole.log(name, price)', ['{', '}'], ['{', '}', '[', ']', '(', ')'],
    '{ 속성 이름, 속성 이름 } = 객체 형태의 객체 기반 다중 할당이에요.',
    '7주차 · 소스 6-3-3', { tag: '다중 할당', exec: 'const object = { name: "혼자 공부하는 파이썬", price: 18000 }; const { name, price } = object; console.log(name, price)' });

  mc(U, '슬라이드의 const { a=name, b=price } = object 가 출력하는 결과는? (앞 줄에서 name, price를 이미 꺼낸 상태)',
    ['혼자 공부하는 파이썬 18000', 'a b', 'undefined undefined', '오류'], 0,
    'object에 a, b 속성이 없어서 기본값(name, price 변수)이 쓰였어요. 참고: 속성을 다른 이름으로 꺼내는 정식 문법은 { name: a, price: b } 예요. 슬라이드의 { a=name }은 기본값 문법이라 시험에는 슬라이드 표기를 기준으로 기억하되 차이를 알아 두세요.',
    '7주차 · 소스 6-3-3', { cat: 'predict', tag: '다중 할당', code: 'const object = { name: "혼자 공부하는 파이썬", price: 18000 }\nconst { name, price } = object\nconst { a=name, b=price } = object\nconsole.log(a, b)', run: 'const object = { name: "혼자 공부하는 파이썬", price: 18000 }; const { name, price } = object; const { a=name, b=price } = object; console.log(a, b)' });

  mc(U, '배열을 = 로 복사하고 복사본에 push하면 원본은?',
    ['원본에도 같이 추가된다 (얕은 복사: 참조 복사)', '원본은 그대로다', '오류가 난다', '원본이 비워진다'], 0,
    '배열과 객체는 할당할 때 얕은 복사(참조 복사)가 이루어져요. 이름만 하나 더 붙는 거라 두 변수가 같은 배열을 가리켜요.',
    '7주차 · 소스 6-3-4', { cat: 'predict', tag: '얕은 복사', code: 'const 물건_200301 = ["우유", "식빵"]\nconst 물건_200302 = 물건_200301\n물건_200302.push("고구마")\nconsole.log(물건_200301)' });

  mc(U, '전개 연산자로 복사한 배열에 push한 뒤 원본 물건_200301의 값은?',
    ['[ "우유", "식빵" ]', '[ "우유", "식빵", "고구마" ]', '[ "고구마" ]', '오류'], 0,
    '[...배열]은 새 배열을 만들어서 두 배열이 독립적으로 작동해요(슬라이드: 깊은 복사/클론).',
    '7주차 · 소스 6-3-5', { cat: 'predict', tag: '배열 전개', code: 'const 물건_200301 = ["우유", "식빵"]\nconst 물건_200302 = [...물건_200301]\n물건_200302.push("고구마")\nconsole.log(물건_200301)', run: 'const a=["우유","식빵"]; const b=[...a]; b.push("고구마"); console.log(a)' });

  mc(U, 'const 물건_200302 = ["고구마", ...물건_200301, "토마토"] 의 결과는? (물건_200301 = ["우유", "식빵"])',
    ['[ "고구마", "우유", "식빵", "토마토" ]', '[ "고구마", ["우유", "식빵"], "토마토" ]', '[ "우유", "식빵", "고구마", "토마토" ]', '[ "고구마", "토마토" ]'], 0,
    '전개 연산자를 입력한 자리에 배열이 펼쳐져 들어가요. 위치를 바꾸면 요소의 순서도 바뀌고, 여러 번 전개해 배열을 붙일 수도 있어요.',
    '7주차 · 소스 6-3-6', { cat: 'predict', tag: '배열 전개', code: 'const 물건_200301 = ["우유", "식빵"]\nconst 물건_200302 = ["고구마", ...물건_200301, "토마토"]\nconsole.log(물건_200302)', run: 'const a=["우유","식빵"]; console.log(["고구마", ...a, "토마토"])' });

  mc(U, 'const 별 = 구름 으로 객체를 복사한 뒤 별.이름 = "별"로 바꾸고 구름.이름을 출력하면?',
    ['"별" (구름도 바뀐다)', '"구름"', 'undefined', '오류'], 0,
    '객체도 할당하면 얕은 복사(참조 복사)라서 같은 객체를 가리켜요. 구름과 별이 모두 바뀐 결과가 나와요.',
    '7주차 · 소스 6-3-7', { cat: 'predict', tag: '얕은 복사', code: 'const 구름 = { 이름: "구름", 나이: 6, 종족: "강아지" }\nconst 별 = 구름\n별.이름 = "별"\n별.나이 = 1\nconsole.log(구름.이름)' });

  mc(U, 'const 별 = {...구름} 으로 복사하고 별을 바꾼 뒤 JSON.stringify(구름)은?',
    ['{"이름":"구름","나이":6,"종족":"강아지"}', '{"이름":"별","나이":1,"종족":"강아지"}', '{"이름":"별","나이":1}', '오류'], 0,
    '{...객체}로 복사하면 두 객체가 독립적으로 동작해서 원본은 그대로예요.',
    '7주차 · 소스 6-3-8', { cat: 'predict', tag: '객체 전개', code: 'const 구름 = { 이름: "구름", 나이: 6, 종족: "강아지" }\nconst 별 = {...구름}\n별.이름 = "별"\n별.나이 = 1\nconsole.log(JSON.stringify(구름))', run: 'const 구름={이름:"구름",나이:6,종족:"강아지"}; const 별={...구름}; 별.이름="별"; 별.나이=1; console.log(JSON.stringify(구름))' });

  mc(U, '전개 부분이 앞에 있는 const 별 = { ...구름, 이름: "별", 나이: 1, 예방접종: true }의 결과 JSON은?',
    ['{"이름":"별","나이":1,"종족":"강아지","예방접종":true}', '{"이름":"구름","나이":6,"종족":"강아지","예방접종":true}', '{"이름":"별","나이":1,"예방접종":true}', '오류'], 0,
    '뒤에 있는 이름과 나이가 앞에서 전개된 값을 덮어써요. 객체는 전개 순서가 중요해요.',
    '7주차 · 소스 6-3-9', { cat: 'predict', tag: '객체 전개', code: 'const 구름 = { 이름: "구름", 나이: 6, 종족: "강아지" }\nconst 별 = {\n  ...구름,\n  이름: "별",\n  나이: 1,\n  예방접종: true\n}\nconsole.log(JSON.stringify(별))', run: 'const 구름={이름:"구름",나이:6,종족:"강아지"}; const 별={...구름,이름:"별",나이:1,예방접종:true}; console.log(JSON.stringify(별))' });

  mc(U, '전개 부분을 맨 뒤로 옮긴 const 별 = { 이름: "별", 나이: 1, 예방접종: true, ...구름 }의 결과 JSON은?',
    ['{"이름":"구름","나이":6,"예방접종":true,"종족":"강아지"}', '{"이름":"별","나이":1,"예방접종":true,"종족":"강아지"}', '{"이름":"별","나이":1,"예방접종":true}', '오류'], 0,
    '뒤에서 전개된 구름의 이름과 나이가 앞의 값을 덮어써요. (앞에 전개하면 직접 쓴 값이 이기고, 뒤에 전개하면 전개된 값이 이겨요.)',
    '7주차 · 소스 6-3-10', { cat: 'predict', tag: '객체 전개', code: 'const 구름 = { 이름: "구름", 나이: 6, 종족: "강아지" }\nconst 별 = {\n  이름: "별",\n  나이: 1,\n  예방접종: true,\n  ...구름\n}\nconsole.log(JSON.stringify(별))', run: 'const 구름={이름:"구름",나이:6,종족:"강아지"}; const 별={이름:"별",나이:1,예방접종:true,...구름}; console.log(JSON.stringify(별))' });
})();
