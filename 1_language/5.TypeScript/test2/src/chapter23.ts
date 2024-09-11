// 타입스크립트 클래스

const employee = {
  name: "a",
  age: 20,
  position: "developer",
  work() {
    console.log("일함");
  },
};

// 타입스크립트에서의 클래스는 자바스크립트의 클래스로 취급되면서 동시에 타입으로 취급됨
class Employee {
  // 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다. : 어차피 undefined로 들어가는데 왜 선언했냐는 의미로 오류 발생
  // -> 선택적 프로퍼티(?)로 만들어주거나 기본값을 넣어주거나 생성자 만들기
  name?: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("a", 27, "개발자");
console.log(employeeB);                               // Employee { name: "a", age: 27, position: "개발자" }

const employeeC :Employee = {
  name: "a",
  age: 2,
  position: "bbb",
  work(){}
}

// ---

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}