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

const user1 = {
  name : "ㅎㅇ1",
  role : Role.ADMIN          // 0 관리자
}
const user2 = {
  name : "ㅎㅇ2",
  role : Role.USER          // 1: 유저
}
const user3 = {
  name: "ㅎㅇ3",
  role : Role.GUEST          // 2: 게스트
}

console.log(user1);
console.log(user2);
console.log(user3);
