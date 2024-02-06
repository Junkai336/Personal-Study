package Chapter1;

public class ch17 {

}

/*
 * 스트림
 * - 컬렉션 및 배열의 요소를 반복 처리하기 위함
 * - 요소들이 하나씩 흘러가면서 처리된다는 의미
 * 
 * 요소 반복 처리
 * 
 * List<String> list = ...
 * for(int i = 0; i < list.size(); i++) {
 * String item = list.get(i);
 * }
 * 
 *  스트림
 *  Stream<String> stream = list.stream();
 *  stream.forEach( item -> sout(item));
 * 
 * Set<String> set = ...
 * Iterator<String> iterator = set.iterator();
 * while(iterator.hasNext()) {
 * String item = iterator.next();
 * }
 * 
 *  스트림
 *  Stream<String> stream = set.stream();
 *  stream.forEach ( item -> sout(item) );
 * 
 * Stream과 Iterator 차이점
 *  - Stream은
 *  - 내부 반복자이므로 처리 속도가 빠르고 병렬 처리 효율적
 *  - 람다식으로 다양한 요소 처리 정의
 *  - 중간 처리와 최종 처리를 수행하도록 파이프 라인 형성 가능 <- ?
 * 
 * 외부 반복자
 *  - for문과 iterator는 컬렉션의 요소를 컬렉션 바깥쪽으로 반복해서 가져와 처리
 *  - 컬렉션의 요소를 외부로 가져오는 코드 + 처리 코드를 모두 개발자 코드로 가지고 있어야 함.
 * 
 * 내부 반복자
 *  - 스트림은 요소 처리 방법을 컬렉션 내부로 주입시켜서 요소를 반복 처리
 *  - 개발자 코드에서 제공한 데이터 처리 코드(람다식)을 가지고 컬랙션 내부에서 요소 반복 처리
 *  - 멀티 코어 CPU를 활용하기 위해 요소들을 분배시켜 병렬 작업 가능 (하나씩 처리하는 순차적 외부 반복자보다 효율적)
 * 
 * parallelStream()
 *  - 병렬 처리 스트림 <- 멀티 스레드로 처리하는 듯
 *  Stream<String> parallelStream = list.parallelStream();
 *  parallelStream.forEach ( name -> sout( name + Thread.currentThread().getName() ) )
 *      => ooo: main
 *      => ooo: ForkJoinPool.commonPool-worker-2
 * 
 * 중간처리와 최종처리
 *  - 스트림은 하나 이상 연결 될 수 있다.
 *  - 스트림이 연결 되어 있는 것을 스트림 파이프라인이라 한다.
 *  - 중간 스트림들은 최종 처리를 위해 요소를 걸러내거나(필터링), 요소를 변환하거나(매핑), 정렬하는 작업을 수행
 *  - 최종 스트림은 정제된 요소들을 반복,카운팅,총합,평균,집계 한다.
 * 
 * ex)
 *  Stream<Student> studentStream = list.stream();
 *  IntStream scoreStream = studentStream.mapToInt(student -> student.getScore());
 *  double avg = scoreStream.average().getAsDouble();
 * 
 * 메소드 체이닝 패턴
 * ex)
 *  double avg = list.stream();
 *              .mapToInt(student -> student.getScore())
 *              .average()
 *              .getAsDouble();
 * 
 * mapToInt() : 객체를 int 값으로 매핑해서 IntStream 으로 변환시킨다. (어떤 객체를 어떤 int 값으로 매핑할 것인지 람다식으로 결정)
 * IntStream : 최종 처리를 위해 다양한 메소드 제공 (예:.average())
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */