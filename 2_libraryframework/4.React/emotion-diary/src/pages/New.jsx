import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(
      input.createdDate.getTime(),
      input.emotionId,
      input.content
    );
    // replace : 두번째 인수로 객체 형태의 옵션을 넣음. 뒤로가기 방지하면서 페이지 이동.
    nav('/', {replace: true});
  }

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}

      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New;