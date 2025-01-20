import "./Button.css";

const Button = ({text, type, onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`Button Button_${type}`}   // 버튼 태그의 classname은 우리가 전달한 type props에 따라서 각각 달라지게 됨!
    >
      {text}
    </button>
  )
};

export default Button;