import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Button from './components/Button.jsx';

function App() {
  // 스프레드 연산자 이용
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3
  }

  return (
    <>
      {/* props를 전달해 주면 이 값들은 객체로 묶여서 자식 컴포넌트의 매개변수로 제공된다. */}
      <Button {...buttonProps} />
      <Button text={"카페"} color={"orange"}/>
      <Button text={"블로그"}/>
      <Button text={"ㅎㅇ"}>
        <div>자식요소, children이란 props로 전달됨</div>
        <div>자식요소들은 자동으로 전달됨</div>
        <Header />
      </Button>
    </>
  )
}

export default App
