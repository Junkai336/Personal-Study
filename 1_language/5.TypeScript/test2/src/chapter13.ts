// 타입 좁히기

type Person = {
  name: string;
  age: number;
}

function func(value: number | string | Date | null | Person) {
  value;
  // value.toUpperCase();
  // value.toFixed();
  // value.getTime();

  // 어떤 변수가 특정 조건문 내부에서 더 좁은 타입임을 보장할 수 있을 때 타입스크립트는 이 변수의 타입을 더 좁은 타입으로 자동으로 추론해줌
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {       // Date는 자바스크립트의 내장 클래스
    console.log(value.getTime());
  // } else if (value instanceof Person) {     // 인스턴스인지 묻는 것이기 때문에 Person 이라는 타입이 올 수 없음. Person은 타입 별칭으로 만든 일종의 그냥 객체 '타입'임
  } else if (value && 'age' in value) {        //
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }


}