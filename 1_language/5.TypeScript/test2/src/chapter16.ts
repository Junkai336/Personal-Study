// 함수 타입 표현식

type Operation = (a: number, b: number) => number;

// const add = (a: number, b: number): number => a + b;

const add2: (a: number, b: number) => number = (a, b) => a + b;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 호출 시그니처 (콜 시그니처)

type Operation2 = {
  (a:number, b:number): number;
}

const add3: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

// 함수 타입 호환성

// 기준1. 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;                  // 업캐스팅 : 호환
// b = a;               // 다운캐스팅 : 비호환

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;               // 업캐스팅 : 비호환
d = c;                  // 다운캐스팅 : 호환

type Animal = {         // Dog 타입의 슈퍼타입 (조건이 더 적음) [더 큰 타입]
  name: string;
}

type Dog = {            // Animal 타입의 서브타입
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// animalFunc = dogFunc;  // 업캐스팅 : 비호환
dogFunc = animalFunc;     // 다운캐스팅 : 호환

// animal 타입에는 color 프로퍼티가 없음

// 2-2 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;