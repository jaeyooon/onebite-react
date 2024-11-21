import { useState } from "react";

function useInput() {   // Custom Hook 👉 컴포넌트마다 반복되서 동작하며 Hook을 사용하는 로직일 경우 Custom Hook을 만들어서 분리해줄 수 있음!
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
};

export default useInput;