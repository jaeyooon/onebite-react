#### 📚 useReducer  
- 컴포넌트 내부에 새로운 State를 생성하는 React Hook  
- 모든 `useState`는 `useReducer`로 대체 가능
- **상태 관리 코드를 컴포넌트 외부로 분리할 수 있음**  

🔗 간단한 카운터 앱
```javascript
import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);   // useReducer의 두번째 인수로는 State의 초기값 전달

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,    // 1만큼 증가시켜 달라 요청한 것
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam;
```