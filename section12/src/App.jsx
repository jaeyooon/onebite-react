import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id)
      );
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);   // data state의 초기값을 mockData로 설정
  const idRef = useRef(3);

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,  // 새로운 일기가 생성될 때마다 idRef의 값을 하나씩 증가시키도록 함
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "Hello")
      }}>
        일기 추가 테스트
      </button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다");
      }}>
        일기 수정 테스트
      </button>

      <button onClick={() => {
        onDelete(1);
      }}>
        일기 삭제 테스트
      </button>
      <DiaryStateContext.Provider value={data}>   {/* App 컴포넌트의 data state 값을 Routes 아래에 있는 모든 페이지 컴포넌트들에게 공급할 수 있도록 감싸줌.  */}
        <DiaryDispatchContext.Provider
          value={{   // 모든 페이지 컴포넌트들에 상태 변화 함수들을 공급함
          onCreate,
          onUpdate,
          onDelete,
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} />   {/* 헤당 path로 요청이 들어오면 해당 컴포넌트를 렌더링해라 */}
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} /> {/* :id는 동적경로인 url 파라미터를 의미하는 값*/}
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App
