// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
let animal = {
    name: "기린",
    color: "yellow",
};
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};
animal = dog;
let book;
let programmingBook = {
    name: "한입크기로잘라먹는리액트",
    price: 33000,
    skill: "reactjs",
};
book = programmingBook;
// programmingBook = book;  에러
// 초과 프로퍼티 검사
let book2 = {
    name: "ㅁㅁ",
    price: 11,
    // skill: "aa"        에러!
};
let book3 = programmingBook;
function func(book) { }
func({
    name: "ㅇ",
    price: 10,
    // skill: "a",  에러!
});
func(programmingBook);
export {};
