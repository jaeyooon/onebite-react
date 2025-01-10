import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = () => {
  // ✨context를 통해 다이렉트로 데이터를 공급받도록 함.
  const {onCreate} = useContext(TodoDispatchContext);   // useContext라는 리액트 훅은 인수로 전달한 TodoContext로부터 공급된 데이터를 반환해주는 함수
  
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