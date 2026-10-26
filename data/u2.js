/* 단원 2 — CSS3 (Lec 3) */
(function () {
  var U = 'u2';

  mc(U, 'CSS를 HTML 문서에 적용하는 방법이 아닌 것은?',
    ['<css> 태그에 스타일 작성', '<style> 태그에 스타일 시트 작성', '태그의 style 속성에 작성', '별도 .css 파일을 <link> 또는 @import로 불러오기'], 0,
    '방법은 3가지예요: <style> 태그, style 속성, 외부 파일(<link>/@import). <css> 태그는 없습니다.',
    '3주차 · CSS 스타일 시트 만들기', { tag: '적용 방법' });

  mc(U, '<style> 태그는 어디에서만 사용할 수 있을까?',
    ['<head> 안', '<body> 안', '어디든 상관없다', '<html> 바깥'], 0,
    '<style>은 <head> 내에서만 쓰고, 여러 번 작성해도 스타일 시트들이 합쳐져 웹 페이지 전체에 적용돼요.',
    '3주차 · <style> 태그', { tag: '<style>' });

  fb(U, '스타일 시트 한 줄을 완성하세요. (body의 배경색을 mistyrose로)',
    '___ { ___ : mistyrose; }', ['body', 'background-color'], ['body', 'background-color', 'color', 'span', 'font-size'],
    '"셀렉터 { 프로퍼티 : 값; }" 구조예요. 셀렉터는 적용 대상, 프로퍼티는 스타일 속성 이름입니다.',
    '3주차 · CSS3 스타일 시트 구성', { tag: '구성' });

  mc(U, 'CSS3 스타일 시트의 대소문자 구분은?',
    ['구분하지 않는다', '셀렉터만 구분한다', '값만 구분한다', '모두 구분한다'], 0,
    'body{background-color:mistyrose;}와 BODY{Background-Color:Mistyrose;}는 같아요.',
    '3주차 · CSS3 스타일 시트 구성', { tag: '구성' });

  mc(U, 'CSS 주석의 올바른 문법은?',
    ['/* 주석 */', '// 주석', '<!-- 주석 -->', '# 주석'], 0,
    '/* ... */ 형태이고 여러 줄, 아무 위치에나 쓸 수 있어요.',
    '3주차 · CSS3 스타일 시트 구성', { tag: '주석', x: { 2: '<!-- -->는 HTML 주석이에요.' } });

  fb(U, '외부 스타일 시트 파일을 불러오는 두 방법을 완성하세요.',
    '<head>\n  <___ href="mystyle.css" type="text/css" rel="stylesheet">\n  <style>\n    @___ url(mystyle.css);\n  </style>\n</head>',
    ['link', 'import'], ['link', 'import', 'include', 'script', 'src'],
    '<link> 태그 또는 <style> 안에서 @import url(...)로 불러와요. 웹사이트 전체 모양의 일관성을 확보할 수 있어요.',
    '3주차 · 외부 스타일 시트', { tag: '외부 파일' });

  mc(U, '아래 코드에서 <em> 텍스트의 최종 색과 글자 크기는?',
    ['green, 25px', 'black, 25px', 'green, 기본 크기', 'blue, 25px'], 0,
    '자식은 부모 스타일을 상속받아요. <em>은 부모 <p>의 color:green을 상속하고, 자신의 font-size:25px을 가집니다.',
    '3주차 · 스타일 상속', { cat: 'predict', tag: '상속', code: '<p style="color:green">안녕하세요\n  <em style="font-size:25px">자식입니다</em>\n</p>' });

  or(U, '<p> 태그에 적용되는 스타일의 우선순위를 낮은 것 → 높은 것 순으로 눌러보세요.', null,
    ['브라우저 디폴트 스타일', '외부 스타일 시트 파일', '<style> 태그의 스타일', 'style 속성'], [],
    '여러 스타일이 합쳐지고(cascading), 같은 프로퍼티는 순위가 높은 쪽이 덮어써요(overriding). style 속성이 가장 높아요.',
    '3주차 · 스타일 합치기와 오버라이딩', { cat: 'quiz', tag: '우선순위' });

  mc(U, '두 번째 <p>("안녕하세요 교수님!")의 최종 스타일은?',
    ['배경 mistyrose, 글자색 blue, 크기 25px', '배경 없음, 글자색 black, 크기 16px', '배경 mistyrose, 글자색 blue, 크기 12px', '배경 없음, 글자색 blue, 크기 25px'], 0,
    'external.css의 background, <style>의 color:blue, 그리고 font-size는 style 속성(25px)이 <style>(12px)을 덮어써요.',
    '3주차 · 예제 4-8', { cat: 'predict', tag: '오버라이딩',
      code: '/* external.css */\np { background: mistyrose; }\n\n<style>\np { color: blue; font-size: 12px; }\n</style>\n\n<p>Hello, students!</p>\n<p style="font-size:25px">안녕하세요 교수님!</p>' });

  mc(U, 'id 셀렉터는 어떤 기호로 시작할까?',
    ['# (샵)', '. (점)', '* (별)', '@ (골뱅이)'], 0,
    '#id 셀렉터, .class 셀렉터예요. div#etc처럼 태그와 조합하면 <p id="etc">에는 적용되지 않아요.',
    '3주차 · id 셀렉터', { tag: '셀렉터', x: { 1: '점(.)은 class 셀렉터예요.' } });

  mc(U, '여러 태그를 하나의 그룹으로 묶어 같은 스타일을 한꺼번에 적용하기에 적합한 셀렉터는?',
    ['class 셀렉터', 'id 셀렉터', '태그 이름 셀렉터', '속성 셀렉터'], 0,
    'class는 태그 종류와 관계없이 쓸 수 있어요. id는 각 태그를 "유일하게" 구분하는 용도라 특정 한 태그에 적합해요.',
    '3주차 · id vs class', { tag: '셀렉터' });

  mc(U, '다음 CSS가 적용되는 대상은?',
    ['"학습 내용" 한 곳만', '"CSS" 한 곳만', '"학습 내용"과 "CSS" 둘 다', '아무 곳에도 적용되지 않는다'], 0,
    '자식 셀렉터(A > B)는 직계 자식만 선택해요. div > div > strong은 바깥 div의 자식 div 안의 strong, 즉 "학습 내용"이에요. "CSS"는 ul/li 안에 있어서 해당 안 돼요.',
    '3주차 · 셀렉터 조합하기', { cat: 'predict', tag: '자식 셀렉터',
      code: 'div > div > strong { background: yellow; }\n\n<div>\n  <div>2학기 <strong>학습 내용</strong></div>\n  <ul>\n    <li><strong>CSS</strong></li>\n  </ul>\n</div>' });

  mc(U, '"ul strong { color: dodgerblue; }"처럼 태그를 공백으로 나열한 셀렉터는?',
    ['자손 셀렉터', '자식 셀렉터', '전체 셀렉터', '가상 클래스 셀렉터'], 0,
    '공백은 자손(자식+후손 모두), ">"는 직계 자식만이에요.',
    '3주차 · 셀렉터 조합하기', { tag: '자손 셀렉터', x: { 1: '자식 셀렉터는 ">" 기호로 조합해요.' } });

  mc(U, '"* { color: green; }"에서 *는?',
    ['웹 페이지의 모든 태그에 적용하는 전체(universal) 셀렉터', '클래스 셀렉터', '속성 셀렉터', '자식 셀렉터'], 0,
    '와일드 문자(*)로 모든 태그에 적용해요.',
    '3주차 · 전체 셀렉터', { tag: '전체 셀렉터' });

  mc(U, 'type 속성값이 "text"인 <input> 태그에만 스타일을 적용하는 셀렉터는?',
    ['input[type=text]', 'input.type=text', 'input#text', 'input > text'], 0,
    '속성 셀렉터는 태그[속성=값] 형태예요.',
    '3주차 · 속성 셀렉터', { tag: '속성 셀렉터' });

  fb(U, '마우스가 올라온 <li>의 배경을 yellowgreen으로 바꾸는 셀렉터를 완성하세요.',
    'li___ { background : yellowgreen; }', [':hover'], [':hover', ':visited', ':first-letter', '.hover'],
    '가상 클래스 셀렉터예요. a:visited는 방문한 링크, li:hover는 마우스를 올렸을 때, h3:first-letter는 첫 글자에 적용돼요.',
    '3주차 · 가상 클래스 셀렉터', { tag: '가상 클래스' });

  mc(U, 'HTML5에서 CSS 값에 단위를 쓰지 않으면?',
    ['스타일 오류다 (예: font-size:3; → 오류, 3px → 정상)', '자동으로 px로 처리된다', '자동으로 em으로 처리된다', '경고만 뜨고 적용된다'], 0,
    '길이 값에는 px 등 단위를 붙여야 해요.',
    '3주차 · CSS3의 표준 단위', { tag: '단위' });

  mc(U, 'font 단축 프로퍼티의 값 순서는?',
    ['style → weight → size → family', 'family → size → weight → style', 'size → family → style → weight', 'weight → style → family → size'], 0,
    'font : italic bold 20px consolas, sans-serif; 처럼 font-style, font-weight, font-size, font-family 순서예요. size와 family 외에는 생략할 수 있어요.',
    '3주차 · 폰트', { tag: 'font' });

  mc(U, '"font-size : 1.6em;"의 의미는?',
    ['현재 폰트 크기의 1.6배', '16px', '화면 폭의 1.6%', '1.6픽셀'], 0,
    'em은 현재 폰트 대비 배수예요.',
    '3주차 · 폰트', { tag: 'font-size' });

  mc(U, 'font-weight의 숫자 값 범위와, bold에 해당하는 값은?',
    ['100~900, bold = 700', '1~10, bold = 7', '0~100, bold = 100', '100~900, bold = 900'], 0,
    '예제에서 900은 가장 굵게, 100은 가장 가늘게였어요.',
    '3주차 · 폰트', { tag: 'font-weight' });

  mc(U, '문단 첫 줄을 3글자만큼 들여쓰려면?',
    ['text-indent : 3em;', 'text-align : 3em;', 'margin-left : 3em;', 'text-decoration : 3em;'], 0,
    'text-indent가 들여쓰기, text-align은 정렬(justify=양쪽, center=중앙, right=오른쪽)이에요.',
    '3주차 · 텍스트 꾸미기', { tag: '텍스트', x: { 1: 'text-align은 정렬이에요.' } });

  mc(U, '링크(<a>)의 밑줄을 없애는 코드는?',
    ['text-decoration : none', 'text-align : none', 'border : none', 'font-style : none'], 0,
    'text-decoration 값: none(없음), line-through(중간 줄), overline(윗줄), underline(밑줄).',
    '3주차 · 텍스트 꾸미기', { tag: '텍스트' });

  or(U, '박스 모델을 안쪽 → 바깥쪽 순서로 눌러보세요.', null,
    ['콘텐츠', '패딩(padding)', '테두리(border)', '여백(margin)'], [],
    '콘텐츠 → 패딩(콘텐츠를 둘러싼 내부 여백) → 테두리 → 마진(테두리 바깥, 이웃 박스와의 거리)이에요.',
    '3주차 · CSS3의 박스 모델', { cat: 'quiz', tag: '박스 모델' });

  mc(U, '박스 모델에서 "테두리 바깥, 이웃 태그 박스와의 거리"는?',
    ['margin', 'padding', 'border', 'content'], 0,
    'padding은 콘텐츠와 테두리 사이(안쪽 여백), margin은 테두리 바깥 여백이에요.',
    '3주차 · 박스 모델의 구성', { tag: '박스 모델', x: { 1: 'padding은 테두리 "안쪽"이에요.' } });

  mc(U, '콘텐츠 150px, padding 20px, border 30px일 때, 테두리까지 포함한 박스의 가로 크기는? (margin 제외, 기본 content-box)',
    ['250px', '150px', '200px', '220px'], 0,
    '150 + (패딩 20×2) + (테두리 30×2) = 250px이에요. margin 40px까지 더하면 좌우 80px이 더 붙어서 330px.',
    '3주차 · 박스 크기', { cat: 'predict', tag: '박스 모델',
      code: 'div.box {\n  width : 150px;\n  height : 50px;\n  margin : 40px;\n  border-width : 30px;\n  padding : 20px;\n}', x: { 1: '150px은 콘텐츠 폭만이에요.' } });

  fb(U, '3픽셀짜리 파란 점선 테두리를 단축 프로퍼티로 완성하세요.',
    'p { border : 3px ___ blue; }', ['dotted'], ['dotted', 'dashed', 'double', 'solid', 'hidden'],
    '"border : 두께 스타일 색" 순서예요. dotted는 점선, dashed는 파선(긴 점선), double은 이중선이에요. none과 hidden은 둘 다 두께 0과 같아요.',
    '3주차 · 박스 모델의 색, 테두리, 단축프로퍼티', { tag: 'border' });

  mc(U, '"border-radius : 0px 20px 40px;"일 때 왼쪽 아래 모서리의 반지름은?',
    ['20px', '0px', '40px', '60px'], 0,
    '값은 ①왼쪽위 ②오른쪽위 ③오른쪽아래 ④왼쪽아래 시계방향으로 적용돼요. ④가 생략되면 ②와 같아서 20px이에요. (③이 생략되면 ①과 같아요.)',
    '3주차 · border-radius', { cat: 'predict', tag: 'border-radius', code: 'div {\n  border-radius: 0px 20px 40px;\n}' });

  mc(U, 'border-image에서 에지(edge) 이미지를 테두리 길이만큼 "늘여서" 배치하는 방식은?',
    ['stretch', 'round', 'repeat', 'cover'], 0,
    'round는 테두리 길이에 맞게 에지 이미지를 반복 배치(크기 조절), repeat은 크기 조절 없이 반복 배치, stretch는 늘여 배치해요.',
    '3주차 · border-image', { tag: 'border-image' });

  mc(U, '배경 이미지를 위에서 아래로(세로로) 반복해서 출력하는 설정은?',
    ['background-repeat : repeat-y', 'background-repeat : repeat-x', 'background-position : repeat-y', 'background-size : repeat-y'], 0,
    'repeat-y는 y축(세로) 반복, repeat-x는 가로 반복이에요. 위치는 background-position(예: center center).',
    '3주차 · 배경 다루기', { tag: '배경', x: { 1: 'repeat-x는 가로 방향이에요.' } });

  mc(U, '"text-shadow : 3px 3px 5px red;"에서 5px의 의미는?',
    ['blur-radius (흐림 반경)', '수평 그림자 거리', '수직 그림자 거리', '그림자 두께'], 0,
    '값 순서: h-shadow(수평) v-shadow(수직) blur-radius(흐림) color예요.',
    '3주차 · 텍스트 그림자', { tag: 'text-shadow' });

  mc(U, '마우스를 올렸을 때 손가락(포인터) 모양 커서가 되게 하는 코드는?',
    ['cursor : pointer', 'cursor : help', 'cursor : crosshair', 'cursor : progress'], 0,
    'help 도움말, crosshair 십자, progress 프로그램 실행 중 모양, n-resize 상하 크기 조절이에요.',
    '3주차 · 마우스 커서 제어', { tag: 'cursor' });
})();
