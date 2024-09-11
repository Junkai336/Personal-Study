// 선언 합침

interface Person {
  name: string;
}

interface Person {
  // name : number; 에러 (똑같은 프로퍼티의 타입을 다시 정의하는 것을 충돌. 허용하지 않음)
  // name : "hello";
  name: string;
  age: number;
}

const person : Person = {
  name: "",
  age: 10,
}

// 모듈 보강

interface Lib {
  a : number;
  b : number;
}

interface 모듈보강 {
  c : number;
}

const lib = {
  a: 1,
  b: 2,
  c: 3,
};