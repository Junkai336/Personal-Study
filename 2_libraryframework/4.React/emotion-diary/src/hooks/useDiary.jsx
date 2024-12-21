import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// 함수 이름 앞에 use가 붙으면 커스텀 훅이 됨
// 커스텀 훅이 된 함수 안에서는 useContext나 useEffect같은 리액트 hooks 자유롭게 호출 가능
const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentDiaryItem] = useState();
  const nav = useNavigate();


  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id])

  return currentDiaryItem;
}

export default useDiary;