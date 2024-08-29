// 함수 타입 정의
function func(a, b) {
    return a + b;
}
// 화살표 함수의 타입 정의 법
const add = (a, b) => a + b;
// 함수의 매개변수
function introduce(name = "김", tall) {
    console.log(`name : ${name}`);
    if (typeof tall === "number")
        console.log(`tall : ${tall + 10}`);
}
introduce("김", 1000);
introduce("김");
function getSum(...rest) {
    console.log(rest);
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
export {};
