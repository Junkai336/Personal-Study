// 바꿀내용 드래그 + ctrl h = ctrl d d d d


// 01_where

/* 
    한줄 주석: ctrl /
    여러줄 주석: shift alt a

    자바스크립트 코드 입력
        - 대소문자 구분
        - 문장 끝에 세미콜론(;)
        - 문자열은 작은따옴표('') , 큰따옴표("")


    외부 스크립트
        - head나 body 태그 사이 기록 가능
        - <script src="../js/sub4.js"></script>

    내부 스크립트
        - head 태그 사이 기록
        <script>
        document.write('javascript';)
        </script>

    인라인 스크립트
        - HTML 속성 값 으로 표시
        - <h1 onclick="document.write('Hello');">문자</h1>
        - <html태그 이벤트속성="함수();">ㅁㅁㅁ</html태그>
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 02_output

/* 
    이벤트(event)
        - 사용자의 마우스, 키보드 사용으로 인한 인터액티브 효과
        마우스
            - click, dblclick, mousemove, mouseover, mouseout
        
        키보드
            - keydown, keyup

                keydown : 사용자가 처음 키를 눌렀을 때 (현재 눌린 문자는 관련 x)
                keyup : 키를 땔 때

        창
            - resize, scroll
*/

/* 
    id, class, 태그 선택
        - getElementById('아이디명)    
        - getElementsByClassName('클래스명)      Element"s"
        - getElementsByTagName('태그명)

    선택자 선택
        - querySelector('선택자')
        - querySelectorAll('선택자들')
*/

// window가 앞에 붙어있는 것은 생략할 수 있다.
// js에서는 단어를 .으로 구분한다.

/* 
    출력
        - window.alert()
        - document.write()
        - console.log()
        - window.confirm()
    
    입력
        - window.prompt()

*/

/* 
    객체.메소드.
    
    객체: window, document, console ...
    메소드: alert, write, log

    객체.객체.속성
    요소.style.fontSize = "20px";

    객체.메소드().객체.속성
    document.querySelector('#a').style.BackgroundColor = "blue";
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 03_var

/* 
    객체(Object), 메소드(Method), 속성(Property)
    자바스크립트 명령어는 마침표(.)으로 구분

    프론트엔드 자바스크립트 활용
    - HTML 태그, 속성, 내용 변경
    - CSS 속성 변경

    HTML 속성 변경
    요소.속성 = "값";

    CSS 속성 변경
    요소.style.CSS속성 = "값";



    변수(Variables)
        - 변하는 데이터(값)를 저장할 수 있는 메모리 공간
        - 한 개의 데이터만 저장 가능
        - 새로운 데이터 들어오면 기존 데이터 삭제

    변수 선언
    var 변수명;
    var 변수명 = 값;

    변수명은 예약어(true,false,var,for...)로 지정 x

    a = b 할 때 오른쪽에서 왼쪽으로 값 넣어주는 거임

*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 4.datatypes

/* 

    데이터 유형
        a. 기본
            - string: '문자열' 또는 "문자열"
            - number: 숫자(100, -1, 3.14, ...)
            - boolean: true(참,1), false(거짓,0)
            - undefined : 변수에 값이 등록되기 전의 기본값 (선언 후 할당하지 않은 값)
        b. 복합
            - object : 객체
                    a. Array(배열), Date(날짜), Math(수학)
                    b. String, Number, Boolean
                    c. 값: Null: 변수에 저장된 데이터를 비우고자 사용 (빈 값)

    Boolean() 함수는 0, null, undefined, 빈문자('') 제외 true로 반환
    
    .write() 내부에서 HTML을 문자열로 인식한다. (<br><img><title> 같은 HTML 태그 추가 됨)

    벡틱(``) : 문자열 ''를 붙이지 않아도 됨 변수는 ${변수} ${표현식} 등으로 표현 for문에서 ${i번째숫자} 가능
*/


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 5.operator

/* 
    연산자
        - 산술, 대입, 비교, 논리, 조건

    산술 연산자
        문자열 연결 연산자: +
            숫자 + 숫자 -> 숫자
            숫자 + 문자열 -> 문자열
            문자열 + 문자열 -> 문자열
            1 + '2' + 3 -> 123

        ++ (1씩 증가)
        -- (1씩 감소)

        var A = ++B : B값을 1 증가 후 A에 대입 (일단 B값 1 증가)
        var A = B++ : B를 A에 대입 후 B값을 1 증가 (모든 연산 후 B값 1 증가)

        - * / // % ** = 숫자만 가능

        ** = 거듭제곱
        // = 몫

        typeof 변수명,숫자,true등 : 자료형 확인(문자열, 숫자열 확인)

    대입 연산자
        오른쪽 값을 왼쪽 값에 할당 
        a = b
            += : a = a + b
            -= : a = a - b
            *= : a = a * b
            /= : a = a / b
            %= : a = a % b
            **= : a = a ** b

            +=는 누적집계 낼 때 사용할 수 있음

    비교 연산자
        비교 연산자의 값은 true 혹은 false
            != : 같지 않다. (같지 않아야 true)
            !== : 같지 않다. (데이터 유형,타입 구분)
            == : 같다.
            === : 같다. (데이터 유형,타입 구분)
            >, <, >=, <=

    논리 연산자
        논리 연산자의 값은 true 혹은 false
        - && : and
        - || : or
        - ! : not : 거짓이면 참, 참이면 거짓 반환


*/

/* 
    &lt; = <
    &gt; = >
    &nbsp = 스페이스바한칸
    &amp; = &
    &quot = "
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 06_제어문

/* 

    if (조건식) {}
    if (조건식) {} else {}
    if (조건식) {} else if {} ... else {}
    if문에서 실행 코드가 1문장이면 {} 생략 가능


    switch (조건식) {
        case n:
            코드;
            break;
        case n:
        case n:
            코드;
            break;
        default:
            코드;
            break;
    }
    break가 없으면 밑에 코드 주르륵 실행
    default: case에 해당하지 않는 값을 입력한 경우


    for (초기식; 조건식; 증감식) {
        코드;
    }
    조건식이 true면 코드 실행
    조건식이 false면 for문 종료


    초기식
    while (조건식) {
        코드;
        증감식;
    }
    조건식이 true면 코드 실행 (반복)
    조건식이 false면 while문 종료


    초기식
    do {
        코드;
        증감식;
    } while (조건식)
    do는 while과 다르게 조건 비교를 뒤에서 한다.
    1번은 무조건 코드가 실행된다.


    제어문에서 break; 를 만나면 제어문을 빠져나간다.
    제어문에서 continue; 를 만나면 continue 아래 코드를 실행하지 않고 제어문 시작으로 올라간다.


*/

/* 
    property = css 속성
    attribute = html 속성

    요소.getAttribute('속성값') = 속성값 가져오기
    요소.setAttribute = ('속성값1', '속성값2') = 속성값1을 속성값2로 교체하기
    요소.hasAttribute('속성값') = 속성값이 있는지 여부 (true false 조건문)

    html title 속성: 마우스 올렸을 때 툴팁같은거 뜨는 거

    input에 입력한 데이터는 "문자열"이다.
*/

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 05-2, 10, 타입변환

/* 
    자바스크립트의 변수는 타입이 정해져 있지 않다.
    같은 변수에 다른 타입의 값을 다시 대입할 수 있다.

    자동형변환
        10 + "문자열" = 문자열 연결을 위해 10이 문자열로 변환
        "3" * "5" = 곱셈 연산을 위해 두 문자열이 숫자열로 반환됨.
        1 - "문자열" = NaN

    NaN : Not a Number : 정의되지 않은 값이나 표현할 수 없는 값 (0을 0으로 나누거나 숫자로 변환할 수 없는 산출 연산. 읽기 전용 값.)

    Number() :  숫자로
    String() : 문자열로
    Boolean() : 0(false) 1(true)
    Object() : Object(3) = new Number(3)
    parseInt() : 
    parseFloat() : 

    숫자를 문자열로 변환
    String() : 가장 간단한 방법
    toExponential() : 정수부분은 1자리, 소수부분은 입력받은 수만큼 e표기법을 사용해서 숫자를 문자열로 변환
    toFixed() : 소수 부분을 입력받은 수만큼 사용하여 숫자를 문자열로 변환함
    toPrecision() : 입력받은 수만큼 유효 자릿수 사용하여 숫자를 문자열로 변환

*/

let number = Number(prompt('입력값을 변수로. 숫자열로 변환.'))
let result = (number - 100) * 0.3
var varr = div.innerHTML = `asd`;

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ