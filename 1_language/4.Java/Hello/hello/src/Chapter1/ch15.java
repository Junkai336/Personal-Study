package Chapter1;

public class ch15 {

}

/*
 * 컬렉션 프레임워크
 * - List : ArrayList, Vector, LinkedList
 * - 순서 유지, 중복 저장
 * - Set : HashSet, TreeSet
 * - 순서 유지X, 중복 저장X
 * - Map : HashMap, Hashtable, TreeMap, Properties
 * - 키와 값으로 구성된 엔트리 저장
 * - 키는 중복 저장X
 * 
 * List 컬렉션
 * - 객체를 저장하면 인덱스 부여
 * - 인덱스로 객체 검색, 삭제
 * - 객체 자체가 아닌 객체의 번지를 저장
 * - 동일한 객체를 중복저장할 수 있다. (동일한 번지 저장)
 * - null 저장 가능
 * - 인덱스 0번부터 차례대로 저장
 * - 특정 인덱스의 객체를 제거하면 바로 뒤 인덱스부터 1씩 당겨짐
 * - 특정 인덱스에 객체를 추가하면 해당 인덱스부터 1씩 밀려남
 * 공통사용 메소드
 * - add() : 객체를 맨 끝에 추가
 * - add(index, element) : 인덱스에 객체를 추가
 * - set(index, element) : 인덱스의 객체를 새로운 객체로 바꿈
 * - contains() : 객체가 저장되어 있는지 여부
 * - get() : 인덱스에 저장된 객체 리턴
 * - isEmpty() : 컬렉션이 비어있는지 조사
 * - size() : 전체 객체 수 리턴
 * - clear() : 모든 객체 삭제
 * - remove(index) : 인덱스에 저장된 객체 삭제
 * - remove(element) : 객체 삭제
 * 
 * ArrayList
 * - 객체를 추가하면 내부 배열에 객체 저장
 * - 일반 배열과 다르게 제한 없이 객체 추가 가능
 * - List<E> list = new ArrayList<E>();
 * - <E>에 지정된 타입의 객체만 저장
 * - 타입파라미터 E에는 ArrayList에 저장하고 싶은 객체 타입 지정
 * - List<E> list = new ArrayList<>();
 * - <E>에 지정된 타입의 객체만 저장
 * - List에 지정한 객체 타입과 동일하다면 ArrayList<> 처럼 생략 가능
 * - List<> list = new ArrayList<>();
 * - 모든 타입의, 모든 종류의 객체 저장
 * 
 * - List<클래스타입> list = new ArrayList<>(); 면
 * list.add(new 클래스타입 ("ㅇㅇ", "ㅁㅁ", "ㄴㄴ", ..)) 처럼 쓰나? <- 객체 저장이라서 ?_?
 * - 모든 객체 가져올 때 for문 i<list.size() list.get(i)
 * 
 * Vector
 * - ArrayList와 동일한 내부 구조
 * - 동기화된 메소드
 * - 멀티스레드가 동시에 실행할 수 없다. (객체 저장할 때 온전히 작동)
 * - List<E> list = new Vector<E>();
 * - List<E> list = new Vector<>();
 * - List<> list = new Vector<>();
 * - ArrayList는 스레드가 동시에 저장해서 경합 발생하면 한 스레드만 저장됨.
 * 
 * LinkedList
 * - 인접 객체를 체인처럼 연결해서 관리 <- ?
 * - 특정 위치에 객체를 삽입하거나 삭제하면 바로 앞 뒤 링크만 변경하면 됨 <- ?
 * - ArrayList보다 동작 속도가 빠름 (한칸씩 미는 작업이 없기 때문)
 * 
 * 
 * 
 * Set 컬렉션
 * - 저장순서가 유지되지 않는다.
 * - 중복 저장 x
 * - 하나의 null만 저장할 수 있다.
 * 공통사용 메소드
 * - add() : 객체 추가 (성공:true , 중복:false)
 * - contains(element) : 주어진 객체가 저장되어 있는지 여부
 * - isEmpty() : 컬렉션이 비어 있는지 조사
 * - Iterator<E> iterator() : 저장된 객체를 한번씩 가져오는 반복자 리턴
 * - size() : 전체 객체 수 리턴
 * - clear() : 모든 객체 삭제
 * - remove(element) :  객체 삭제
 * 
 * Set 컬렉션 객체 가져오기
 * - for문
 * ex)
 *  Set<E> set = new HashSet<>();
 *  for(E element : set) { sout(element) }
 * 
 * - iterator() 메소드
 * ex)
 *  Set<E> set = new HashSet<>();
 *  Iterator<E> iterator = set.iterator();
 *  
 *  while(iterator.hasNext()) {
 *  String element = iterator.next();
 *  sout(element);
 * }
 * 
 * iterator
 * - Set 컬렉션의 객체를 가져오거나 제거하기 위해 메소드 제공
 *      - hasNext() : 가져올 객체가 있으면 true, 없으면 false 
 *      - next() : 하나의 객체를 가져온다.
 *      - remove() : next()로 가져온 객체를 제거한다.
 * 
 * HashSet
 * - Set<E> set = new HashSet<E>();
 * - Set<E> set = new HashSet<>();
 * - Set<> set = new HashSet<>();
 * - 동일한 객체 중복 저장 X , 다른 객체만 저장
 * - 동일한객체 : 동등 객체 (hashCode(), equals() 메소드의 리턴 값이 true면 동일 객체라고 판단하고 중복저장 X)
 * - 문자열 저장시 같은 문자열이면 동등한 객체
 * - set.add(new Member("ㅇㅇ", 1));
 * - set.add(new Member("ㅇㅇ", 1));
 * -> 동등객체로 판단.
 * 
 * TreeSet <- ?
 * - 검색 기능 강화
 * - 이진 트리를 기반으로 한 Set 컬렉션
 * - 여러개의 노드가 트리 형태로 연결된 구조
 * - 루트 노드라고 불리는 하나의 노드에서 시작해 각 노드에 최대 2개의 노드를 연결할 수 있는 구조
 * - 객체를 저장하면 자동 정렬 ( 낮은 것이 왼쪽, 높은 것이 오른쪽)
 * 
 * TreeSet 검색 관련 메소드
 * - first() : 제일 낮은 객체 리턴
 * - last() : 제일 높은 객체 리턴
 * - lower(E e) : 주어진 객체보다 바로 아래 객체 리턴
 * - higher(E e) : 주어진 객체보다 바로 위 객체 리턴
 * - floor(E e) : 주어진 객체와 동등한 객체가 있으면 리턴, 없으면 바로 아래 객체 리턴
 * - ceiling(E e) : 주어진 객체와 동등한 객체가 있으면 리턴, 없으면 바로 위 객체 리턴
 * - pollFirst() : 제일 낮은 객체를 꺼내오고 컬렉션에서 제거
 * - pollLast() : 제일 높은 객체를 꺼내오고 컬렉션에서 제거
 * 
 * - descendingIterator() : 내림차순으로 정렬된 Iterator 리턴 <리턴타입: Iterator<E>>
 * - descendingSet() : 내림차순으로 정렬된 NavigableSet 리턴 <리턴타입: NavigableSet<E>>
 * 
 * - headSet() : 주어진 객체보다 낮은 객체들을 NavigableSet으로 리턴 , 주어진 객체 포함 여부: 두번째 매개값
 *      headSet(
 *          E fromElement,
 *          boolean
 *          )
 * - tailSet() : 주어진 객체보다 높은 객체들을 NavigableSet으로 리턴, 주어진 객체 포함 여부 : 두번째 매개값
 * - subSet() : 시작과 끝 사이 객체들을 NavigableSet으로 리턴, 주어진 객체 포함 여부 : 두번째, 네번째 매개값
 *      subSet(
 *          E fromElement
 *          boolean
 *          E fromElement
 *          boolean
 *          )
 * 
 *      내림차순 정렬
 *          NavigableSet<타입> 변수명2 = 변수명1.descendingSet();
 *      범위 검색
 *          NavigableSet<타입> 변수명2 = 변수명1.tailSet(80, true);
 *          NavigableSet<타입> 변수명2 = 변수명1.subSet(80, true, 90, false)
 * 
 * Map 컬렉션
 * - 키와 값으로 구성. (둘다 객체)
 * - 키는 중복 저장 x
 * - 값은 중복 저장 o
 * - 기존에 저장된 키와 동일한 키로 저장하면 기존의 값은 없어지고 새로운 값으로 대체됨.
 * - TreeSet<E> treeset = new TreeSet<E>();
 * - TreeSet<E> treeset = new TreeSet<>();
 * 
 * Map 공통메소드
 * - put(key, value) : 주어진 키와 값을 추가
 * - containsKey(key) : 키가 있는지 여부
 * - containsValue(value) : 값이 있는지 여부
 * - Set<Map.Entry<key,value>> entrySet() : 모든 Map.Entry 객체를 Set에 담아서 리턴 <- ?
 * - get(key) : 주어진 키의 값을 리턴
 * - isEmpty() : 컬렉션이 비어있는지 여부
 * - Set<key> keySet() : 모든 키를 Set 객체에 담아서 리턴 <- ?
 * - size() : 저장된 키의 총 수를 리턴
 * - Collection<value> values() : 저장된 모든 값 Collection에 담아서 리턴 <- ?
 * - clear() : 모든 Map.Entry(키와 값)을 삭제
 * - remove(key) : 주어진 키와 일치하는 Map.Entry 삭제
 * 
 * HashMap
 * - 키로 사용할 객체가 hashCode(), equals() 메소드가 true를 리턴할 경우 동일 키로 간주하고 중복 저장 허용하지 않는다.
 * - Map<key, value> map = new HashMap<key, value>()
 * - Map<key, value> map = new HashMap<>()
 * - Map<> map = new HashMap<>()
 * ex) Map<String, Integer> map = new HashMap<String, Integer>();
 * 
 * 키로 값 얻기
 * ex) 
 * String key = "ㅇㅇ";
 * Map.get(key);
 * 
 * 키 Set 컬렉션 얻고 반복해서 키와 값 얻기
 * ex)
 * Set<String> keySet = map.keySet();
 * Iterator<String> keyIterator = keySet.iterator();
 * 
 * while (keyIterator.hasNext()) {
 *  String k = keyIterator.next();
 *  Integer v = map.get(k);
 *  sout(k + v);
 * }
 * 
 * 엔트리 Set 컬렉션을 얻고 반복해서 키와 값 얻기
 * ex)
 * Set<Entry<String, Integer>> entrySet = map.entrySet();
 * Iterator<Entry<String, Integer>> entryIterator = entrySet.iterator();
 * 
 * while(entryIterator.hasNext()) {
 * Entry<String, Integer> entry = entryIterator.next();
 * String k = entry.getKey();
 * Integer v = entry.getValue();
 * sout(k+v);
 * }
 * 
 * Hashtable
 * - Map<key, value> map = new Hashtable<key, value>();
 * - HashMap과 내부구조 같음
 * - 동기화된 메소드
 * - 멀티스레드가 동시에 실행할 수 없기 때문에 멀티스레드 환경에서 안전하게 객체 추가 삭제 가능
 * 
 * Properties
 * - Hashtable의 자식 클래스, Hashtable의 특징을 가지고 있음
 * - 키와 값을 String 타입으로 제한한 컬렉션
 * - 주로 확장자가 .properties인 프로퍼티 파일을 읽을 때 사용
 * - 키와 값이 = 기호로 연결되어 있는 텍스트 파일
 * - ISO 8859-1 문자셋으로 저장, 한글은 \ u+유니코드로 표현되어 저장
 * - 상대경로로 저장하는 것이 편함
 * - Properties properties = new Properties();
 * - properties.load(sdfsd("adsdad.properties"));
 * - .load() 메소드로 프로퍼티 파일의 내용을 메모리로 로드
 * - .getProperty("")로 키의 값을 읽는듯 
 * 
 * TreeMap
 * - 이진 트리를 기반으로 한 Map 컬렉션.
 * - TreeSet 과 다른 점은 키와 값이 저장된 Entry를 저장한다는 것
 * - 엔트리를 저장하면 키를 기준으로 자동 정렬, 부모 키 값과 비교해서 낮은 것이 왼쪽, 높은 것이 오른쪽 자식 노드에 Entry 객체 저장
 * - TreeMap<key, value> treeMap = new TreeMap<key, value>();
 * - TreeMap<key, value> treeMap = new TreeMap<>();
 * - TreeMap을 사용하는 이유는 검색 관련 메소드 때문에.
 * 
 * TreeMap 검색 관련 메소드
 * - firstEntry() : 제일 낮은 Map.Entry 리턴
 * - lastEntry() :  제일 높은 Map.Entry 리턴
 * - lowerEntry(K key) : 키보다 바로 아래 Map.Entry 리턴
 * - higherEntry(K key) : 키보다 바로 위 Map.Entry 리턴
 * - floorEntry(K key) :  동등한 키 혹은 바로 아래 Map.Entry 리턴
 * - ceilingEntry(K key) : 동등한 키 혹은 바로 위 Map.Entry 리턴
 * - pollFirstEntry() : 제일 낮은 Map.Entry 제거
 * - pollLastEntry() : 제일 높은 Map.Entry 제거
 * - headMap(
 *  K toKey,
 *  boolean
 * ) : 주어진 키보다 낮은 Map.Entry 들을 NavigableMap으로 리턴 , 주어진 Map.Entry 포함 여부는 두번째 매개값
 *  
 * - tailMap(
 *  K fromKey,
 *  boolean
 * ) : 주어진 키보다 높은 Map.Entry 들을 NavigableMap으로 리턴 , 주어진 Map.Entry 포함 여부는 두번째 매개값
 * 
 * - subMap(
 *  K fromKey,
 *  boolean,
 *  K toKey,
 *  boolean
 * 
 * ) : 시작과 끝 사이 Map.Entry 들을 NavigableMap 컬렉션으로 반환, 주어진 Map.Entry 포함 여부는 두번째, 네번째 매개값
 * 
 * Comparable
 * - TreeSet, TreeMap 에 저장되는 키 객체는 저장과 동시에 오름차순으로 정렬
 * - Integer, Double, String 타입은 모두 Comparable을 구현하고 있음
 * - 그 외에 사용자 정의 객체 저장시 반드시 Comparable을 구현하고 있어야 한다. <- ?
 * - compareTo(타입파라미터 변수명) : 리턴타입은 int
 *      - 같으면 0 리턴
 *      - 적으면 음수 리턴
 *      - 크면 양수 리턴
 * - ex)
 *  public class Person implements Comparable<Person> {
 *  @Override
 *  public int compareTo(Person o) {
 *      if(age < o.age) return -1
 *      else if(age == o.age) return 0
 *      else return 1;
 *  }
 * }
 * - 이렇게 재정의 되어있으면 다른 객체에서 Treeset<Person> 만들면 알아서 되는듯
 * 
 * Comparator
 * - Comparable 비구현 객체를 저장하고 싶을 경우 비교자 제공?
 * - TreeSet<E> treeSet = new TreeSet<E>(new ComparatorImpl());
 * - TreeMap<key, value> treeMap = new TreeMap<key, value>(new ComparatorImpl());
 * - compare(T o1, T o2) : 리턴타입은 int
 *      - o1 = o2 0리턴
 *      - o1이 앞에 오게 하려면 음수 리턴
 *      - o2가 앞에 오게 하려면 양수 리턴
 * - ex)
 * public class FruitComparator implements Comparator<Fruit> {
 * @Override
 * public int compare(Fruit o1, Fruit o2) {
 *      if(o1.price < o2.price) return -1;
 * else if(o1.price == o2.price) return 0;
 * else return 1;
 *  }
 * }
 * 
 * LIFO, FIFO 컬렉션
 * - 후입선출(LIFO)
 *  - 나중에 넣은 객체가 먼저 빠져나간다.
 *      Stack
 *          - Stack<E> stack = new Stack<E>();
 *          - Stack<E> stack = new Stack<>()
 *          메소드
 *              - push(E item) : 주어진 객체를 스택에 넣는다.
 *              - pop() : 스택의 맨 위 객체를 빼낸다.
 * 
 * - 선입선출(FIFO)
 *  - 먼저 넣은 객체가 먼저 빠져나간다.
 *      Queue
 *          - Queue<E> queue = new LinkedList<E>();
 *          - Queue<E> queue = new LinkedList<>();
 *          메소드
 *              - offer(E e) : 주어진 객체를 큐에 넣는다.
 *              - poll() : 큐에서 객체를 빼낸다.
 * 
 * 동기화된 컬렉션
 *  - synchronizedXXX() 메소드
 *      - 비동기화된 메소드를 동기화된 메소드로 래핑
 *      - List<T> : synchronizedList(List<T> list) : List를 동기화된 List로 리턴
 *          - List<T> list = Collections.synchronizedList(new ArrayList<T>());
 *      - Set<T> : synchroizedSet(Set<T> set) : Set을 동기화된 Set으로 리턴
 *          - Set<E> set = Collections.synchronizedSet(new HashSet<E>());
 *      - Map<key, value> : synchronized(Map<key,value> map) : Map을 동기화된 Map으로 리턴
 *          - Map<key, value> map = Collections.synchronizedMap(new HashMap<key, value>());
 * 
 *  비동기화 : 응답을 기다리지 않고 정하는순서대로 막 (경합이 생길 수 있다.)
 *  동기화된 : 순서가 있는 차례대로. (느림)
 * 
 * 수정할 수 없는 컬렉션
 *  - 요소를 추가, 삭제할 수 없는 컬렉션
 *  - 저장된 요소를 변경하고 싶지 않을 때 유용
 * 
 * of
 *  - List<E> list = List.of(E..elements);
 *      - List<String> list = List.of("A", "B", "C");

 *  - Set<E> set = Set.of(E..elements);
 *      - Set<String> set = Set.of("A", "B", "C");

 *  - Map<key,value> map = Map.of(K key1, V value1, K key2, V value2...)
 *      - Map<Integer,String> map = Map.of(
 *          1, "A",
 *          2, "B",
 *          3, "C"
 *      );
 * 
 * copyof
 *  - 기존 컬렉션을 복사하여 수정할 수 없는 컬렉션 만들기
 *  
 *  - List<E> list = List.copyOf(Collection<E> coll);
 * 
 *  - Set<E> set = Set.copyOf(Collection<E> coll);
 * 
 *  - Map<key,value> map2 = Map.copyOf(Map<key,value> map1); 
 * 
 * asList
 *  - 배열을 수정할 수 없는 List 컭렉션으로 만들기
 * 
 *  - String[] arr = { "A", "B", "C"};
 *  - List<String> list = Arrays.asList(arr);
 * 
 * 
 * 
 * 
 * 
 * 
 */

/*
 * 향상된 for문 (644p, 667p)
 * 
 * for(타입 이름 : 변수명) {
 *  sout(이름)
 * }
 * 
 */


/* 
* ConcurrentHashMap
*
* AtomicLong
*/