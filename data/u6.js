/* 단원 6 — 클래스 (Ch 9: 9-1 클래스의 기본 기능 / 9-2 클래스의 고급 기능) — 슬라이드 범위만 */
(function () {
  var U = 'u6';

  // ── 9-1 기본 ────────────────────────────────
  mc(U, '객체 지향 패러다임이란?',
    ['객체를 만들고 객체들의 상호작용을 중심으로 개발하는 방법론', '함수만으로 프로그램을 만드는 방법론', '코드를 한 줄씩 순서대로만 실행하는 방법', '서버와 통신하는 방법'], 0,
    '객체 지향 프로그래밍 언어들은 클래스(class)라는 문법으로 객체(object)를 효율적이고 안전하게 만들어요.',
    '8주차 · 객체 지향 패러다임', { tag: '객체 지향' });

  mc(U, '추상화(abstraction)란?',
    ['복잡한 자료·시스템에서 핵심적인 개념과 기능만 간추려 객체를 표현하는 것', '객체를 삭제하는 것', '함수를 다른 파일로 옮기는 것', '변수 이름을 짧게 줄이는 것'], 0,
    '프로그램에 필요한 요소만 사용해서 객체를 표현하는 것이에요. 예: 학생 성적 관리 프로그램에서 학생의 공통사항을 추출하기.',
    '8주차 · 추상화', { tag: '추상화' });

  mc(U, '클래스와 인스턴스의 관계를 붕어빵에 비유하면?',
    ['클래스 = 붕어빵 틀, 인스턴스 = 실체화된 붕어빵', '클래스 = 붕어빵, 인스턴스 = 틀', '둘 다 틀이다', '둘 다 붕어빵이다'], 0,
    '인스턴스는 클래스를 기반으로 만든 객체예요. new 클래스이름()으로 만들어요.',
    '8주차 · 클래스 선언', { tag: '인스턴스' });

  fb(U, '클래스를 선언하고 인스턴스를 만드세요.',
    '___ Student {\n}\nconst student = ___ Student()', ['class', 'new'], ['class', 'new', 'function', 'this', 'extends'],
    'class 클래스이름 { } 으로 선언하고 new로 인스턴스를 만들어요. 클래스 이름은 첫 글자를 대문자로 써요.',
    '8주차 · 소스 9-1-6', { tag: '클래스 선언', exec: 'class Student {} const student = new Student(); console.log(typeof student)' });

  mc(U, '클래스 이름을 짓는 관례는?',
    ['첫 글자를 대문자로', '모두 소문자로', '숫자로 시작', '밑줄로 시작'], 0,
    'class Student { }처럼 첫 글자를 대문자로 써요.',
    '8주차 · 클래스 선언', { tag: '클래스 선언' });

  mc(U, '생성자(constructor)가 호출되는 때는?',
    ['클래스를 기반으로 인스턴스를 생성할 때 처음으로', '메소드를 호출할 때마다', '프로그램이 끝날 때', '클래스를 선언할 때'], 0,
    '생성자에서는 속성을 추가하는 등 객체의 초기화 처리를 해요.',
    '8주차 · 생성자', { tag: 'constructor' });

  fb(U, '생성자에서 속성을 초기화하세요.',
    'class Student {\n  ___ (이름, 국어) {\n    ___.이름 = 이름\n    ___.국어 = 국어\n  }\n}\nconst s = new Student("구름", 87)\nconsole.log(s.이름)', ['constructor', 'this', 'this'], ['constructor', 'this', 'self', 'init', 'super'],
    'constructor(매개변수) 안에서 this.속성 = 값 으로 속성을 추가해요.',
    '8주차 · 소스 9-1-7', { tag: 'constructor', exec: 'class Student { constructor(이름, 국어){ this.이름 = 이름; this.국어 = 국어 } } const s = new Student("구름", 87); console.log(s.이름)' });

  mc(U, 'new Student("구름", 87, 98, 88, 90)을 만든 뒤 console.log(s.이름)의 결과는?',
    ['구름', '이름', 'undefined', '오류'], 0,
    '생성자의 첫 번째 인수가 this.이름에 저장돼요.',
    '8주차 · 소스 9-1-7', { cat: 'predict', tag: 'constructor', code: 'class Student {\n  constructor (이름, 국어, 영어, 수학, 과학) {\n    this.이름 = 이름\n    this.국어 = 국어\n    this.영어 = 영어\n    this.수학 = 수학\n    this.과학 = 과학\n  }\n}\nconst s = new Student("구름", 87, 98, 88, 90)\nconsole.log(s.이름)', run: 'class Student { constructor(이름, 국어, 영어, 수학, 과학){ this.이름=이름; this.국어=국어; this.영어=영어; this.수학=수학; this.과학=과학 } } const s = new Student("구름",87,98,88,90); console.log(s.이름)' });

  mc(U, '구름(국어 87, 영어 98, 수학 88, 과학 90)의 getSum()과 getAverage() 결과는?',
    ['363, 90.75', '363, 91', '90.75, 363', '4, 363'], 0,
    '총합은 87 + 98 + 88 + 90 = 363, 평균은 getSum() / 4 = 90.75예요.',
    '8주차 · 소스 9-1-8', { cat: 'predict', tag: '메소드', code: 'class Student {\n  constructor (이름, 국어, 영어, 수학, 과학) { /* 속성 초기화 */ }\n  getSum () {\n    return this.국어 + this.영어 + this.수학 + this.과학\n  }\n  getAverage () {\n    return this.getSum() / 4\n  }\n}\n// new Student("구름", 87, 98, 88, 90)\nconsole.log(s.getSum(), s.getAverage())', run: 'console.log([87+98+88+90, (87+98+88+90)/4].join(", "))' });

  fb(U, '평균 메소드가 합계 메소드를 호출하도록 채우세요.',
    'getAverage () {\n  return ___.getSum() / 4\n}', ['this'], ['this', 'self', 'Student', 'super', 'that'],
    '같은 객체의 다른 메소드는 this.메소드()로 호출해요.',
    '8주차 · 소스 9-1-8', { tag: 'this' });

  mc(U, '객체를 문자열로 바꿀 때 호출되는 메소드 이름은?',
    ['toString', 'toText', 'stringify', 'print'], 0,
    '클래스에 toString() 메소드를 정의해 두면 output += s.toString()처럼 출력 문자열을 만들 수 있어요.',
    '8주차 · toString()', { tag: 'toString' });

  mc(U, '학생 성적 처리 방법을 발전 순서대로 나열한 것은?',
    ['객체+배열 → 객체를 처리하는 함수 → 객체에 메소드 추가 → 객체 생성 함수 → 클래스', '클래스 → 객체 생성 함수 → 함수 → 배열', '함수 → 클래스 → 배열 → 객체', '배열 → 클래스 → 함수 → 메소드'], 0,
    '슬라이드는 같은 형태의 객체를 만드는 불편함을 단계별로 해결하며 클래스에 도달해요.',
    '8주차 · 같은 형태의 객체 만들기', { tag: '클래스 필요성' });

  mc(U, 'getSumOf(student)처럼 객체를 처리하는 "함수" 방식과, 클래스의 메소드 방식의 차이는?',
    ['메소드는 객체 안에 기능을 담고 this로 자기 속성에 접근한다', '둘은 완전히 같다', '함수 방식이 this를 쓴다', '메소드는 호출할 수 없다'], 0,
    '함수 방식은 student.국어처럼 매개변수로 객체를 받아 처리하고, 메소드 방식은 s.getSum()으로 객체가 자기 기능을 가져요.',
    '8주차 · 소스 9-1-3, 9-1-4', { tag: '함수 vs 메소드' });

  // ── 9-2 상속 ────────────────────────────────
  mc(U, 'new Rectangle(10, 20)의 getPerimeter()와 getArea() 결과는?',
    ['60, 200', '30, 200', '60, 30', '200, 60'], 0,
    '둘레 = 2 × (10 + 20) = 60, 넓이 = 10 × 20 = 200이에요.',
    '8주차 · 소스 9-2-1', { cat: 'predict', tag: 'Rectangle', code: 'class Rectangle {\n  constructor (width, height) {\n    this.width = width\n    this.height = height\n  }\n  getPerimeter () { return 2 * (this.width + this.height) }\n  getArea () { return this.width * this.height }\n}\nconst r = new Rectangle(10, 20)\nconsole.log(r.getPerimeter(), r.getArea())', run: 'class Rectangle { constructor(width,height){ this.width=width; this.height=height } getPerimeter(){ return 2*(this.width+this.height) } getArea(){ return this.width*this.height } } const r=new Rectangle(10,20); console.log([r.getPerimeter(), r.getArea()].join(", "))' });

  mc(U, '상속(inheritance)의 장점은?',
    ['클래스 선언 코드를 중복해서 작성하지 않아 코드 생산 효율이 올라간다', '프로그램 실행이 빨라진다', '변수가 필요 없어진다', '오류가 절대 나지 않는다'], 0,
    'class 자식 extends 부모 { } 형태로 부모의 속성과 메소드를 그대로 물려받아요.',
    '8주차 · 상속', { tag: '상속' });

  fb(U, 'Square가 Rectangle을 상속받도록 완성하세요.',
    'class Square ___ Rectangle {\n  constructor (length) {\n    ___(length, length)\n  }\n}', ['extends', 'super'], ['extends', 'super', 'inherits', 'this', 'implements'],
    'extends로 상속하고, 자식 생성자에서 super(...)로 부모의 생성자 함수를 호출해요.',
    '8주차 · 소스 9-2-3', { tag: 'extends/super', exec: 'class Rectangle { constructor(w,h){ this.width=w; this.height=h } getArea(){ return this.width*this.height } } class Square extends Rectangle { constructor(length){ super(length, length) } } console.log(new Square(10).getArea())' });

  mc(U, 'class Square extends Rectangle 에서 Square에 getArea()를 선언하지 않았는데 new Square(10).getArea()를 호출하면?',
    ['부모에게 상속받았으므로 정상 호출되어 100이 나온다', '오류가 난다', 'undefined가 나온다', '10이 나온다'], 0,
    'super(length, length)로 width, height가 모두 10이 되므로 넓이는 10 × 10 = 100이에요.',
    '8주차 · 소스 9-2-3', { cat: 'predict', tag: '상속', code: 'class Rectangle {\n  constructor (width, height) { this.width = width; this.height = height }\n  getArea () { return this.width * this.height }\n}\nclass Square extends Rectangle {\n  constructor (length) {\n    super(length, length)\n  }\n}\nconsole.log(new Square(10).getArea())' });

  mc(U, 'super(length, length)가 하는 일은?',
    ['부모 클래스의 생성자 함수를 호출한다', '자식 클래스를 삭제한다', '메소드를 복사한다', '인스턴스를 두 번 만든다'], 0,
    'Square 자식 클래스가 부모(Rectangle)의 생성자를 호출해 width와 height를 초기화해요.',
    '8주차 · 상속', { tag: 'super' });

  // ── private · throw · 게터/세터 ──────────────
  mc(U, '클래스의 private 속성/메소드를 만드는 문법은?',
    ['이름 앞에 #을 붙인다', '이름 앞에 _를 붙인다', 'private 키워드를 쓴다', '이름 뒤에 !를 붙인다'], 0,
    '#length처럼 속성과 메소드 이름 앞에 #을 붙여요. 클래스 사용자가 의도하지 않은 방향으로 쓰는 것을 막아 안정성을 확보해요.',
    '8주차 · private 속성과 메소드', { tag: 'private' });

  mc(U, 'private 속성을 쓰려면 클래스 안에서 꼭 해야 하는 것은?',
    ['사용하기 전에 #length처럼 미리 선언한다', '생성자 밖에서만 쓴다', 'public 속성도 같이 만든다', 'throw를 꼭 쓴다'], 0,
    '"이 위치에 해당 속성을 private 속성으로 사용하겠다"고 클래스 본문에서 미리 선언해야 해요.',
    '8주차 · 소스 9-2-6', { tag: 'private' });

  fb(U, 'private 속성을 선언하고 사용하세요.',
    'class Square {\n  ___length\n  constructor (length) {\n    this.___length = length\n  }\n}', ['#', '#'], ['#', '_', '$', '@', '&'],
    'private 속성은 #length로 선언하고, 사용할 때도 this.#length처럼 #을 붙여요.',
    '8주차 · 소스 9-2-6', { tag: 'private' });

  mc(U, 'private #length를 쓴 Square에서 square.length = -10 을 실행하고 getPerimeter()를 부르면?',
    ['40 (바깥의 length는 #length와 다른 새 속성이라 영향이 없다)', '-40', '오류', 'NaN'], 0,
    'square.length는 #length와 별개의 일반 속성이에요. 클래스 내부의 #length는 그대로 10이라 4 × 10 = 40이에요.',
    '8주차 · 소스 9-2-7', { cat: 'predict', tag: 'private', code: 'class Square {\n  #length\n  constructor (length) { this.#length = length }\n  getPerimeter () { return 4 * this.#length }\n}\nconst square = new Square(10)\nsquare.length = -10\nconsole.log(square.getPerimeter())' });

  mc(U, 'square.#length = -10 처럼 클래스 밖에서 private 속성에 접근하면?',
    ['오류가 발생한다', '값이 바뀐다', '무시된다', 'undefined가 된다'], 0,
    '클래스 바깥에서 #length를 사용하면 오류가 나요. private 속성은 클래스 내부에서만 접근할 수 있어요.',
    '8주차 · 소스 9-2-8', { tag: 'private' });

  mc(U, 'throw 키워드의 역할은?',
    ['강제로 오류(예외)를 발생시킨다', '값을 반환한다', '반복문을 빠져나간다', '변수를 삭제한다'], 0,
    '예: 길이가 0 이하면 throw "길이는 0보다 커야 합니다."로 클래스 사용자에게 불가함을 알려요.',
    '8주차 · 소스 9-2-5', { tag: 'throw' });

  mc(U, 'throw로 예외를 발생시킨 뒤 같은 블록의 다음 줄 코드는?',
    ['실행되지 않는다 (오류에서 중단된다)', '그대로 실행된다', '두 번 실행된다', '무시되고 건너뛰어 마지막에 실행된다'], 0,
    'new Square(-10)에서 throw가 실행되면 오류가 발생해 이후 console.log 줄은 실행되지 않아요.',
    '8주차 · 소스 9-2-5', { tag: 'throw' });

  mc(U, '게터(getter)와 세터(setter)를 만드는 키워드는?',
    ['get / set', 'getter / setter', 'read / write', 'in / out'], 0,
    'get length() { }, set length(length) { }처럼 선언하고, 속성을 사용하는 형태로 쓰면 자동으로 호출돼요.',
    '8주차 · 게터와 세터', { tag: 'get/set' });

  fb(U, '게터와 세터를 완성하세요.',
    'class Square {\n  #length\n  ___ length () {\n    return this.#length\n  }\n  ___ length (length) {\n    this.#length = length\n  }\n}', ['get', 'set'], ['get', 'set', 'getter', 'setter', 'static'],
    '읽을 때는 get, 값을 지정할 때는 set 메소드가 호출돼요.',
    '8주차 · 소스 9-2-10', { tag: 'get/set' });

  mc(U, 'new Square(10)에서 constructor 안의 this.length = length는 어느 메소드를 호출할까?',
    ['set length (length)', 'get length ()', 'constructor 자신', '아무것도 호출하지 않는다'], 0,
    'this.length에 값을 지정하면 set length(length) 메소드 부분이 호출돼요. 그래서 세터 안의 검사(throw)가 생성할 때도 동작해요.',
    '8주차 · 소스 9-2-10', { tag: 'get/set' });

  mc(U, '게터 get perimeter()를 호출하는 올바른 코드는? (squareA.perimeter가 둘레를 반환)',
    ['squareA.perimeter', 'squareA.perimeter()', 'squareA.get(perimeter)', 'squareA->perimeter'], 0,
    '게터는 메소드지만 속성을 사용하는 형태(괄호 없이)로 사용하면 자동으로 호출돼요.',
    '8주차 · 소스 9-2-10', { tag: 'get/set', x: { 1: '게터는 괄호를 붙이지 않아요. 붙이면 속성 값(숫자)을 함수처럼 호출해서 오류가 나요.' } });

  mc(U, 'const squareA = new Square(10) 의 한 변의 길이, 둘레, 넓이 출력은? (게터 length, perimeter, area)',
    ['10, 40, 100', '10, 100, 40', '40, 10, 100', '10, 10, 10'], 0,
    '둘레 = #length × 4 = 40, 넓이 = #length × #length = 100이에요.',
    '8주차 · 소스 9-2-10', { cat: 'predict', tag: 'get/set', code: 'const squareA = new Square(10)\nconsole.log(squareA.length)\nconsole.log(squareA.perimeter)\nconsole.log(squareA.area)', run: 'class Square { #length; constructor(length){ this.length = length } get length(){ return this.#length } get perimeter(){ return this.#length*4 } get area(){ return this.#length*this.#length } set length(length){ if (length <= 0) { throw "x" } this.#length = length } } const a = new Square(10); console.log(a.length + ", " + a.perimeter + ", " + a.area)' });
  // ── static · 오버라이드 ─────────────────────
  mc(U, 'static 메소드(예: static perimeterOf(length))는 어떻게 호출할까?',
    ['클래스 이름으로 호출한다: Square.perimeterOf(20)', '인스턴스로 호출한다: new Square(20).perimeterOf()', 'this.perimeterOf()', 'static이 없어도 똑같이 호출한다'], 0,
    'static 속성·메소드는 인스턴스가 아니라 클래스 자체에 속해요. 클래스 이름 뒤에 .을 붙여 사용해요.',
    '8주차 · 소스 9-2-11', { tag: 'static' });

  mc(U, 'Square 인스턴스를 세 개 만들었을 때 Square.counter(static)의 값은? (생성자에서 Square.#counter += 1)',
    ['3', '0', '1', 'undefined'], 0,
    'static 값은 클래스에 하나만 있고 모든 인스턴스가 공유해요. 생성할 때마다 1씩 늘어 3이 돼요.',
    '8주차 · 소스 9-2-11', { cat: 'predict', tag: 'static', code: 'class Square {\n  static #counter = 0\n  static get counter () { return Square.#counter }\n  constructor () { Square.#counter += 1 }\n}\nnew Square(); new Square(); new Square()\nconsole.log(Square.counter)', run: 'class Square { static #counter = 0; static get counter () { return Square.#counter } constructor () { Square.#counter += 1 } } new Square(); new Square(); new Square(); console.log(Square.counter)' });

  fb(U, '클래스 이름으로 바로 호출할 수 있는 메소드를 만드세요.',
    'class Square {\n  ___ areaOf (length) {\n    return length * length\n  }\n}\nconsole.log(Square.areaOf(30))', ['static'], ['static', 'get', 'set', 'private', 'class'],
    'static 키워드를 붙이면 클래스 이름으로 호출하는 메소드가 돼요. 결과는 900이에요.',
    '8주차 · 소스 9-2-11', { tag: 'static', exec: 'class Square { static areaOf (length) { return length * length } } console.log(Square.areaOf(30))' });

  mc(U, '오버라이드(override)란?',
    ['자식 클래스에서 부모 클래스에 있던 메소드를 같은 이름으로 다시 선언하는 것', '부모 클래스를 삭제하는 것', '클래스를 두 번 선언하는 것', '변수를 덮어쓰는 것'], 0,
    'Child가 a()를 다시 선언하면 new Child().call() 안의 this.a()는 자식의 a()를 실행해요.',
    '8주차 · 소스 9-2-13', { tag: '오버라이드' });

  mc(U, 'Child 클래스가 LifeCycle을 상속받고 a()를 오버라이드했을 때 new Child().call()의 출력 순서는? (call은 a, b, c를 순서대로 호출)',
    ['자식의 a() → 부모의 b() → 부모의 c()', '부모의 a() → b() → c()', '자식의 a()만', '오류'], 0,
    'a()만 오버라이드되었으므로 a는 자식 것, b와 c는 부모 것이 실행돼요.',
    '8주차 · 소스 9-2-13', { cat: 'predict', tag: '오버라이드', code: 'class LifeCycle {\n  call () { this.a(); this.b(); this.c() }\n  a () { console.log("부모 a") }\n  b () { console.log("부모 b") }\n  c () { console.log("부모 c") }\n}\nclass Child extends LifeCycle {\n  a () { console.log("자식 a") }\n}\nnew Child().call()' });

  fb(U, '오버라이드한 메소드 안에서 부모의 a()도 실행하세요.',
    'class Child extends LifeCycle {\n  a () {\n    ___.a()\n    console.log("자식의 a() 메소드입니다.")\n  }\n}', ['super'], ['super', 'this', 'parent', 'base', 'LifeCycle'],
    'super.메소드() 형태로 부모의 메소드를 실행해요. 부모 a() 출력 후 자식 문장이 출력돼요.',
    '8주차 · 소스 9-2-14', { tag: 'super' });

  mc(U, 'toString() 메소드를 오버라이드하면 달라지는 것은?',
    ['객체를 문자열로 바꿀 때(alert(pet), pet + "") 나오는 형태', '객체의 생성 방식', '객체의 상속 관계', '메소드 호출 횟수'], 0,
    '자바스크립트는 객체를 문자열로 만들 때 내부적으로 toString()을 호출해요.',
    '8주차 · 소스 9-2-15', { tag: 'toString' });
})();
