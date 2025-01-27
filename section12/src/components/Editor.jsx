import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({initData, onSubmit }) => {
  const [input, setInput] = useState({    // ✨사용자의 입력을 input state에 보관함
    createdDate: new Date(),    
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),   // initData의 createdDate는 타임스탬프 형식으로 되어있으므로 Date 객체로 바꿔줌
      });
    }
  }, [initData]);   // initData의 값이 변경될 때마다 콜백함수 실행

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);    // 입력된 value 값은 문자열이므로 Date 객체로 변환해서 value 값 설정
    }

    setInput({
      ...input,    // 기존의 state 값은 유지시켜주면서
      [name]: value,  // 현재 입력이 발생한 요소만 수정
    })
  };

  const onClickSubmitButton = () => {
    onSubmit(input);  // 부모 컴포넌트로부터 받은 onSubmit 함수가 호출되면서 인수로 input state를 전달함
  }

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />   {/* Date 객체를 문자열로 변환해서 value 속성으로 넣어줘야 함! */}
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_List_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() => onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected = {item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button
          onClick={() => nav(-1)}   // 인수로 -1을 줘서 뒤로 가도록 해줌
          text={"취소하기"}
        />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  )
};

export default Editor;