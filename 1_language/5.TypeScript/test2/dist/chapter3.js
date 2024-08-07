// object
let user = {
    id: 1,
    name: "김철수"
};
// user.id; 에러
// 객체 리터럴 타입
let user2 = {
    id: 1,
    name: "ㅎㅇ"
};
user2.id;
let dog = {
    name: '돌돌이',
    color: '흰색'
};
dog.name;
user = {
    name: "ㅎㅇ2"
};
// readonly
let config = {
    apiKey: 'my api key'
};
export {};
// config.apiKey = 'ㅋㅋㄹㅃㅃ' 에러
