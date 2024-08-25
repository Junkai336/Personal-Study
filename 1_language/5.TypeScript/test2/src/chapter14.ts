// 서로소 유니온 타입

// tag라는 string 리터럴 타입을 선언한 순간 서로소 타입이 된다.
// why? tag가 ADMIN이면서 동시에 MEMBER 여야 하는데 스트링 리터럴 타입은 딱 1개의 값만 포함하기 때문
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
}

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
}

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
}

type User = Admin | Member | Guest;

function login(user: User) {

  switch (user.tag) {
    case "ADMIN": {
      console.log("admin")
      break;
    }
    case "MEMBER": {
      console.log("member")
      break;
    }
    case "GUEST": {
      console.log("guest")
      break;
    }

    // if (user.tag === "ADMIN") {
    //   // admin 타입
    //   user;
    //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    // } else if (user.tag === "MEMBER") {
    //   // member 타입
    //   console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
    //   user;
    // } else {
    //   user;
    //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
    // }
  }
}

// 추가 사례

// 비동기 작업(API호출, 서버에서 데이터 받아오기 등)의 결과를 처리하는 객체

// ? : 선택적 프로퍼티 loading일 때는 message와 data가 없을 수 있음
type LoadingTask = {
  state: "LOADING";
}

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  }
}

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// type AsyncTask = {
//   state: 'LOADING' | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   }
// }

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {                       // state가 LOADING이면 스트링 리터럴 타입이기 때문에 무조건 LoadingTask로 타입이 좁혀진다.
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(`에러 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING"
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~"
  }
}

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~"
  }
}