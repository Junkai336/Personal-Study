// 제네릭 인터페이스

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
}

// 인덱스 시그니쳐

interface NumberMap {
  [key: string]: number;
}

let numberMapP: NumberMap = {
  key: -1231,
  key2: 123123
}

// 인덱스 시그니쳐 + 제네릭

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key3: "value"
}

let booleanMap: Map<boolean> = {
  key: true
}

// 제네릭 타입 별칭 (제네릭 인터페이스랑 거의 같음)

type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  key: "a"
}

// 제네릭 인터페이스 활용 예시

// 유저 관리 프로그램
// 유저 구분 : 학생 유저 / 개발자 유저

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// function goToSchool(user: User) {
//   if (user.profile.type !== 'student') {
//     console.log("잘못오셨습니다");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// };

// const developerUser: User = {
//   name: "이",
//   profile: {
//     type: "developer",
//     skill: "TypeScript"
//   }
// }

// const studentUser: User = {
//   name: "홍",
//   profile: {
//     type: "student",
//     school: "대학교",
//   }
// }

interface User<T> {
  name: string;
  profile: T
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};


const developerUser: User<Developer> = {
  name: "이",
  profile: {
    type: "developer",
    skill: "TypeScript"
  }
}

const studentUser: User<Student> = {
  name: "홍",
  profile: {
    type: "student",
    school: "대학교",
  }
}

goToSchool(studentUser);
// goToSchool(developerUser);