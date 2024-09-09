// 인터페이스 확장

interface Animal {
  name : string;
  age : number;
}

interface Dog {
  name : string;
  age : number;
  isBark : boolean;
}

interface Cat {
  name : string;
  age : number;
  isScratch : boolean;
}

interface Chicken {
  name : string;
  age : number;
  isFly: boolean;
}

// ----

interface Animal2 {
  name : string;
  age : number;
}

interface Dog2 extends Animal2 {
  name : "hello";                   // 타입을 상속받아왔지만 재정의 가능 (다시 정의하려고 하는 타입이 원본 타입의 서브 타입이어야 함)
  isBark : boolean;
}

interface Cat2 extends Animal2 {
  isScratch : boolean;
}

interface Chicken2 extends Animal2 {
  isFly: boolean;
}

const dog : Dog2 = {
  name : "hello",       
  age: 0,
  isBark: true
}