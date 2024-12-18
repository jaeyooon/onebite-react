import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);   // input 태그에 입력하는 값이 content state에 보관되도록
  };

  const onKeydown = (e) => {    // Enter 키 눌렀을때 추가되도록
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content)   // onCreate 함수 호출하면서 content state 에 보관된 값(input 태그에 입력된 값) 전달
    setContent("");
  };  

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
};

export default Editor;