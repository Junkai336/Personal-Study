const Controller = ({ onClickButton }) => {
  return (
    <div>
      <button onClick={() => {
        // 이벤트 핸들러를 props로 받아와서 onClickButton을 실행하면 인수를 다시 전달
        // {onClickButton} 이 아니라 {() => {onClickButton(인수)}} <- 이 함수를 실행하게 하는 것
        onClickButton(-1);
      }}>-1
      </button>
      <button onClick={() => {
        onClickButton(-1);
      }}>-10</button>
      <button onClick={() => {
        onClickButton(-1);
      }}>-100</button>
      <button onClick={() => {
        onClickButton(-1);
      }}>+100</button>
      <button onClick={() => {
        onClickButton(-1);
      }}>+10</button>
      <button onClick={() => {
        onClickButton(-1);
      }}>+1</button>
    </div>
  )
}

export default Controller;