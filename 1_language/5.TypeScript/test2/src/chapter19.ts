type Func = {
  (): void;
}

const func : Func = () => {}

type Type1 = number | string;             // 유니온 타입    (인터페이스에선 만들 수 없음)
type Type2 = number & string;             // 인터섹션 타입  (//)

type Type3 = number | string | Person;    // 유니온이나 인터섹션을 이용해야 할 시 타입 별칭에다가 활용해야 ㅎ마

// 인터페이스

interface Person {
  readonly name : string;
  age?: number;
  sayHi: () => void;
  sayHi2(): void;                         // 호출 시그니처
  sayHi2(a: number, b: number): void;
}

const person : Person | number = {        // 유니온이나 인터섹션 이용해야 할 시 | number 처럼 타입 주석에 활용해야 함
  name: "이",
  // age: 28
  sayHi : function () {
    console.log("hi");
  },
  sayHi2 : function () {
    console.log("hi2");
  }
};

// person.name = "a";

person.sayHi2();
person.sayHi2(1,2);