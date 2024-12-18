import './App.css'
import { useState, useRef } from 'react';
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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);    // 새로운 레퍼런스 객체 생성(mockData의 id 값과 겹치지 않기 위해)

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current ++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos]);    // 📌todos state에 새로운 투두 추가함으로서 데이터 추가가 이루어짐!
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App
