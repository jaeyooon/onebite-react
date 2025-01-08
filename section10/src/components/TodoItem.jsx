import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />   {/* 버튼이 아니라 input 요소이므로 onClick이 아닌 onChange 사용 */}
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC) : Higher Order Component
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // 반환값 True 면 -> Props 바뀌지 않았다고 판단 -> 리렌더링 하지 마라
//   // 반환값 False 면 -> Props 바뀌었다고 판단 -> 리렌더링 해라

//   // id, isDone, content, date 값이 바뀌었을 때만 리렌더링 되도록 한 커스텀 콜백함수
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   // 위의 4개의 값이 바뀌지 않았다면 return true 반환함으로서 리렌더링 하지 않도록 함!
//   return true;
// });

export default memo(TodoItem);