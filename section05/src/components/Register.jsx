import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({  // ✨비슷한 여러 개의 state가 있을땐 하나의 객체값으로 묶어서 하나의 state로 통합해서 관리
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);    // reference 객체 생성 & 초기값 설정
  const inputRef = useRef();

  // ✨통합 이벤트 핸들러 👉 비슷한 이벤트들을 간결하고 깔끔하게 처리
  const onChange = (e) => {
    countRef.current++;   // 수정 횟수 세기(화면 리렌더링 없이)
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
 
  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    } 
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}    // input 태그를 렌더링하는 DOM 요소가 inputRef라는 referenct object에 저장됨.
          name="name"
          value={input.name}    // input의 초기값 설정을 위해
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select
          name="country"
          value={input.country}
          onChange={onChange}
        >
          <option value={""}></option>
          <option value="kr">한국</option>  {/* state에는 kr로 저장됨 */}
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;