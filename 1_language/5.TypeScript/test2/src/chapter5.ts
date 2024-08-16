// enum 타입

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2
// }

enum Role {
  ADMIN,
  USER,
  GUEST
}

enum Language {
  korean = "ko",
  english = "en"
}

const user1 = {
  name : "ㅎㅇ1",
  role : Role.ADMIN,          // 0 관리자
  language : Language.korean
}
const user2 = {
  name : "ㅎㅇ2",
  role : Role.USER,          // 1: 유저
  language : Language.english
}
const user3 = {
  name: "ㅎㅇ3",
  role : Role.GUEST,          // 2: 게스트
  lanuage : Language.korean
}

console.log(user1);
console.log(user2);
console.log(user3);

// 콘솔로그 출력 결과
// { name: 'ㅎㅇ1', role: 0, language: 'ko' }
// { name: 'ㅎㅇ2', role: 1, language: 'en' }
// { name: 'ㅎㅇ3', role: 2, lanuage: 'ko' }