// object
let user: object = {
  id: 1,
  name: "김철수"
}

// user.id; 에러

// 객체 리터럴 타입
let user2: {
  id?: number,  // 있어도 되고 없어도 되는 선택적 프로퍼티
  name: string
} = {
  id: 1,
  name: "ㅎㅇ"
}

user2.id;

let dog: {
  name: string,
  color: string
} = {
  name: '돌돌이',
  color: '흰색'
}

dog.name;

user = {
  name: "ㅎㅇ2"
}

// readonly

let config: {
  readonly apiKey: string
} = {
  apiKey: 'my api key'
}

// config.apiKey = 'ㅋㅋㄹㅃㅃ' 에러