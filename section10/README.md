#### 📚 useMemo  
- "메모이제이션"기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅  

#### 📚 React.memo 
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환  
```javascript
const MemorizedComponent = memo(Component)
```  
👉 이렇게 최적화 기능이 추가된 컴포넌트는 `Props`를 기준으로 메모이제이션 됨! (불필요한 리렌더링이 줄어들어 최적화됨)  

🔗 ex.투투리스트 앱에서 체크 버튼을 클릭 할때에는 불필요한 헤더 부분의 리렌더링을 하지 않도록 설정  
```javascript
import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);    // memo 메서드는 인수로 받은 Header Component를 props가 변경되지 않았을 때에는 리렌더링 하지 않도록 최적화하여 반환해줌
```  

#### 📚 useCallback - 불필요한 함수 재생성 방지  
- 1. 기능 구현 후 ▶ 2. 최적화  
   
🔗 ex. App 컴포넌트에서 `useCallback`을 통해 onCreate, onUpdate, onDelete 함수가 불필요하게 재생성되는 것을 방지하도록 함.
```javascript
import { useCallback } from 'react';

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);    // todos 데이터의 초기값을 mockData로 설정
  const idRef = useRef(3);    // 새로운 레퍼런스 객체 생성(mockData의 id 값과 겹치지 않기 위해)

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, []);

  const onUpdate = useCallback((targetId) => {    // 📌하나의 투두 프로퍼티인 체크박스 토글 기능을 위한
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  }, []);

  // 첫 번째 인수로는 불필요하게 재생성되지 않도록 방지하고 싶은 함수를 넣어줌. 두 번째 인수로는 deps를 넣어줌.
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, [])   // deps로 빈배열을 넣어서 최초로 컴포넌트가 마운트 될때에만 onDelete 함수가 생성되고 그 이후로는 리렌더링이 되더라도 해당 함수가 생성되지 않도록 설정(최적화)

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App

```