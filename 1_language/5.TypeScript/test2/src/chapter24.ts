// 접근 제어자 : access modifier

class Employee {
  // public name: string;
  // public age: number;
  // public position: string;
  // private a: string;

  constructor(public name: string, public age: number, public position: string, private a: string) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.a = a;
  }

  work() {
    console.log(`private 필드는 메소드로만 접근 가능 ${this.a}`);
  }
}

const employee = new Employee("이", 30, "developer", "hi");

employee.name = "홍";
employee.age = 33;
employee.position = "디자이너";
// employee.a = "b";