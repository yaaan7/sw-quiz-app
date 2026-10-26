/* 단원 4 — 함수 (Ch 5: 5-1 함수의 기본 형태 / 5-2 함수 고급) — 슬라이드 범위만 */
(function () {
  var U = 'u4';

  // ── 5-1 기본 형태 ─────────────────────────
  mc(U, '함수에 대한 설명으로 맞는 것은?',
    ['코드의 집합을 나타내는 자료형이다', '반드시 이름이 있어야 한다', '변수에 담을 수 없다', '호출은 한 번만 할 수 있다'], 0,
    '함수는 코드의 집합을 나타내는 자료형이에요. 변수에 담을 수 있고 여러 번 호출할 수 있어요.',
    '5주차 · 함수의 기본 형태', { tag: '함수 개념' });

  mc(U, '익명 함수를 만드는 올바른 코드는?',
    ['const 함수 = function () { }', 'function () { } = 함수', 'const 함수 = () function { }', 'function 함수 => { }'], 0,
    '이름 없는 function () { }을 변수에 넣어 만들면 익명 함수예요. 변수 이름 뒤에 ()를 붙여 호출해요.',
    '5주차 · 익명 함수', { tag: '익명 함수' });

  mc(U, '실행 결과 마지막 줄(typeof 함수)의 출력은?',
    ['"function"', '"object"', '"undefined"', '"string"'], 0,
    '함수는 자료형이라 typeof로 확인하면 "function"이 나와요. 함수 자체를 출력하는 것도 가능해요.',
    '5주차 · 소스 5-1-1', { cat: 'predict', tag: 'typeof', code: 'const 함수 = function () {\n  console.log("실행")\n}\nconsole.log(typeof 함수)', run: 'const f = function(){ console.log("실행") }; console.log(typeof f)' });

  fb(U, '이름을 붙여 선언적 함수를 만드세요.',
    '___ 함수() {\n  console.log("선언적 함수")\n}\n함수()', ['function'], ['function', 'const', 'let', 'func', 'def'],
    '선언적 함수는 function 키워드 뒤에 이름을 붙여 만들어요.',
    '5주차 · 선언적 함수', { tag: '선언적 함수', exec: 'function 함수(){ console.log("선언적 함수") } 함수()' });

  fb(U, '함수를 정의하고 리턴값을 돌려주세요.',
    'function f(x) {\n  ___ x * x\n}\nconsole.log(f(3))', ['return'], ['return', 'print', 'break', 'output', 'yield'],
    'return 뒤의 값이 함수를 호출한 곳으로 돌아와요. f(3)은 9.',
    '5주차 · 소스 5-1-3', { tag: 'return', exec: 'function f(x){ return x * x } console.log(f(3))' });

  mc(U, 'f(3)의 결과는?',
    ['9', '6', '3', 'undefined'], 0,
    'return x * x 이므로 3 × 3 = 9예요.',
    '5주차 · 소스 5-1-3', { cat: 'predict', tag: 'return', code: 'function f(x) {\n  return x * x\n}\nconsole.log(f(3))', run: 'function f(x){ return x * x } console.log(f(3))' });

  mc(U, '리턴값이 없는 함수(prompt()와 달리 function 함수():void)의 반환 타입 표기는?',
    ['void', 'string', 'number', 'null'], 0,
    '슬라이드에서 prompt()는 string을 리턴하고, 리턴값이 없는 사용자 정의 함수는 void로 나타내요.',
    '5주차 · 매개변수와 리턴값', { tag: '리턴값' });

  mc(U, '윤년 조건으로 올바르지 않은 것은?',
    ['100으로 나누어 떨어지는 해는 무조건 윤년', '4로 나누어 떨어지는 해는 윤년', '100으로 나누어 떨어지는 해는 윤년이 아님', '400으로 나누어 떨어지는 해는 윤년'], 0,
    '4의 배수는 윤년, 그중 100의 배수는 윤년이 아님, 그중 400의 배수는 다시 윤년이에요.',
    '5주차 · 윤년 확인 예제', { tag: '윤년' });

  mc(U, 'isLeapYear(1900)의 결과는?',
    ['false', 'true', 'undefined', '오류'], 0,
    '1900은 4로 나누어 떨어지지만 100으로도 나누어 떨어지고 400으로는 안 나누어 떨어져서 윤년이 아니에요.',
    '5주차 · 소스 5-1-4', { cat: 'predict', tag: '윤년', code: 'function isLeapYear(year) {\n  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)\n}\nconsole.log(isLeapYear(1900))', run: 'function isLeapYear(year){ return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) } console.log(isLeapYear(1900))' });

  mc(U, 'isLeapYear(2000)의 결과는?',
    ['true', 'false', 'undefined', '오류'], 0,
    '2000은 100으로 나누어 떨어지지만 400으로도 나누어 떨어져서 윤년이에요.',
    '5주차 · 소스 5-1-4', { cat: 'predict', tag: '윤년', code: 'function isLeapYear(year) {\n  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)\n}\nconsole.log(isLeapYear(2000))', run: 'function isLeapYear(year){ return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) } console.log(isLeapYear(2000))' });

  fb(U, '배열의 최솟값을 구하는 함수를 완성하세요.',
    'function min(array) {\n  let output = array[0]\n  for (const item of array) {\n    if (output ___ item) {\n      output = item\n    }\n  }\n  return output\n}', ['>'], ['>', '<', '===', '<=', '!=='],
    'output이 item보다 크면 output을 더 작은 item으로 바꿔요. 이 과정을 반복하면 최솟값이 남아요.',
    '5주차 · 소스 5-1-6', { tag: '최솟값', exec: 'function min(array){ let output = array[0]; for (const item of array){ if (output > item) { output = item } } return output } console.log(min([52,273,32]))' });

  mc(U, 'min([52, 273, 32, 103, 275, 24, 57])의 결과는?',
    ['24', '52', '275', '32'], 0,
    '배열에서 가장 작은 값은 24예요.',
    '5주차 · 소스 5-1-6', { cat: 'predict', tag: '최솟값', code: 'const testArray = [52, 273, 32, 103, 275, 24, 57]\nconsole.log(min(testArray))   // min은 최솟값을 구하는 함수', run: 'console.log(Math.min(52,273,32,103,275,24,57))' });

  // ── 나머지 매개변수·전개 연산자 ─────────────
  mc(U, '호출할 때 매개변수의 개수가 고정되지 않은 함수를 만들 때 쓰는 문법은?',
    ['나머지 매개변수(rest parameter)', '기본 매개변수', '콜백 매개변수', '전역 매개변수'], 0,
    'function 함수(...items) { } 처럼 앞에 ...을 붙이면 넘어온 인수가 모두 배열로 모여요.',
    '5주차 · 나머지 매개변수', { tag: '나머지 매개변수' });

  fb(U, '나머지 매개변수를 선언하세요.',
    'function sample(___items) {\n  console.log(items)\n}\nsample(1, 2, 3)', ['...'], ['...', '..', '*', '&', '$'],
    '...items로 선언하면 items가 배열이 되어 [1, 2, 3]이 출력돼요.',
    '5주차 · 소스 5-1-7', { tag: '나머지 매개변수', exec: 'function sample(...items){ console.log(items) } sample(1,2,3)' });

  mc(U, 'sample(1, 2, 3, 4)를 호출했을 때 console.log(a, b, c)의 출력은?',
    ['1 2 [ 3, 4 ]', '1 2 3 4', '[ 1, 2 ] [ 3, 4 ]', '1 2 3'], 0,
    '나머지 매개변수 c는 앞의 일반 매개변수 a, b를 제외한 나머지를 배열로 받아요.',
    '5주차 · 소스 5-1-9', { cat: 'predict', tag: '나머지 매개변수', code: 'function sample(a, b, ...c) {\n  console.log(a, b, c)\n}\nsample(1, 2, 3, 4)', run: 'function sample(a, b, ...c){ console.log(a, b, c) } sample(1,2,3,4)' });

  mc(U, 'sample(1, 2)처럼 인수가 2개일 때 위 함수의 c 값은?',
    ['빈 배열 [ ]', 'undefined', 'null', '오류'], 0,
    '나머지 매개변수에 들어올 값이 없으면 빈 배열이 돼요.',
    '5주차 · 소스 5-1-9', { cat: 'predict', tag: '나머지 매개변수', code: 'function sample(a, b, ...c) {\n  console.log(c)\n}\nsample(1, 2)' });

  mc(U, '매개변수로 들어온 값이 배열인지 확인할 때 쓰는 메소드는?',
    ['Array.isArray()', 'typeof', 'instanceArray()', 'isArray.check()'], 0,
    'typeof로는 배열을 확인할 수 없어요(배열도 "object"). Array.isArray()를 사용해요.',
    '5주차 · Array.isArray()', { tag: 'Array.isArray', x: { 1: 'typeof 배열은 "object"가 나와서 배열인지 구분할 수 없어요.' } });

  mc(U, 'min(first, ...rests)에서 min([52, 273, 32])처럼 배열을 넣으면 first는?',
    ['배열 전체 [52, 273, 32]', '52', 'undefined', '[52]'], 0,
    '배열 하나를 통째로 넘기면 first가 그 배열이고 rests는 빈 배열이에요. 그래서 Array.isArray(first)로 분기해요.',
    '5주차 · 소스 5-1-10', { tag: 'Array.isArray' });

  mc(U, '전개 연산자를 쓰지 않은 sample(array)의 출력은? (array = [1, 2, 3, 4])',
    ['[ [ 1, 2, 3, 4 ] ]', '[ 1, 2, 3, 4 ]', '1 2 3 4', '[ ]'], 0,
    '배열이 요소 하나로 들어와 items = [[1, 2, 3, 4]]이 돼요. sample(...array)로 전개해야 [1, 2, 3, 4]가 나와요.',
    '5주차 · 소스 5-1-11', { cat: 'predict', tag: '전개 연산자', code: 'function sample(...items) {\n  console.log(items)\n}\nconst array = [1, 2, 3, 4]\nsample(array)', run: 'function sample(...items){ console.log(items) } const array=[1,2,3,4]; sample(array)' });

  mc(U, '전개 연산자를 쓴 sample(...array)의 출력은? (array = [1, 2, 3, 4])',
    ['[ 1, 2, 3, 4 ]', '[ [ 1, 2, 3, 4 ] ]', '1', '오류'], 0,
    '...array가 배열을 하나하나 풀어서 숫자 4개가 따로 매개변수로 들어가요.',
    '5주차 · 소스 5-1-11', { cat: 'predict', tag: '전개 연산자', code: 'function sample(...items) {\n  console.log(items)\n}\nconst array = [1, 2, 3, 4]\nsample(...array)', run: 'function sample(...items){ console.log(items) } const array=[1,2,3,4]; sample(...array)' });

  // ── 5-2 콜백 · 화살표 · 타이머 ─────────────
  mc(U, '콜백(callback) 함수란?',
    ['매개변수로 전달하는 함수', '자기 자신을 호출하는 함수', '리턴값이 없는 함수', '이름이 없는 함수'], 0,
    '자바스크립트는 함수도 하나의 자료형이라 매개변수로 전달할 수 있어요. 이렇게 전달하는 함수가 콜백 함수예요.',
    '5주차 · 콜백 함수', { tag: '콜백' });

  or(U, 'callThreeTimes(print)를 호출했을 때 출력 순서대로 누르세요.',
    'function callThreeTimes(callback) {\n  for (let i = 0; i < 3; i++) {\n    callback(i)\n  }\n}\nfunction print(i) {\n  console.log(`${i}번째 함수 호출`)\n}\ncallThreeTimes(print)',
    ['0번째 함수 호출', '1번째 함수 호출', '2번째 함수 호출'], ['3번째 함수 호출'],
    'i가 0, 1, 2일 때 콜백이 3번 호출돼요. 3은 조건(i < 3)에 맞지 않아 호출되지 않아요.',
    '5주차 · 소스 5-2-1', { tag: '콜백', run: 'function callThreeTimes(callback){ for (let i = 0; i < 3; i++) { callback(i) } } function print(i){ console.log(`${i}번째 함수 호출`) } callThreeTimes(print)' });

  mc(U, '콜백 함수로 선언적 함수 대신 익명 함수를 넘기면?',
    ['함수 이름 없이 그 자리에서 바로 만들어 전달할 수 있다', '오류가 난다', '호출되지 않는다', '전역 함수가 된다'], 0,
    'callThreeTimes(function (i) { ... })처럼 호출 위치에서 바로 익명 함수를 만들어 넘길 수 있어요.',
    '5주차 · 소스 5-2-2', { tag: '콜백' });

  fb(U, '배열의 요소를 하나씩 꺼내 콜백을 호출하는 메소드를 채우세요.',
    'const numbers = [273, 52, 103]\nnumbers.___(function (value, index, array) {\n  console.log(`${index}번째 요소 : ${value}`)\n})', ['forEach'], ['forEach', 'map', 'filter', 'each', 'loop'],
    'forEach는 배열 요소를 사용해 콜백 함수를 호출해요. 콜백의 매개변수는 (value, index, array) 순서예요.',
    '5주차 · forEach()', { tag: 'forEach', exec: 'const numbers=[273,52,103]; numbers.forEach(function(value,index,array){ console.log(`${index}번째 요소 : ${value}`) })' });

  mc(U, 'forEach 콜백 function (value, index, array)에서 첫 번째 매개변수 value는?',
    ['현재 요소의 값', '현재 요소의 인덱스', '배열 전체', '배열의 길이'], 0,
    '순서는 value(값), index(위치), array(배열 전체)예요.',
    '5주차 · forEach()', { tag: 'forEach' });

  fb(U, 'map()으로 모든 값을 제곱한 새 배열을 만드세요.',
    'let numbers = [273, 52, 103, 32, 57]\nnumbers = numbers.___(function (value) {\n  return value * value\n})', ['map'], ['map', 'forEach', 'filter', 'reduce', 'push'],
    'map은 콜백이 리턴한 값들로 새로운 배열을 만들어요.',
    '5주차 · map()', { tag: 'map', exec: 'let numbers=[273,52]; numbers = numbers.map(function(value){ return value*value }); console.log(numbers)' });

  mc(U, '[1, 2, 3].map(value => value * value)의 결과는?',
    ['[ 1, 4, 9 ]', '[ 1, 2, 3 ]', '14', '[ 2, 4, 6 ]'], 0,
    'map은 각 값을 제곱해서 새 배열 [1, 4, 9]를 만들어요.',
    '5주차 · map()', { cat: 'predict', tag: 'map', code: 'const result = [1, 2, 3].map(value => value * value)\nconsole.log(result)', run: 'console.log([1,2,3].map(value => value * value))' });

  mc(U, 'filter() 메소드가 새 배열에 담는 요소는?',
    ['콜백이 true를 리턴한 요소', '콜백이 false를 리턴한 요소', '모든 요소', '첫 번째 요소 하나'], 0,
    'filter는 콜백이 true를 리턴하는 것들만 모아서 새로운 배열을 만들어요.',
    '5주차 · filter()', { tag: 'filter' });

  mc(U, '짝수만 추출한 evenNumbers의 값은?',
    ['[ 0, 2, 4 ]', '[ 1, 3, 5 ]', '[ 0, 1, 2, 3, 4, 5 ]', '[ 2, 4 ]'], 0,
    'value % 2 === 0이 true인 0, 2, 4만 남아요. 0도 짝수라는 점을 놓치지 마세요!',
    '5주차 · 소스 5-2-5', { cat: 'predict', tag: 'filter', code: 'const numbers = [0, 1, 2, 3, 4, 5]\nconst evenNumbers = numbers.filter(function (value) {\n  return value % 2 === 0\n})\nconsole.log(evenNumbers)', run: 'console.log([0,1,2,3,4,5].filter(function(v){ return v % 2 === 0 }))' });

  mc(U, '[273, 25, 75, 52, 103, 32, 57, 24, 76]에서 100 이하의 수만 filter로 추출한 결과는?',
    ['[ 25, 75, 52, 32, 57, 24, 76 ]', '[ 273, 103 ]', '[ 25, 75, 52, 32, 57, 24 ]', '[ 273, 25, 75, 52 ]'], 0,
    'value <= 100이 true인 값만 남아요. 273과 103은 제외돼요.',
    '5주차 · 확인 문제', { cat: 'predict', tag: 'filter', code: 'let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]\nnumbers = numbers.filter((value) => value <= 100)\nconsole.log(numbers)', run: 'let n=[273,25,75,52,103,32,57,24,76]; console.log("[ "+n.filter((v)=>v<=100).join(", ")+" ]")' });

  mc(U, '화살표 함수의 올바른 형태는?',
    ['(매개변수) => 리턴값', '(매개변수) -> 리턴값', 'function => (매개변수)', '=> (매개변수) 리턴값'], 0,
    'function 키워드 대신 화살표(=>)를 쓰는 간단한 함수예요. 본문이 식 하나면 그 값이 곧 리턴값이에요.',
    '5주차 · 화살표 함수', { tag: '화살표 함수' });

  fb(U, '화살표 함수로 바꿔 쓰세요.',
    'const double = (n) ___ n * 2\nconsole.log(double(4))', ['=>'], ['=>', '->', '=', '==>', ':'],
    '(매개변수) => 리턴값 형태예요. double(4)는 8.',
    '5주차 · 화살표 함수', { tag: '화살표 함수', exec: 'const double = (n) => n * 2; console.log(double(4))' });

  or(U, '메소드 체이닝 결과를 출력 순서대로 누르세요.',
    'let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nnumbers\n  .filter((value) => value % 2 === 0)\n  .map((value) => value * value)\n  .forEach((value) => {\n    console.log(value)\n  })',
    ['0', '4', '16', '36', '64'], ['1', '9', '25'],
    '짝수(0, 2, 4, 6, 8)만 filter로 남기고, map으로 제곱한 뒤 forEach로 출력해요.',
    '5주차 · 소스 5-2-6', { tag: '메소드 체이닝', run: 'let numbers=[0,1,2,3,4,5,6,7,8,9]; numbers.filter((v)=>v%2===0).map((v)=>v*v).forEach((v)=>{ console.log(v) })' });

  mc(U, '지정한 시간 "이후에 한 번만" 함수를 호출하는 타이머 함수는?',
    ['setTimeout(함수, 시간)', 'setInterval(함수, 시간)', 'clearTimeout(함수)', 'setTime(함수, 시간)'], 0,
    'setTimeout은 한 번, setInterval은 지정한 시간마다 반복해서 호출해요.',
    '5주차 · 타이머 함수', { tag: '타이머' });

  mc(U, 'setTimeout(함수, 1 * 1000)에서 시간 단위는?',
    ['밀리초(ms) — 1000이면 1초', '초(s) — 1000이면 1000초', '분', '마이크로초'], 0,
    '시간은 밀리초 단위예요. 그래서 1 * 1000으로 쓰면 1초예요.',
    '5주차 · 소스 5-2-7', { tag: '타이머' });

  fb(U, 'setInterval을 종료하는 함수를 채우세요.',
    'let id = setInterval(() => {\n  console.log("반복")\n}, 1000)\nsetTimeout(() => {\n  ___(id)\n}, 5000)', ['clearInterval'], ['clearInterval', 'clearTimeout', 'stopInterval', 'clear', 'removeInterval'],
    'setInterval이 돌려준 ID를 clearInterval(ID)에 넣으면 종료돼요. (setTimeout은 clearTimeout)',
    '5주차 · 소스 5-2-8', { tag: '타이머' });

  // ── 익명 함수 vs 선언적 함수 ────────────────
  mc(U, '1번째 익명 함수를 만든 뒤 2번째 익명 함수를 다시 할당하고 호출하면 출력은?',
    ['2번째 익명 함수입니다.', '1번째 익명 함수입니다.', '둘 다 출력된다', '오류'], 0,
    '익명 함수는 코드가 해당 줄을 읽을 때 생성돼요. 두 번째 할당이 첫 번째를 덮어써서 2번째가 호출돼요.',
    '5주차 · 소스 5-2-14', { cat: 'predict', tag: '익명 함수', code: 'let 익명함수\n익명함수 = function () {\n  console.log("1번째 익명 함수입니다.")\n}\n익명함수 = function () {\n  console.log("2번째 익명 함수입니다.")\n}\n익명함수()', run: 'let f; f = function(){ console.log("1번째 익명 함수입니다.") }; f = function(){ console.log("2번째 익명 함수입니다.") }; f()', x: {} });

  mc(U, '선언적 함수 두 개(같은 이름)를 선언하고, 선언 코드보다 위에서 호출하면 출력은?',
    ['2번째 선언적 함수입니다.', '1번째 선언적 함수입니다.', '오류 (아직 선언되지 않음)', '아무것도 출력되지 않는다'], 0,
    '선언적 함수는 순차 실행 전에 먼저 생성돼요. 같은 이름이면 나중 것이 남아서 호출 위치와 상관없이 2번째가 실행돼요.',
    '5주차 · 소스 5-2-15', { cat: 'predict', tag: '선언적 함수', code: '선언적함수()\n\nfunction 선언적함수 () {\n  console.log("1번째 선언적 함수입니다.")\n}\nfunction 선언적함수 () {\n  console.log("2번째 선언적 함수입니다.")\n}', run: '선언적함수(); function 선언적함수(){ console.log("2번째 선언적 함수입니다.") }' });

  mc(U, '익명 함수와 선언적 함수의 차이로 맞는 것은?',
    ['선언적 함수는 순차 실행 전에 먼저 생성되고, 익명 함수는 해당 줄을 읽을 때 생성된다', '둘 다 해당 줄을 읽을 때 생성된다', '익명 함수가 먼저 생성된다', '둘 다 프로그램 시작 전에 생성된다'], 0,
    '그래서 선언적 함수는 코드 위쪽에서 호출해도 되지만, 익명 함수는 변수에 할당된 이후에만 호출할 수 있어요.',
    '5주차 · 좀 더 알아보기④', { tag: '익명 vs 선언적' });

  mc(U, '익명 함수 할당 후 같은 이름으로 선언적 함수를 만들고 호출하면 출력은?',
    ['"익명 함수입니다."', '"선언적 함수입니다."', '둘 다', '오류'], 0,
    '선언적 함수가 먼저 만들어지고, 이후 순차 실행에서 익명 함수가 같은 변수에 덮어써요. 그래서 마지막에 호출되는 건 익명 함수예요. (함수 = function ... 처럼 키워드 없이 할당한 경우)',
    '5주차 · 소스 5-2-16', { cat: 'predict', tag: '익명 vs 선언적', code: '함수 = function () {\n  console.log("익명 함수입니다.")\n}\nfunction 함수 () {\n  console.log("선언적 함수입니다.")\n}\n함수()', run: '함수 = function(){ console.log("익명 함수입니다.") }; function 함수(){ console.log("선언적 함수입니다.") } 함수()' });

  mc(U, 'let 함수 = function () { } 다음 줄에 같은 이름의 선언적 함수 function 함수 () { }를 만들면?',
    ['오류가 발생한다', '선언적 함수로 덮어쓴다', '익명 함수가 유지된다', '정상 실행된다'], 0,
    'var는 덮어쓰기가 가능했지만 let/const는 위험을 원천 차단하려고 재선언 시 오류를 발생시켜요.',
    '5주차 · 소스 5-2-18', { cat: 'predict', tag: 'let', code: 'let 함수 = function () {\n  console.log("익명 함수입니다.")\n}\nfunction 함수 () {\n  console.log("선언적 함수입니다.")\n}\n함수()' });
})();
