// 서로소 유니온 타입
function login(user) {
    switch (user.tag) {
        case "ADMIN": {
            console.log("admin");
            break;
        }
        case "MEMBER": {
            console.log("member");
            break;
        }
        case "GUEST": {
            console.log("guest");
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
// type AsyncTask = {
//   state: 'LOADING' | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   }
// }
function processResult(task) {
    switch (task.state) {
        case "LOADING": { // state가 LOADING이면 스트링 리터럴 타입이기 때문에 무조건 LoadingTask로 타입이 좁혀진다.
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
const loading = {
    state: "LOADING"
};
const failed = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은~"
    }
};
const success = {
    state: "SUCCESS",
    response: {
        data: "데이터~"
    }
};
export {};
