import './App.css';
import { useReducer, useRef, createContext, useEffect, useState } from 'react';  // props drilling을 방지하기 위해 context 사용
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE': {
        nextState = [action.data, ...state]; 
        break;
      }
    case 'UPDATE': {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id)
            ? action.data
            : item
        );
        break;
      }
    case 'DELETE': {
        nextState = state.filter((item) => String(item.id) !== String(action.id)
        );
        break;
      }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);   // data state의 초기값을 mockData로 설정
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    if (!storedData) {
      setIsLoading(false);
      return;   // 강제 종료
    }

    const parsedData = JSON.parse(storedData);    // diary의 값은 객체 형태의 문자열이므로 파싱을 통해 객체로 변환시켜 줌
    if (!Array.isArray(parsedData)) {   // parsedData가 배열이 아닐 경우에 대비한 예외 처리
      setIsLoading(false);
      return;
    }

    let maxId = 0;   
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })

    idRef.current = maxId + 1;    // 새로운 일기가 생성될 때 기존의 일기 id와 겹치지 않도록 +1

    dispatch({
      type: "INIT",
      data: parsedData,
    });

    // ✨useEffect의 dispatch 함수가 실행되어서 data state의 초기값을 설정하는 순간 loading은 끝이 남
    setIsLoading(false);
  }, []);    // 컴포넌트가 마운트 되었을 때만 실행되도록 deps를 빈배열로 함

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

  if (isLoading) {  // ✨ App 컴포넌트의 일기 데이터인 data state의 초기값이 설정되기 이전까지는 isLoading state에 의해서 페이지 컴포넌트들은 렌더링되지 않고
    return <div>데이터 로딩중입니다 ...</div>;    // 로딩중이라고 떠서 오류가 발생하지 않을 것!
  }

  return (
    <>
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
