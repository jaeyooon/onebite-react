import './App.css'
import { useState, useRef, useReducer } from 'react';
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

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);    // todos 데이터의 초기값을 mockData로 설정
  const idRef = useRef(3);    // 새로운 레퍼런스 객체 생성(mockData의 id 값과 겹치지 않기 위해)

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  };

  const onUpdate = (targetId) => {    // 📌하나의 투두 프로퍼티인 체크박스 토글 기능을 위한
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App
