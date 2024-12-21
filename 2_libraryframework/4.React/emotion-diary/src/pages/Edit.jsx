import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  console.log(params);

  // 커스텀 훅
  const currentDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")    // 반환값: true, false
    ) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
    };
    nav("/", { replace: true });
  };

  // const getCurrentDiaryItem = () => {
  //   const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

  //   if(!currentDiaryItem) {
  //     window.alert('존재하지 않는 일기입니다.');
  //     // nav('/', {replace: true}); navigate는 컴포넌트가 전부 mount 된 이후에야만 동작할 수 있으므로 작동 X 
  //     //                            컴포넌트가 아무것도 리턴하기 전인 상태(mount되기 전 상태) 즉,
  //     //                            main.jsx에서 BrowserRouter 컴포넌트가 공급하고 있는 것인데 그게 렌더링되지도 않은 상태에서 동작하려고 하는 것
  //     //                            = 컴포넌트가 다 마운팅된 이후에야만 쓸 수 있다.
  //   }

  //   return currentDiaryItem;
  // }

  // const currentDiaryItem = getCurrentDiaryItem();
  // console.log(currentDiaryItem);

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  )
}

export default Edit;