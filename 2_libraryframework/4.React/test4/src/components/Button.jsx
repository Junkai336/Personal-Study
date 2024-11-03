// const Button = (props) => {
const Button = ({text, color, children}) => {   // 객체 구조분해할당

  // 3개의 객체가 출력됨 {text: '메일'}, {text: '카페'}, {text: '블로그'}
  // 왜 3개가 출력되었냐면, App.jsx에 Button 컴포넌트를 3번 호출했기 때문임
  // 부모 컴포넌트에서 전달한 props의 값들이 프로퍼티로 하나씩 들어있음.
  // console.log(props);         

  const onClickButton = (e) => {
    console.log(e);
  };

  return (
  <button
    // onClick={() => {
    //   console.log(text);
    // }}
    onClick={onClickButton}
    onMouseEnter={onClickButton}
    style={{ color: color }}
  >
      {text} - {color.toUpperCase()}
      {children}
  </button>
  )
}

// 반드시 들어올 것이라 예상하고 작성하는 것은 꽤 위험하기 때문에 default 값 설정
Button.defaultProps = {
  color: "black"
}

export default Button;