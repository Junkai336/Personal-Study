import { useReducer } from "react";

// dispatch를 호출하게 되면 reducer가 호출되게 되고 action 객체가 인수로써 전달이 된다.

const Exam = () => {

  // reducer : 변환기
  // => 상태를 실제로 변환시키는 변환기 역할
  function reducer(state, action) {
    console.log(state, action);
    // state : 0
    // action : {data: 1, type: "INCREASE"}

    // 새로운 state의 값을 반환시켜주면 반환된 값을 useReducer가 불러와서 실제로 state의 값을 변경시켜주게 됨
    switch(action.type) {
      case 'INCREASE': return state + action.data;
      case 'DECREASE': return state - action.data;
      default: return state;
    }

  }

  // dispatch : 발송하다, 급송하다
  // => 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // => 액션 객체
    dispatch({
      type : "INCREASE",
      data : 1,
    })
  }

  const onClickMinus = () => {
    dispatch({
      type : "DECREASE",
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus} >-</button>
    </div>
  )
};

export default Exam;