import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constant";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      })
    }
  }, [initData])

  const onChangeInput = (e) => {
    console.log(e.target.name);     // 어떤 요소에 입력이 들어온 건지
    console.log(e.target.value);    // 입력된 값이 무엇인지

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,           // 예: 여기 createdDate가 있으나,
      [name]: value,     // 변경된 필드의 값을 덮어 쓰는 방식
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input);
  }

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" name="createdDate" onChange={onChangeInput} value={getStringedDate(input.createdDate)} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* input이 아니기 때문에 직접 함수 작성 */}
          {emotionList.map((item) =>
            <EmotionItem
              onClick={() => onChangeInput(
                {
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  }
                }
              )}
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId} />)}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea name="content" value={input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button onClick={onClickSubmitButton} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  )
}

export default Editor;