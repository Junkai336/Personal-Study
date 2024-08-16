// 타입 별칭
// 타입 중복 문제 발생
let user = {
    id: 1,
    name: "ㅎㅇ",
    nickname: "ㅎㅇ2",
    birth: "1990.01.01",
    bio: "ㅎㅇ",
    location: "부천시"
};
let user2 = {
    id: 1,
    name: "ㅎㅇ",
    nickname: "ㅎㅇ2",
    birth: "1990.01.01",
    bio: "ㅎㅇ",
    location: "부천시"
};
// type User = {} 동일 스코프 내에서 중복 불가
function func() {
}
let user3 = {
    id: 1,
    name: "ㅎㅇ",
    nickname: "ㅎㅇ2",
    birth: "1990.01.01",
    bio: "ㅎㅇ",
    location: "부천시"
};
let user4 = {
    id: 1,
    name: "ㅎㅇ",
    nickname: "ㅎㅇ2",
    birth: "1990.01.01",
    bio: "ㅎㅇ",
    location: "부천시"
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
};
let countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
    // Korea2: 'd' 오류
};
export {};
