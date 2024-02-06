// 41_function

/*

사용자 정의 함수
    - 매개변수 (매개값)
    - 리턴(return) : 값을 되돌려 주거나 / 함수 종료 기능
    - 스코프(scope, 영역) - 변수, 함수

문(statement)
    - 표현식(expression) : 결과값이 있는 문장
    - 함수문, 제어문(if, for..) : 결과값이 없는 문장


함수 정의

    선언적 함수 (호이스팅) (선언 전/후 호출) (이름이 있는 함수) (페이지가 function을 보면 최우선순위로 메모리에 넣음)
    (호이스팅: 자바스크립트 해석기가 변수, 함수의 메모리 공간을 선언 전에 미리 할당)
        function 함수 ([para][,매개변수][,...]) {
            코드;
            return [표현식];
                ex) return a * b;
        }

    익명 함수 (우선순위 높음, 화살표 함수로 변경 가능) (선언 후 호출) (이름이 없는 함수) (함수 먼저 정의하고 호출해야 함) (익명 함수의 경우 함수 정의 전에 함수 호출문이 있어도 적용x)
        var 함수명 = function () {
            코드;
        }

    화살표 함수
        var 함수명 = () => {
            코드;
        }

        매개변수 1개일 경우 () 생략 가능 (매개변수가 없으면 () 생략 불가능)
            var 함수명 = 매개변수 => {
                코드;
            }

        명령문이 1개일 경우 {} 생략 가능
            var 함수명 = () => 1줄코드;
            var 함수명 = 매개변수 => 1줄코드;

함수 호출

    함수([매개값]);
    참조변수();

    재귀호출
        function 함수(매개변수, ...) {
            함수();
            return 값; <- 자기 자신을 계속 부르는 걸 빠져나옴
        }



innerHTML : <br>로 줄바꿈 가능
innerText : <br> 없이 줄바꿈 가능 (textarea, whitespace-pre 와 비슷)

return; : 함수 종료, 값을 돌려주지않음.

(return에 대해 추가적인 학습 필요)



window.addEventListener('DOMContentLoaded', loadFn);

function loadFn() {
    돔을 읽기전에 먼저 실행할 코드;
}


*/

////////////////////////////////////////////////////////////////////////////////

// 43_return, 43-1_이미지갤러리, 44_재귀함수호출

/*
    return : 함수 호출문에 결과값 반환 후 함수 종료
        return 데이터(값);

    재귀호출(자기호출) 함수 -> 무한 루프
        function 함수() {
            함수();
        }

    즉시호출 함수 -> 정의되자마자 즉시 실행되는 함수, 한번의 실행 이후 사라짐
        (function 함수() {
            코드;
        })();

    <button onclick="함수()">이전</button>
    <button onclick="함수()">다음</button>

*/

////////////////////////////////////////////////////////////////////////////////

// 45_scope

/*

    스코프(scope) : 변수 or 함수의 유효 범위

        전역 변수/함수
            - 모든 영역에서 사용할 수 있는 변수/함수

        지역 변수/함수
            - 스코프 영역에서 선언한 변수/함수
            - 스코프 영역에서만 사용할 수 있다.
            - 지역 변수는 함수 밖에서 사용할 수 없다.



        - 함수 내에서 전역 변수 값 변경 가능
        - 지역 변수는 함수 밖에서 변경 불가능
        - 전역 변수와 같은 이름을 지역 변수에서 재선언하면 전역 변수와 관계 없는 별개의 변수로 사용된다.
        - 함수 내에서 선언 없이 할당한 변수는 전역 변수와 같이 사용된다.
        - 제어문에서 선언한 변수는 전역 변수와 같이 사용된다.

        var
            - 함수 영역 변수 -> 함수(){}
            - 사용 후 아래에서 선언할 수 있다. (호이스팅 가능)
            - 재선언 가능 (먼저 선언한 변수는 무시됨)

        let
            - 블록 영역 변수 -> 함수(){} for(){}
            - 변하는 값 저장
            - 선언 후 사용 (호이스팅 불가)
            - 재선언 불가

        const
            - 블록 영역 변수 -> 함수(){} for(){}
            - 고정 값(상수) 저장
            - 선언과 동시에 할당 (호이스팅 불가)
            - 재선언, 재할당 불가


        var : 함수 안/밖, 호이스팅(o), 재선언(o), 재할당(o), 변수/상수 값
        let : 블록 안/밖, 호이스팅(x), 재선언(x), 재할당(o), 변수 값
        const : 블록 안/밖, 호이스팅(x), 재선언(x), 재할당(x), 상수 값

        전역변수에서 선언한 변수, 지역변수1에서 선언한 변수, 지역변수2에서 선언한 변수 서로 별개임.

        블록이란? - 중괄호 {}

        undefined : 변수에 값이 등록되기 전 기본 값, 값 등록 안되어있다,
                    변수 선언 후 할당값이 없을 때
*/

////////////////////////////////////////////////////////////////////////////////

// 51_object(객체)

/*
        자바스크립트는 객체 기반 언어

        객체
            - 객체는 속성과 메서드(function을 가진 속성)을 가지고 있다.
            - 객체를 저장한 변수를 인스턴스(참조변수)라고 부른다.
            - 인스턴스를 사용하여 객체의 속성과 메서드를 사용한다.

        객체의 값
            - 숫자, 문자열, 불, 객체, 함수
            - 속성에 띄어쓰기가 있으면 반드시 '' , 없으면 생략 가능



        const 참조변수 = {
            '속 성': '값 값',
            속성: 값,
            '속성 (메서드)': function(){},
            속성: {}
            ...
        };

        new 키워드 방식으로 생성 (코드 복잡, 느려짐)
            const 참조변수 = new Object();
            const 참조변수 = new Array();
            const 참조변수 = new Date();
            const 참조변수 = new String();

            const 객체 = new Object(){
                속성: 값;
                속성: {};
                속성: function(){}
                ...
            }

    객체 값 가져오기
        - 객체는 이름을 이용

        객체['속 성']
        객체.속성 :             객체의 속성 값을 가져온다.
        객체.속성 = 값; :       객체의 속성 값을 바꾼다.
        객체.메서드() :         객체의 메서드를 실행

    객체 값 수정하기
            - 객체.속성 = 값;

    예시?
        요소['length']
        요소.length
        document.querySelector();
        요소.classList.add('on')
        객체['lastname'] :       []안에 속성은 문자열로 표기
        객체['last name'] :      속성의 이름에 공백이 있을 경우 객체['속 성']
        객체.lastname
        for문() {
            obj['속성' + i] (o)
            obj.속성 + i (x)
        }

    객체의 종류
        1. 내장 객체(Built-in Object)
            - 자바스크립트 엔진에 내장되어 있는 객체
            - Date, Array, Math, String ...

        2. 브라우저 객체 모델(Browser Object Model)
            - 브라우저에 계층 구조로 내장되어 있는 객체
            - window, screen, location, history, navigator ...
            - 문서 객체 모델(Document Object Model) : HTML 문서 구조

    내장객체 (51_object3)
        - 참조변수 = new Object([속성, 값]);
            - 현재 시간과 날짜
                - 참조변수 = new Date();
                - 참조변수 = new Date(연, 월, 일);
                    - getter(게터) : 가져오기
                        - 변수 = 객체.메서드();
                            - 날짜 정보 가져오기
                                - getFullYear() : 년
                                - getMonth() : 월( 0 : 1월  /  11 : 12월)
                                - getDate(): 일
                                - getDay(): 요일 ( 0 : 일 / 6 : 토)
                                - getHours() : 시간
                                - getMinutes() : 분
                                - getSeconds() : 초
                                - getMilliseconds() : 밀리초
                                - getTime() : 1970년 1월 1일부터 경과된 시간을 밀리초로 변환
                                - toGMTString() : GMT 표준 표기 방식으로 문자열 데이터로 반환
                                - toLocaleString() : 운영 시스템 표기 방식으로 문자열 데이터로 반환
                                - toLocaleDateString() : 날짜 객체의 날짜를 문자열로 반환
                                - toLocaleTimeString() : 날짜 객체의 시간부분을 문자열로 반환


                    - setter(세터) : 지정하기
                        - 객체.메서드(값);
                            - 날짜 정보 수정
                                - setFullYear()
                                - setMonth()
                                - setDate()
                                - setHour()
                                - setMinutes()
                                - setSeconds()
                                - setMilliseconds()
                                - setTime()

                    - 남은 일 수 (밀리초) = 특정 날짜 밀리초 - 현재 날짜 밀리초
                    - 1일 = 24시간 = 24 * 60분 = 24 * 60 * 60초 = 24 * 60 * 60 * 1000 밀리초

            - Math
                - Math.abS(숫자) : 절대값(음수 에서 -> 양수 로) 반환
                - Math.max(숫자1, 숫자2, 숫자3...) : 가장 큰 값 반환
                - Math.min(숫자1, 숫자2, 숫자3...) : 가장 작은 값 반환
                - Math.pow(숫자, 제곱값) : 거듭제곱값 반환
                - Math.random() : 0~1 사이 난수 반환 (0:포함 1:제외)
                                예) let random = Math.random()
                                    random (0) ~ random * 6 + 1 (6)
                - Math.round(숫자) : 소수점 첫째 자리 반올림 정수 반환
                - Math.ceil(숫자) : 소수점 첫째 자리 올림 정수 반환
                - Math.floor(숫자) : 소수점 첫째 자리 내림 정수 반환
                - Math.sqrt(숫자) : 제곱근 값 반환
                - Math.PI : 원주율(3.141592..) 상수 반환

            - String
                - var 참조변수 = new String('문자열');
                - var 변수 = '문자열';

                예) 문자열객체or변수.CharAt(7)

                - CharAt(index) : index 번호에 해당하는 문자열 반환

                - indexOf('찾을문자') : 왼쪽부터 문자열 찾아 최초 일치하는
                                        index번호 반환 (없으면 -1)

                - indexOf('찾을문자', 인덱스) : 인덱스 번호부터 왼쪽부터 문자열
                                                찾아 최초 일치하는 index번호 반환

                - lastIndexOf('찾을문자') : 오른쪽부터 문자열 찾아 최초 일치하는
                                            index번호 반환 (없으면 -1)

                - lastIndexOf('찾을문자', 인덱스) : 인덱스 번호부터 오른쪽부터
                                                    왼쪽으로 문자열 찾아 최초 일치하는 index번호 반환

                - match('찾을문자') : 왼쪽부터 문자열을 찾아 최초 일치하는
                                        문자열 반환

                - search('찾을문자') : 왼쪽부터 문자열 찾아 최초 일치하는
                                        index 번호 반환 (없으면 -1)
                                        (정규식 사용 가능)

                - substr(index, 개수) : 인덱스 번호부터 개수만큼 문자열 반환

                - substring(index1, index2) : index1부터 index2 이전 구간의
                                                문자열 반환
                                                (음수: 인덱스 0)

                - replace('바꿀문자', '새문자') : 왼쪽부터 바꿀 문자열 찾아
                                                일치하는 문자열을 새 문자열로 치환

                - toLowerCase(): 소문자로 변환

                - toUpperCase(): 대문자로 변환

                - length : 문자열의 문자 총 개수 반환

                - slice(a개수, b) : 왼쪽에서 a개의 문자를 자르고,
                                    b번째 이후에 문자열을 자른 후 남은 문자열 반환
                                    (b가 -n 인 경우 뒤에서부터 n 글자 지칭)

                - split('문자') : 지정한 문자를 기준으로 문자열 데이터를 나누어
                                    배열에 저장하여 반환

                - concat('새문자열') : 문자열에 새 문자열 결합 (뒤에 붙는듯?)

                - charCodeAt(index) : 인덱스 번호에 해당하는 문자열의 아스키코드 값 반환 (인덱스 생략하면 0)

                - fromCharCode(아스키코드값) : 아스키코드 값에 해당하는 문자열 반환
                String.fromCharCode('문자')

                - trim() : 문자열 앞 또는 뒤 공백 문자열 삭제


*/

////////////////////////////////////////////////////////////////////////////////

// 54_Array

/*
        배열
            - 여러 개의 데이터를 하나의 저장소에 저장
            - 단일 이름으로 많은 값 보유
            - 인덱스 번호(0,1,2..)를 참조하여 값에 접근 가능

        배열의 값
            - 숫자, 문자열, 불, 객체, undefined, 변수

        배열 선언
            - const array1 = [10, 20, 30];

        배열 총 개수
            - 배열.length

        ex) const 변수 = [값, 값, 값, ...];
                        0번  1번  2번
            변수[0] = ~

        ex) const 참조변수 = new Array(값1, 값2, ...);
            const 참조변수 = new Array();
                참조변수[0] = 값1;
                참조변수[1] = 값2;
                참조변수[2] = 값3;



        const 객체 = {속성:값, 속성:값};
        const 객체 = new Object();
        const 배열 = new Array();
        const 날짜 = new Date();
        const 문자열 = new String();

        


        for (let i = 0; 0 < arr.length; i++) {
            list.innerHTML += `<li>${arr[i]}</li>`;
        }

        forEach() 메서드
            - Array,Map,Set 객체에서 사용 가능한 메서드
            - 배열의 요소들을 반복하여 작업 수행할 수 있음

            forEach() 메서드
                배열.forEach(function(값,인덱스,배열) {
                    코드;
                });

            ex) arr1.forEach(function(value,index) {
                list.innerHTML += `<li>${index}</li>`;
            })

            객체.forEach(para, para, para) 메서드 <-?


        for ~ of
            for (let i of array) {
                list.innerHTML += `<li>${i}</li>`;
            }


            
        body만 유일하게 .body로 선택 가능

        document.body.innerHTML =


        배열 메서드
            push(new data) : 마지막 인덱스에 새 데이터 삽입
            
            pop() : 마지막 인덱스 데이터 삭제
            
            unshift(new data) : 첫번째 인덱스에 새 데이터 삽입
            
            shift() : 첫번째 인덱스 데이터 삭제
            
            join(연결문자) : 연결문자 기준으로 1개의 문자열 데이터로 반환
            
            배열1.concat(배열2) : 2개의 배열 객체를 하나로 결합하여 반환
            
            slice(index1, index2) : 인덱스1 ~ 인덱스2 이전까지 반환
            
            sort() : 오름차 순 정렬 반환 (1,2,3 / a,b,c / 가,나다)
            
            reverse() : 데이터 순서를 거꾸로 바꾼 후 반환
            
            splice(index, count, value1, value2, ...) : index 번호부터 count 개수만큼 삭제 후 value 추가
*/

// Array와 Object는 재복습 필요
// forEach, forin, forof 복습 필요

/* 
    자료구조
            stack(스택)
            Queue(큐)
            Deque(데크)
            Tree(트리)
            Linked List(링크드 리스트)

*/

////////////////////////////////////////////////////////////////////////////////

// 61_BOM, 62_팝업창

/* 
    브라우저 객체 모델(Bom, Browser Object Model)

    window - document, screen, location, history, navigator

    window : 브라우저 객체의 최상위 객체

    alert('메시지') : 알림 창 출력
    prompt('텍스트'[, '기본텍스트']) : 프롬프트 창 입력
    confirm('메시지') : 확인/취소 창

    open('URL', '새창이름', '새창옵션') : URL 페이지를 새창으로 열기
            새창 옵션
                - width : 너비
                - height : 높이
                - left : x축 위치
                - top : y축 위치
                - scrollbars : 스크롤바 숨김 / 표시 (no / yes) 설정
                - location : URL 주소 입력 영역 숨김 / 표시
                - status : 상태 표시줄 영역 숨김 / 표시
                - toolbars : 도구 상자 영역 숨김 / 표시
    close() : 창 닫기

    */
   
////////////////////////////////////////////////////////////////////////////////

// 63_setInterVal, setTimeout
/*

setInterval(function () {코드}, 시간) : 일정한 시간 간격으로 코드를 반복 실행
clearInterval() : setInterval() 정지

setTimeout(function () {코드}, 시간) : 일정한 시간 후에 코드 한 번 실행
clearTimeout() : setTimeout() 정지, 실행할 것을 취소

*/

////////////////////////////////////////////////////////////////////////////////

// 65_userAgent

/* 
        screen : 사용자의 모니터 정보 제공
            screen.width : 화면 너비값
            screen.height : 화면 높이값
        
        location : 사용자의 현재 URL에 대한 정보와 새로고침 메소드 제공
            location.href = 'url';
                - 지정한 url로 위치 이동
            location.reload();
                - 브라우저 새로 고침

        navigator : 사용자의 브라우저와 운영체제 정보 제공
            navigator.userAgent;
                - 기본 플랫폼
                - 운영체제 정보
                - 사용중인 브라우저의 엔진 이름
                - 사용중인 브라우저 이름
                - 같은 엔진을 사용중이며 호환 가능한 다른 브라우저?

        홈페이지: 브라우저의 시작페이지로 설정해놓은 페이지
            특정사이트의 홈페이지 = 메인페이지 = index.html
        웹페이지: 홈페이지, 메인페이지, 서브페이지
        
*/

////////////////////////////////////////////////////////////////////////////////

// 71_DOM

/* 
    자바스크립트 : 동적 표현
        - HTML 속성 변경
        - HTML 내용 변경
        - CSS 속성 변경
    
    DOM(Document Object Model, 문서 객체 모델)
        - 자바스크립트를 이용하여 웹 문서에 접근하고 제어할 수 있도록
            객체를 사용해 웹 문서를 체계적으로 정리하는 방법
        
    DOM tree
        - 전체 문서 : 문서 노드
        - 모든 HTML 요소 : 요소 노드
        - HTML 요소 내부의 텍스트 : 텍스트 노드
        - 모든 주석 : 주석 노드

    DOM에 접근하기
        - document.getElementById('아이디명')
        - document.getElementsByClassName('클래스명').item(숫자)
        - document.getElementsByTagName('태그명')
        - document.querySelector('선택자')
        - document.querySelectorAll('선택자들')[숫자]

    객체.메서드();
    객체.메서드().객체.CSS속성 = 값;
    객체.style.속성 = 값;

    2개 이상이 있을 때 querySelector를 선택하면 무조건 첫번째꺼가 된다.
        
*/

////////////////////////////////////////////////////////////////////////////////

// 72_parentElement

/* 
    '요소'만 선택
        parentElement : 부모 요소 선택
        children[노드번호] : 자식 요소 선택
        previousElementSibling : 이전 형제 요소 선택
        nextElementSibling : 다음 형제 요소 선택

    '모든 노드' 선택
        parentNode : 부모 노드 선택
        childNodes[노드번호] : 자식 노드 선택
        previousSibling : 이전 형제 노드 선택
        nextSibling : 다음 형제 노드 선택
        
    ex) 요소.parentElement.nextElementSibling = '';
        요소.children[1].children[2] = '';
*/

////////////////////////////////////////////////////////////////////////////////

// 73_event

/* 
    Event(이벤트) : 웹문서 영역 안에서 웹브라우저 또는 사용자가 행하는 동작
            - click(mousedown, mouseup), mouseenter(mouseover), mouseleave(mouseout), mousemove, wheel, keydown, keyup, keypress, resize, scroll, change

    이벤트 핸들러: 이벤트가 발생할 때 그 이벤트에 반응해 실행하는 함수

    방법1
        <태그 on이벤트명="함수명()">

    방법2
        요소.onclick = 함수;
        function 함수(){}

        요소.onclick = function () {};

    방법3
        요소.addEventListener('이벤트', function(){});

    쿼리셀렉터 함수 만들기?
        function qs(sel) {
            return document.querySelector(sel);
        }

        const box = qs('box1');

    요소.addEventListener('이벤트', function () {});
    요소.addEventListener('이벤트', function () {함수();});


    전역함수 안에 있는 것들은 지역함수가 된다.
    이벤트리스너 안에 변수,함수 들어가면 지역함수,변수가 된다.





    length : 객체{속성:값,속성:값}, 배열[1,2,3], 컬렉션[Nodelist], 문자열(abc)의 개수

    for(let 변수 of 배열,컬렉션,문자열) {코드}

    요소.addEventListener('click', function (e) {})
        e.target, e.currentTarget : 클릭한 대상



    e.deltaY : 0:스크롤안함, 1:아래스크롤, -1:위스크롤

*/

////////////////////////////////////////////////////////////////////////////////

// 73_eventPropagation

/* 
    this : 이벤트를 발생시킨 주체 (핸들러가 실제 할당한 요소)
    target : 이벤트가 발생한 바로 그 요소 (이벤트가 실행된 대상)
    currentTarget : 이벤트리스너를 가진 요소 (핸들러가 실제 할당한 요소)
    
    event 객체 : https://blog.sonim1.com/152 
        - DOM 관련 이벤트 발생 시 관련 정보(이벤트 발생 요소, 이벤트 타입, 이벤트 관련 데이터) 저장
        - 이벤트 핸들러에 전달되는 매개변수
        - stopImmediatePropagation()

    event.target : 이벤트가 실제로 발생한 바로 그 요소

    event.currentTarget : 이벤트 전파로 인해 이벤트가 발생한 대상 요소나 부모 요소
                            이벤트 리스너를 가진 요소

    event.stopPropagation() : 이벤트 전파 방지
    event.stopImmediatePropagation() : 이벤트 전파 방지 + 다른 이벤트 핸들러 호출 막음

    event.preventDefault() : 이벤트 기본값 방지

    

    버블링(Bubbling)
        - 기본값
        - 자식 요소에서 발생한 이벤트가 바깥 부모 요소로 전파
        - child -> parent -> ancestor 순으로 실행 진행

    캡쳐링(Capturing)
        - 자식 요소에서 발생한 이벤트가 부모 요소부터 시작하여 안쪽 자식 요소까지 도달
        - ancestor -> parent -> child 순으로 실행 진행



    요소.on이벤트 = 함수;
        - 하나의 요소에 단일 이벤트만 등록 가능

    요소.addEventListener('이벤트', 함수, 불);
        - 하나의 요소에 다중 이벤트 등록 가능
        - 불: useCapture(불값) : false(기본값,버블링), true(캡쳐링). 생략가능.




*/

////////////////////////////////////////////////////////////////////////////////

// 77_createElement(), 77-2_input

/* 
    document.createElement(노드명) : document에 요소 노드 추가

    document.createAttribute(속성명) : document에 속성 추가

    document.createTextNode(텍스트) : document에 텍스트 노트 추가

    
    요소.setAttributeNode(속성) : 요소에 속성 삽입

    부모요소.appendChild(자식요소) : 부모 노드 끝에 자식 노드 삽입

    부모요소.insertBefore(자식요소, 기준자식요소) : 기존자식요소 앞에 자식요소 삽입

    
    요소.setAttribute('속성', 값) : HTML의 속성 값 변경

    요소.getAttribute('속성') : HTML의 속성 값 가져오기

    
    요소.classList.add('클래스명') : 클래스 추가

    요소.classList.remove('클래스명') : 클래스 제거

    요소.classList.contains('클래스명') : 클래스 있으면 true, 없으면 false

    요소.classList.toggle('클래스명') : add와 remove를 번갈아 적용

*/


////////////////////////////////////////////////////////////////////////////////

/* 
    scrollTop : 아래로 스크롤 되어서 안 보이는 요소의 위쪽 높이
    scrollLeft : 오른쪽으로 스크롤 되어서 안 보이는 요소의 왼쪽 너비
    scrollRight : 왼쪽으로 스크롤 되어서 안 보이는 요소의 오른쪽 너비
    scrollBottom : 위로 스크롤 되어서 안 보이는 요소의 아래쪽 높이

    offsetTop : 위쪽으로부터 요소의 위치 값
    offsetLeft : 왼쪽으로부터 요소의 위치 값
    offsetRight : 오른쪽으로부터 요소의 위치 값
    offsetBottom : 아래로부터 요소의 위치 값


    
    offsetWidth : padding, border, scrollbar 까지 포함된 요소의 너비
    offsetHeight : padding,  border, scrollbar 까지 포함된 요소의 높이
    
    scrollWidth : 스크롤해야 보이는 영역까지 포함한 요소의 전체 너비
    scrollHeight : 스크롤해야 보이는 영역까지 포함한 요소의 전체 높이
    
    clientWidth : padding을 포함한 요소의 너비
    clientHeight : padding을 포함한 요소의 높이

    
    
    screenX, screenY : 사용자 모니터 화면 기준으로 한 좌표 표시 (현재 모니터에 보이는 화면 전체 해상도에 대한 커서 좌표 반환)
    
    offsetX, offsetY : 좌표를 출력하도록 하는 이벤트가 걸려있는 돔 노드 기준으로 좌표 표시 (자기가 기준이면 0,0)
    
    clientX, clientY : 사용자에게 웹페이지가 보여지는 영역을 기준으로 좌표 표시 (스크롤이 움직여도 값은 변하지 않음) [현재 화면 말고 이걸 볼 때의 화면에서 보여지는 기준을 상정한듯?]

    PageX, PageY : 전체 문서를 기준으로 한 좌표 표시

    scrollX, scrollY : 원점으로부터 문서를 수평, 수직 방향으로 스크롤한 픽셀의 수를 나타낸다. (문서가 위나 아래로 전혀 움직이지 않은 상태면 0을 반환) (var sct = window.scrollY)



    getBoundingClientRect(); : 반환 값은 padding, border-width를 포함해 전체 요소가 들어있음. left,top,right,bottom,x,y,width,height 등을 픽셀 단위로 나타냄

    childElementCount : 자식 요소의 개수 구하기 (자식의 자식은 안나타남)



    window.scrollTo(X좌표, Y좌표) : 전달된 좌표로 이동 (문서의 지정된 위치로 스크롤을 이동) (문서의 왼쪽 상단부터 시작함)

    window.scrollBy(X좌표, Y좌표) : 현재 좌표를 기준으로 전달된 좌표만큼 이동




    https://hianna.tistory.com/493

*/