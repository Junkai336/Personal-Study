// enum 타입
// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "ㅎㅇ1",
    role: Role.ADMIN, // 0 관리자
    language: Language.korean
};
const user2 = {
    name: "ㅎㅇ2",
    role: Role.USER, // 1: 유저
    language: Language.english
};
const user3 = {
    name: "ㅎㅇ3",
    role: Role.GUEST, // 2: 게스트
    lanuage: Language.korean
};
console.log(user1);
console.log(user2);
console.log(user3);
export {};
