package Chapter1; // 바이트코드 파일(.class)이 위치할 패키지 선언 : 소스파일은 src/ 바이트코드파일은 bin/

import java.util.Scanner;

public class ch1 { // ch1 클래스 선언
    
    public static void main(String[] args) { // main() 메소드 선언

        Scanner scanner = new Scanner(System.in);

        System.out.println("hello hello"); // 콘솔 출력 코드
        System.out.println("hello hello");

        long var1 = 1000000000000000L;
        char var2 = 65;
        char var3 = 0x0041;
        float var4 = 0.12f;
        boolean result1 = var1 == 20;

        System.out.println(var1);
        System.out.println(var2);
        System.out.println(var3);
        System.out.println(var4);
        System.out.println(result1);

        boolean work = true;

        if (work) {
            System.out.println("작동");
        } else {
            System.out.println("멈춤");
        }

        // char var5 = "a"; 안됨
        // String var7 = 'c'; 안됨
        String var6 = "b";

        System.out.println("\"헬로우 자바\"");

        byte byte1 = 100;
        double int1 = byte1;

        System.out.println(int1);

        char chch = 'B';
        int chch2 = chch;

        System.out.println(chch2);

        int int2 = 126;
        byte byte2 = (byte) int2;

        System.out.println(byte2);

        byte xx = 10;
        byte yy = 20;
        // byte xxyy = xx + yy; 에러
        int xxyy = xx+yy;
        System.out.println(xxyy);

        float x3 = 1.2f;
        double y3 = 2.5;
        float result3 = x3 + (float) y3;

        System.out.println(result3);

        String x4 = "10";
        int y4 = Integer.parseInt(x4);
        System.out.println(y4);

        String z4 = String.valueOf(y4);
        System.out.println(z4);



        System.out.printf("%d", 25);
        System.out.printf("%1$d, %2$d", 25, 25);
        System.out.printf("\n aaa %1$d, %2$s aaa", 50, "dd");
        
        System.out.printf("%1$6d, %2$12d", 25, 25);
        System.out.printf("\n%1$06d, %2$012d", 25, 25);

        System.out.printf("\n%.2f", 120.5);
        System.out.printf("\n%10.2f", 120.5);
        System.out.printf("\n%100.2f\n", 120.5);

        String name = "홍길동";
        String job = "도적";
        System.out.printf("%-6d | %-6s | %-6s \n", 1, name, job);

        while(true) {
            System.out.print("입력");
            String scan1 = scanner.nextLine();
            if (scan1.equals("a")) {
                System.out.println("apapapap");
                break;
            }
        }

        float var10 = 10;
        System.out.println(var10);
        


    } // main() 메소드 블록 (바이트코드 파일을 실행하면 이 main() 메소드 블록이 실행됨)
}

/* 
    정수: byte, char, short, int, long
    실수: float, double
    논리(true/false): boolean

        메모리크기 메모리사용크기 저장되는값의허용범위      유효 소수 이하 자리
    byte: 1byte,    8bit,   -128~127
    short: 2byte,    16bit,     -32.768~32.767
    char: 2byte,    16bit,  0~65535 (유니코드)
    int: 4byte,     32bit,      -2,147,476,648~2,147,483,647
    long: 8byte,    64bit,     -9,223,372,036,854,775,808~9,223,372,036,854,775

    float 4byte 32bit 1.4 x 10e-45 ~ 3.4 x 10e38            7자리
    double 8byte 64bit 4.9 10e-324 ~ 1.8 x 10e308           15자리

    1byte = 8bit
    bit : 0과 1이 저장되는 단위

    리터럴: 프로그래머가 직접 입력한 값 (문자리터럴: 'a')
    논리 리터럴: true, false

    컴파일러는 정수 리터럴을 int 타입 값으로 간주 / int값 초과하는 리터럴은 l,L을 붙여 long타입 값임을 컴파일러에게 알려줘야 함
    컴파일러는 실수 리터럴을 double 타입 값으로 간주 / float값은 f,F 붙여 float타입 값임을 컴파일러에게 알려줘야 함

    char 타입 변수 초기화 char a = ' ';
    문자 리터럴은 유니코드로 변환되어 저장
    유니코드: 세계 각국의 문자를 0~65535 숫자로 매핑한 국제 표준 규약
    유니코드는 정수이므로 char 타입은 정수 타입

    double이 float보다 약 2배의 유효 자릿수를 가짐

    작은따옴표('')로 감싼 한개의 문자 : char 타입
    큰따옴표("")로 감싼 여러개의 문자 : 문자열 -> string 타입에 저장
 */

/* 
    이스케이프 문자: 문자열 내부 역슬래쉬(\), 특정문자 포함 가능
        - \" : " 문자 포함
        - \' : ' 문자 포함
        - \\ : \ 문자 포함
        - \ u16진수 : 16진수 유니코드에 해당하는 문자 포함
        - \t : 탭만큼 띄움
        - \n : 줄바꿈(라인피드)
        - \r : 캐리지 리턴 <-?
        - %%: % 인듯?

        - """ 문자열 """ : 이스케이프, 라인피드 필요없이 작성된 그대로 문자열 저장

    자동 타입 변환: 허용 범위가 작은 타입 -> 허용 범위가 큰 타입으로 대입 될 때 발생

    허용범위순: byte < short, char < int < long < float < double

    강제 타입 변환: 작은허용범위타입 = (작은허용범위타입) 큰허용범위타입

        실수 -> 정수 : 소수점 이하 부분은 버려짐
    
    정수 타입 변수(x,y등)가 피연산자로 활용될 경우 int 타입으로 변환되어 연산되고 결과도 int 타입으로 생성. => 결과값을 byte,short,char 타입에 저장할 수 없다. int 변수에 저장해야 함.
    byte a = 10 + 20 (이건 컴파일 단계에서 하고.) (byte로 계산)
    byte a = x + y (이건 실행단계에서 함.) (int로 됨)

    float + double = double
    int + double = double

    int 타입으로 하고 싶다면
    int + (int) double
 */

/* 
    문자열 -> 숫자타입
        String -> byte : Byte.parseByte(변수명);
        String -> short : Short.parseShort();
        String -> int : Integer.parseInt();
        String -> long : Long.parseLong();
        String -> float : Float.parseFloat();
        String -> double : Double.parseDouble();
        String -> boolean : Boolean.parseBoolean();

    기본타입 -> 문자열
        String.valueOf(숫자,true,false.변수명등);

    println() : 출력 + 행 바꾸기
    print() : 출력 + 행 바꾸지 않기
    
    printf("형식문자열", 형식문자열에제공될값1, 값2) : 형식 문자열에 맞추어 값 출력 

    %   [argument_index$]   [flags]     [width]     [.precision]    conversion
형식문자열시작 [값의순번$]   [-, 0]    [전체 자릿수] [소수 자릿수]    변환문자

    conversion : d(정수), f(실수), s(문자열)
    System.out.printf("이름: %1$s 나이: %2$d", "김자바", "20");

    형식화된 문자열

    정수
        - %d : 정수
        - %nd : n자리 정수. 왼쪽 빈자리 공백
        - %-nd : n자리 정수, 오른쪽 빈자리 공백
        - %0nd : n자리 정수, 왼쪽빈자리 0 채움
    실수
        - %.nf : 소수 n자리 
        - %10.nf : 정수7자리+소수점+소수2자리, 왼쪽 빈자리 공백 <-?
        - %-10.nf : 오른쪽 빈자리 공백
        - %010.nf : 왼쪽 빈자리 0 채움
    문자열
        - %s : 문자열
        - %ns : n자리 문자열, 왼쪽 빈자리 공백
        - %-ns : n자리 문자열, 오른쪽 빈자리 공백
*/

/* 
    키보드 입력 데이터 변수 저장
        Scanner 타입 변수 선언, 대입 연산자 =, new 연산자로 생성한 Scanner 객체 변수 대입

        Scanner scanner = new Scanner(System.in);
        스캐너 변수 선언  스캐너 객체 생성하고 대입

        scanner.nextLine(); : 키보드로 입력된  내용을 문자열로 읽고 좌측 String 변수에 저장

        String inputData = scanner.nextLine();
        스트링 변수         엔터키 누르면 입력된 문자열 읽고. 변수에 저장.

        변수.equals("") : String 타입 값이 동일한지 비교
        기본타입(byte~double)은 == 으로 동일한지 비교
 */

/* 
    float,double타입 부동 소수점 방식?
    2진수8진수16진수? 10진수는우리가쓰는거
 */