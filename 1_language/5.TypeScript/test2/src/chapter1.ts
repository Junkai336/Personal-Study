// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hi" 에러
num1.toFixed();

// String
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str = 1; 에러
str1.split(" ");

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// strictNullChecks = fasle
// let numA: number = null;

// 리터럴 타입
// 리터럴 = 값
let numB: 10 = 10;
// numB = 20; 에러
let stringA: "hello" = "hello";
let boolA: true = true;