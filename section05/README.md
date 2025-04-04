📙 자바스크립트 함수가 HTML 태그들을 리턴하도록 만들어주면 해당 함수는 `React Component`가 됨!  
```javascript
function Footer() {
  return (
    <footer>
      <h1>footer</h1>
    </footer>
  )
};
```  
- JavaScript에서는 함수가 HTML을 리턴하도록 만들 수 없음!  
  - 문법적인 오류로 판단함.  
- React.js에서는 **JSX 문법**을 사용하므로 적법하다고 판단함.  
  - JSX(JavaScript Extensions) : 확장된 자바스크립트 문법  
  > 👉 JSX 문법을 이용하면 동적으로 특정 변수의 값을 HTML로 렌더링하도록 할 수 있음!  

✨JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
2. 숫자, 문자열, 배열 값만 렌더링 된다.
3. 모든 태그는 닫혀있어야 한다.
4. 최상위 태그는 반드시 하나여야만 한다.  
```javascript
const Main = () => {
  const number = 11;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main</h1>
      <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
      {10}
      {number}
      {[1, 2, 3]}
      {obj.a}
    </main>
  )
};

export default Main;
```  

#### 📗 Event Handling  
- 이벤트가 발생했을 때 그것을 처리하는 것  
  ex) 버튼 클릭시 경고창 노출
- 합성 이벤트(Synthetic Base Event) 객체 : 모든 브라우저에서 사용할 수 있는 통합된 규격의 이벤트 객체  
  👉 리액트에서는 합성 이벤트 객체를 제공하므로 브라우저가 서로 달라서 발생하는 문제인 Cross Browsing Issue 에서도 비교적 자유로움!  

#### 📘 State  
: 현재 가지고 있는 형태나 모양을 정의,  
변화할 수 있는 동적인 값  
- 리액트 컴포넌트는 일반적인 변수가 아니라 `State`의 값이 변화했을 때에만 리렌더링이 됨!
- 리액트 컴포넌트는 자신이 갖는 state가 변경되지 않아도 부모 컴포넌트로부터 받는 props의 값이 변경되면 리렌더링됨.
- 부모 컴포넌트가 리렌더링되면 자식 컴포넌트도 리렌더링됨.  

#### 📒 useRef  
: 새로운 Reference 객체를 생성하는 기능  
```javascript
const refObject = useRef()
```  
- 컴포넌트 내부의 변수로 활용 가능  
- Reference 객체는 컴포넌트 내부에서 렌**더링에 영향을 미치지 않아야 하는 되는** 변수를 생성할 때 활용할 수 있음.
- `useRef`를 이용하면 컴포넌트가 렌더링하는 특정 DOM 요소에 접근이 가능하여 해당 요소를 조작하는 것도 가능함!  

#### 📙 React Hooks  
: 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 메서드들
  > 💡이름 앞에 동일한 접두사 `use`가 붙음  
  > - ex) useState : State 기능을 낚아채오는 Hook
  > - ex) useRef : Reference 기능을 낚아채오는 Hook  
  - 함수 컴포넌트 내부에서만 호출 가능
  - 조건문, 반복문 내부에서는 호출 불가 
  - `use` 접두사를 이용해서 나만의 Hook도 제작 가능(Custom Hook)