import { useState, useRef, useContext } from "react";
import "./Editor.css"
import { TodoContext } from "../App";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onSubmit = () => {
    if(content === '') {
      alert("한 단어 이상 입력해 주세요.");
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }

  return (
    <div className="Editor">
      <input 
        value={content}
        ref={contentRef} 
        onKeyDown={onKeydown}
        onChange={onChangeContent}  
        placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor;