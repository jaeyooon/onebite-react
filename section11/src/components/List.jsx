import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())     // ✨영어 대소문자 관계없이 검색결과가 잘 나오도록 입력값을 다 소문자로 바꿔줌
    );   // search 값이 존재하는 content 값만 필터링하도록
  };

  const filteredTodos = getFilteredData();   // 컴포넌트가 리렌더링될 때마다 호출

  const {totalCount, doneCount, notDoneCount} =
    useMemo(() => {
      console.log("getAnalyedData 호출!");
      const totalCount = todos.length;
      const doneCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - doneCount;

      return {
        totalCount,
        doneCount,
        notDoneCount
      };
    }, [todos]); 
  // 두번째 인수 => 의존성 배열 : deps

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem
            key={todo.id}
            {...todo}
          />;    // 모든 todo 의 데이터들이 TodoItem 컴포넌트에 전달됨
        })}
      </div>
    </div>
  )
};

export default List;