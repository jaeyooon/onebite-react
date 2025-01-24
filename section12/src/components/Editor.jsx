import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음"
  },
  {
    emotionId: 2,
    emotionName: "좋음"
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭"
  },
  {
    emotionId: 4,
    emotionName: "나쁨"
  },
  {
    emotionId: 5,
    emotionName: "끔찍함"
  },
]

const getStringedDate = (targetDate) => { // Date 객체를 문자열로 변환해서 value 속성으로 넣어주기 위해
  // 날짜 -> YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) { // 10 미만의 월은 두자리 수가 되지 않으므로 템플릿 리터럴로 두자리 수로 바꿔줌.
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({    // ✨사용자의 입력을 input state에 보관함
    createdDate: new Date(),    
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

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