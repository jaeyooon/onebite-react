import './App.css'
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo
} from 'react';
import Editor from './components/Editor';
import Header from './components/Header'
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state]   // 새로운 데이터 추가 후 기존의 데이터 나오도록
    case 'UPDATE':
      return state.map((item) => item.id === action.targetId
        ? { ...item, isDone: !item.isDone }
        : item
      );
    case 'DELETE':
      return state.filter(
        (item) => item.id !== action.targetId
      );
    default:
      return state;
  }
}

export const TodoStateContext = createContext(); // 변경될 값을 담을 context
export const TodoDispatchContext = createContext(); // 변경되지 않을 값을 담을 context

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

  const memoizedDispatch = useMemo(() => {  // 캄포넌트가 리렌더링되면 함수가 재생성되므로
    return { onCreate, onUpdate, onDelete };
  }, [])   // App컴포넌트가 마운트 된 이후에는 다시는 재생성되지 않도록 하기 위한 객체 생성

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>    {/* 감싼 자식 컴포넌트에 value props로 데이터 공급을 위한 것 */}
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>  
      </TodoStateContext.Provider>
    </div>
  );
}

export default App
