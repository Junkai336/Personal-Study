
/* 

    개행

    Scanner
        - (텍스트 입력을 다룸)
        - 입력받은 후 .close()로 닫아야 메모리 누수 방지
        - 주로 공백이나 개행 문자로 구분된 토큰 읽어올 때 사용

    Scanner.hasNext()
        - 입력 소스에서 읽을 수 있는 다음 토큰이 있는지 확인
        - 파일에서 읽을 수 있는 데이터 가져올 때 사용하고
        - 코테는 입력이 더이상 없을 때까지 입력을 읽고 출력

    BufferedReader
        - (텍스트 입력을 다룸)
        - 텍스트 입력을 버퍼링하여 읽어와서 입출력 성능 향상 시킬 수 있음
        - 구분자를 기준으로 읽는 것이 아니라 한줄씩 읽어오는 readLine() 메소드를 통해 사용됨
        - 파일이나 네트워크에서 텍스트 읽어올 때 사용

    System.out.println
        - 콘솔에 문자열 출력 (텍스트 출력을 다룸)
        - 자동으로 개행 문자 추가하여 줄바꿈 처리
        - 주로 디버깅이나 간단한 콘솔 출력에 사용

    BufferedWriter
        - 텍스트를 버퍼링하여 출력 (텍스트 출력을 다룸)
        - 버퍼링을 통해 입출력 성능 향상 시킬 수 있음
        - write() 메소드로 문자열 출력하고 newLine() 메소드로 줄바꿈 추가할 수 있음
        - 보통 파일에 텍스트를 쓸 때 사용

    버퍼링?
        - 

    StringTokenizer
        - https://dev-coco.tistory.com/94
        - 특정 구분자를 기준으로 토큰으로 분리할 때 사용
        - 주로 입력된 문자열을 여러 부분으로 나눌 때 사용
        - countTokens
        - hasMoreTokens()

    split과 stringtokenizer의 차이

    StringBuilder

    StringBuilder.reverse()

    trim()

    strip()

    Scan.next()

    Scan.nextLine()

    charAt()

    charAt()-'0'

    valueOf()

    BigInteger


 */