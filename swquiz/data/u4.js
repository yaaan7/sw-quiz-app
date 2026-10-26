/* 단원 4 — 함수 (Ch 5) */
(function () {
  var U = 'u4';

  mc(U, '자바스크립트에서 함수를 정의하는 기본 키워드는?',
    ['function', 'func', 'def', 'method'], 0,
    'function 키워드 + 이름 + (매개변수) + { 본문 } 형태로 정의해요.',
    '5주차 · 함수 선언', { tag: '함수 선언' });

  fb(U, '두 수를 더해 돌려주는 함수를 완성하세요.',
    '___ add(a, b) {\n  ___ a + b;\n}\nconsole.log(add(2, 3));', ['function', 'return'], ['function', 'return', 'def', 'print', 'func'],
    'function으로 선언하고 return으로 값을 돌려줘요. return이 없으면 undefined를 반환해요.',
    '5주차 · 함수 선언', { tag: 'return', exec: 'function add(a, b) { return a + b; } console.log(add(2, 3))' });

  mc(U, 'return이 없는 함수를 호출한 결과값은?',
    ['undefined', 'null', '0', '오류'], 0,
    'return 문이 없거나 값 없이 return만 쓰면 undefined가 반환돼요.',
    '5주차 · 반환값', { cat: 'predict', tag: 'return', code: 'function hi() {\n  let a = 1;\n}\nconsole.log(hi());', run: 'function hi(){ let a = 1; } console.log(hi());' });

  mc(U, '함수 선언문은 선언 위치보다 앞에서 호출할 수 있다. 이 현상은?',
    ['호이스팅(hoisting)', '클로저', '콜백', '바인딩'], 0,
    '함수 선언문은 코드 실행 전에 끌어올려져(호이스팅) 선언 전에도 호출할 수 있어요.',
    '5주차 · 호이스팅', { tag: '호이스팅' });

  mc(U, '실행 결과는?',
    ['5', 'undefined', '오류', 'null'], 0,
    '함수 선언문은 호이스팅되므로 선언 전에 호출해도 정상 동작해요.',
    '5주차 · 호이스팅', { cat: 'predict', tag: '호이스팅', code: 'console.log(five());\nfunction five() {\n  return 5;\n}', run: 'console.log(five()); function five(){ return 5; }' });

  mc(U, '함수 표현식(const f = function(){})을 선언 전에 호출하면?',
    ['오류가 발생한다', '정상 실행된다', 'undefined가 반환된다', '무시된다'], 0,
    'const/let으로 선언한 함수 표현식은 선언 전에 접근할 수 없어요(TDZ). 호이스팅은 함수 "선언문"에만 해당해요.',
    '5주차 · 함수 표현식', { cat: 'predict', tag: '함수 표현식', code: 'console.log(f());\nconst f = function () {\n  return 1;\n};', run: 'console.log(f()); const f = function(){ return 1; };' });

  mc(U, '화살표 함수의 올바른 문법은?',
    ['const sq = x => x * x;', 'const sq = x -> x * x;', 'const sq = (x) = x * x;', 'const sq => x * x;'], 0,
    '(매개변수) => 식 형태예요. 본문이 식 하나면 중괄호와 return을 생략할 수 있어요.',
    '5주차 · 화살표 함수', { tag: '화살표 함수' });

  fb(U, '화살표 함수를 완성하세요.',
    'const double = (n) ___ n * 2;\nconsole.log(double(4));', ['=>'], ['=>', '->', '=', '==>', ':'],
    '화살표는 =>예요. 본문이 식 하나이므로 return과 중괄호 생략이 가능해요.',
    '5주차 · 화살표 함수', { tag: '화살표 함수', exec: 'const double = (n) => n * 2; console.log(double(4))' });

  mc(U, '화살표 함수에서 본문을 { }로 감싸고 return을 쓰지 않으면 반환값은?',
    ['undefined', '식의 결과', 'null', '오류'], 0,
    '중괄호를 쓰면 일반 함수 본문이므로 return을 명시해야 해요. 안 쓰면 undefined.',
    '5주차 · 화살표 함수', { cat: 'predict', tag: '화살표 함수', code: 'const f = x => { x * 2 };\nconsole.log(f(3));', run: 'const f = x => { x * 2 }; console.log(f(3));' });

  mc(U, '기본 매개변수(default parameter)가 적용된 결과는?',
    ['"안녕, 손님"', '"안녕, undefined"', '"안녕, "', '오류'], 0,
    '인자가 전달되지 않거나 undefined면 기본값이 사용돼요.',
    '5주차 · 기본 매개변수', { cat: 'predict', tag: '기본값', code: 'function hi(name = "손님") {\n  return "안녕, " + name;\n}\nconsole.log(hi());', run: 'function hi(name = "손님"){ return "안녕, " + name; } console.log(hi());' });

  mc(U, '함수 호출 시 인자를 부족하게 넘기면 남은 매개변수의 값은?',
    ['undefined', 'null', '0', '오류가 발생한다'], 0,
    '자바스크립트는 인자 개수를 검사하지 않아요. 부족한 매개변수는 undefined, 남는 인자는 무시돼요.',
    '5주차 · 인자와 매개변수', { tag: '인자', x: { 1: '1 + undefined는 NaN이에요. 출력은 NaN.' } });

  mc(U, '위 문제 f(1)의 출력 결과는?',
    ['NaN', 'undefined', '1', '오류'], 0,
    '1 + undefined = NaN(Not a Number)이에요.',
    '5주차 · 인자와 매개변수', { cat: 'predict', tag: '인자', code: 'function f(a, b) {\n  return a + b;\n}\nconsole.log(f(1));', run: 'function f(a, b){ return a + b; } console.log(f(1));' });

  fb(U, '나머지 매개변수로 모든 인자의 합을 구하세요.',
    'function sum(___nums) {\n  let t = 0;\n  for (const n of nums) t += n;\n  return t;\n}\nconsole.log(sum(1, 2, 3));', ['...'], ['...', '..', '*', '&', '$'],
    '...nums(rest parameter)는 남은 인자를 배열로 모아요.',
    '5주차 · rest 매개변수', { tag: 'rest', exec: 'function sum(...nums){ let t = 0; for (const n of nums) t += n; return t; } console.log(sum(1,2,3))' });

  mc(U, '스프레드 연산자 결과는?',
    ['[1, 2, 3, 4]', '[[1, 2], 3, 4]', '[1, 2, [3, 4]]', '오류'], 0,
    '...a가 배열 요소를 펼쳐서 새 배열에 넣어요.',
    '5주차 · spread', { cat: 'predict', tag: 'spread', code: 'const a = [1, 2];\nconst b = [...a, 3, 4];\nconsole.log(b);', run: 'const a=[1,2]; const b=[...a,3,4]; console.log(JSON.stringify(b).replace(/,/g,", "));' });

  mc(U, '함수 안에서 바깥 함수의 변수를 기억하는 함수를 부르는 말은?',
    ['클로저(closure)', '콜백', '재귀', '제너레이터'], 0,
    '클로저는 함수가 자신이 선언된 환경(렉시컬 스코프)의 변수를 기억하고 접근하는 것이에요.',
    '5주차 · 클로저', { tag: '클로저' });

  mc(U, '실행 결과 마지막 줄의 출력은?',
    ['3', '1', '0', 'undefined'], 0,
    'counter가 클로저로 count를 유지해서 호출할 때마다 1씩 늘어나요. 세 번째 호출은 3.',
    '5주차 · 클로저', { cat: 'predict', tag: '클로저', code: 'function make() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = make();\nc(); c();\nconsole.log(c());', run: 'function make(){ let count = 0; return () => ++count; } const c = make(); c(); c(); console.log(c());' });

  mc(U, '콜백 함수란?',
    ['다른 함수의 인자로 전달되어 나중에 호출되는 함수', '자기 자신을 호출하는 함수', '반환값이 없는 함수', '전역에 선언된 함수'], 0,
    '콜백은 인자로 전달돼 특정 시점(이벤트, 비동기 완료 등)에 실행되는 함수예요.',
    '5주차 · 콜백', { tag: '콜백' });

  mc(U, '즉시 실행 함수(IIFE)의 올바른 형태는?',
    ['(function () { ... })();', 'function () { ... }();', '(function () { ... });', 'function() => { ... }'], 0,
    '함수를 괄호로 감싸 표현식으로 만든 뒤 ()로 바로 호출해요.',
    '5주차 · IIFE', { tag: 'IIFE', x: { 1: '괄호 없이는 함수 선언문으로 해석돼 문법 오류가 나요.', 2: '호출 () 이 빠졌어요.' } });

  mc(U, '결과는?',
    ['120', '24', '5', '오류'], 0,
    '재귀: f(5) = 5 × f(4) = 5×4×3×2×1 = 120. 종료 조건(n<=1)이 꼭 필요해요.',
    '5주차 · 재귀', { cat: 'predict', tag: '재귀', code: 'function f(n) {\n  if (n <= 1) return 1;\n  return n * f(n - 1);\n}\nconsole.log(f(5));', run: 'function f(n){ if (n <= 1) return 1; return n * f(n - 1); } console.log(f(5));' });

  mc(U, 'typeof 연산자로 함수를 확인한 결과는?',
    ['"function"', '"object"', '"undefined"', '"method"'], 0,
    '함수는 객체지만 typeof는 "function"을 반환해요.',
    '5주차 · 함수는 값', { cat: 'predict', tag: 'typeof', code: 'function a() {}\nconsole.log(typeof a);', run: 'function a(){} console.log(typeof a);' });

  mc(U, 'map()의 결과는?',
    ['[2, 4, 6]', '[1, 2, 3]', '6', '[1, 4, 9]'], 0,
    'map은 각 요소에 콜백을 적용해 새 배열을 만들어요. 원본은 변하지 않아요.',
    '5주차 · 고차 함수', { cat: 'predict', tag: 'map', code: 'const r = [1, 2, 3].map(x => x * 2);\nconsole.log(r);', run: 'console.log(JSON.stringify([1,2,3].map(x=>x*2)).replace(/,/g,", "))' });

  mc(U, 'filter()의 결과는?',
    ['[2, 4]', '[1, 3]', '[1, 2, 3, 4]', '2'], 0,
    'filter는 콜백이 true를 반환한 요소만 모은 새 배열을 반환해요.',
    '5주차 · 고차 함수', { cat: 'predict', tag: 'filter', code: 'const r = [1, 2, 3, 4].filter(n => n % 2 === 0);\nconsole.log(r);', run: 'console.log(JSON.stringify([1,2,3,4].filter(n=>n%2===0)).replace(/,/g,", "))' });

  mc(U, 'reduce()의 결과는?',
    ['10', '[1, 2, 3, 4]', '4', '0'], 0,
    'reduce는 누적값을 만들어요. 초기값 0에서 1+2+3+4 = 10.',
    '5주차 · 고차 함수', { cat: 'predict', tag: 'reduce', code: 'const s = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0);\nconsole.log(s);', run: 'console.log([1,2,3,4].reduce((acc,n)=>acc+n,0))' });

  mc(U, '배열을 순회하면서 각 요소에 함수를 실행하지만 값을 반환하지 않는 메서드는?',
    ['forEach', 'map', 'filter', 'reduce'], 0,
    'forEach는 반환값이 undefined예요. 새 배열이 필요하면 map을 써요.',
    '5주차 · 고차 함수', { tag: 'forEach' });

  mc(U, '전역 함수 parseInt("42px")의 결과는?',
    ['42', 'NaN', '"42"', '오류'], 0,
    'parseInt는 앞에서부터 숫자로 읽을 수 있는 부분까지만 변환해요. 맨 앞부터 숫자가 아니면 NaN.',
    '5주차 · 내장 함수', { cat: 'predict', tag: 'parseInt', code: 'console.log(parseInt("42px"));', run: 'console.log(parseInt("42px"))' });

  mc(U, 'parseInt("abc")의 결과는?',
    ['NaN', '0', 'undefined', 'null'], 0,
    '숫자로 변환할 수 없으면 NaN이에요. isNaN()으로 검사해요.',
    '5주차 · 내장 함수', { cat: 'predict', tag: 'NaN', code: 'console.log(parseInt("abc"));', run: 'console.log(parseInt("abc"))' });

  mc(U, '지역 변수와 전역 변수의 이름이 같을 때 함수 안에서 사용되는 것은?',
    ['지역 변수', '전역 변수', '둘 다 사용', '오류'], 0,
    '스코프 체인은 안쪽부터 찾아요. 같은 이름이면 지역 변수가 전역 변수를 가려요.',
    '5주차 · 스코프', { cat: 'predict', tag: '스코프', code: 'let x = "전역";\nfunction f() {\n  let x = "지역";\n  return x;\n}\nconsole.log(f(), x);', x: { 1: '함수 안의 x는 지역 변수예요.' } });
})();
