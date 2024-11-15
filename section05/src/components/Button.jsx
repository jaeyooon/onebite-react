const Button = ({ text, color, children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}   // 이벤트 핸들러  
      // onMouseEnter={onClickButton}
      style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}   {/* Header 컴포넌트가 Button의 children props로 전달되어 렌더링됨! */}
    </button>
  );
};

Button.defaultProps = {   // props의 기본값 설정
  color: "black",
};

export default Button;