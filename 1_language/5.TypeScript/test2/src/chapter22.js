// 클래스

let studentA = {
  name: "a",
  grade: "A+",
  age: 20,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  }
}

// let studentB = {
//   name: "b",
//   grade: "B+",
//   age: 22,
//   study() {
//     console.log("열심");
//   },
//   introduce() {
//     console.log("안녕!");
//   }
// }

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메소드
  study() {
    console.log("~");
  }

  introduce() {
    console.log(`${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
let studentB = new Student("b", "b+", 20);        // studentB {b, b+, 20}     
studentB.study(); 
studentB.introduce(); 

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);                      // 슈퍼(부모) 클래스의 생성자가 호출됨
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}을 씀`)
  }

}