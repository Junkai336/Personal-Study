import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  console.log(params);

  const currentDiaryItem = useDiary(params.id);
  console.log(currentDiaryItem);

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />}
      />
      <Viewer />
    </div>
  )
}

export default Diary;