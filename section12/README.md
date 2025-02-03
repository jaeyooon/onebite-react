#### 📚 MPA 방식 vs. SPA 방식  
1. MPA 방식 : 서버가 여러 개의 html 페이지를 가지고 있는 것
- MPA 방식에서 브라우저가 페이지를 요청했을 때 미리 완성되어 있는 페이지를 응답해주는 방식을 `서버 사이드 렌더링` 이라고 부름!  
> 👉 대다수의 전통적인 웹 서비스들은 MPA 방식으로 서버가 다수의 웹 페이지를 보유하고 있고 브라우저가 요청을 보내게 되면 **서버 사이드 렌더링** 방식으로 미리 만들어진 페이지를 응답함  
- MPA 방식으로 개발된 웹 서비스들은 페이지 이동시에 이전 페이지와 이후 페이지에 공통적인 요소가 있다고 하더라도 원본을 전부 다 제거하고 아예 새로운 html 파일로 처음부터 다시 다 그려냄. 이렇게 이전 페이지를 제거하고 새로운 페이지를 렌더링하는 과정에서 화면이 깜빡이면서 새로고침이 되어 매끄럽지 않은 페이지 이동을 제공하게 됨.  
- 또한 동시에 다수의 사용자가 페이지에 접속할 경우 서버가 겪는 부하게 심해지게 됨.  
🚨 비효율적인 페이지 이동!  

2. react의 SPA 방식 : 효율적인 방식으로 페이지 업데이트 가능!  
- 우리가 작성하는 모든 컴포넌트들과 기타 자바스크립트 코드들은 비트(vite)에 의해서 하나의 자바스크립트 파일로 bundling (묶여서) 브라우저에게 추가로 전달되게 됨. ▶ 브라우저는 이렇게 전달된 bundle file을 직접 실행함으로서 컴포넌트들을 렌더링하게 됨.  
> 👉 bundling 된 자바스크립트 파일에는 리액트 문법으로 작성한 모든 정보들이 다 담겨있기 때문에 결국엔 이 파일을 React App 이라고 부를 수 있음.  
- 브라우저에서 직접 자바스크립트 파일을 실행해서 화면을 렌더링하도록 하는 방식을 클라이언트 측인 브라우저에서 렌더링을 처리한다는 뜻에서 `클라이언트 사이드 렌더링` 이라 함.  
- 페이지 이동이 발생할 때마다 매번 서버에 새로운 페이지를 요청하던 MPA 방식과 달리, SPA는 서버에 아무런 요청도 보내지 않음. 대신에 처음 접속할 때 서버로부터 받았던 React App 을 이용해서 자체적으로 브라우저 내에서 새로운 페이지에 필요한 컴포넌트들로 화면을 교체함. 이렇게 아무런 요청도 없이 페이지들을 이동시킴.
👉 React App에는 모든 페이지, 컴포넌트의 정보가 다 포함되어 있기 때문에 가능!  

> ✨결론적으로 리액트는 SPA 방식으로 작동하기 때문에 전통적인 방식의 웹 서비스보다 더 쾌적하고 빠르게 페이지를 이동할 수 있음!  

#### 📙 페이지 라우팅  
- `<BrowserRouter>`로 App 컴포넌트를 감싸주게 되면 리액트 앱의 모든 컴포넌트들이 페이지 라우팅과 관련된 모든 데이터들을 공급받아서 사용할 수 있게 됨!  
> 💡 동적 경로(Dynamic Segments) : 동적인 데이터를 포함하고 있는 경로  
  - U**RL Parameter** : / 뒤에 아이템의 id를 명시  
  ex) ~/product/1 또는 ~/product/2  
  👉 `useParams` 커스텀 훅을 통해 현재 브라우저에 명시한 url 파라미터의 값을 가져올 수 있음.  
  - **Query String** : ? 뒤에 변수명과 값 명시  
  ex) ~/search?q=검색어  
    ```javascript
    import {useSearchParams} from "react-router-dom";

    const Home = () => {
      const [params, setParams] = useSearchParams();
      console.log(params.get("value"));
      // 👉 useSearchParams 커스텀 훅을 통해 이런식으로 query string의 값을 가져올 수 있음.
      // setParams하는 함수를 호출해서 현재 query string의 값을 수정할 수 있음!

      return <div>Home</div>
    };

    export default Home;
    ```  

#### 📒 폰트, 이미지 설정
- 이미지 최적화 : 한번 불러온 이미지들을 다시 불러오지 않도록 브라우저의 캐쉬를 이용해서 이미지를 최적화하기 위해서는 이미지를 `public` 폴더가 아닌 `src/assets` 폴더에 보관한 다음에 코드상에서 import문을 통해서 불러와야 됨!(**소수의 이미지**를 사용하는 경우)  
> 🚨 이미지가 굉장히 많이 필요한 상황에서는 브라우저 메모리 용량에 과부하가 올 수 있기 때문에 `public` 폴더에 보관하는게 좋을 수 있음.

#### 📗 웹 스토리지(Web Storage)  
: 데이터를 브라우저에 보관하는 방법, 일종의 데이터 베이스  
> 💡 웹 브라우저 내장 DB **Web Storage**  
> - 웹 브라우저에 기본적으로 내장되어 있는 데이터베이스로 별도의 프로그램 설치 필요X, 라이브러리 설치 필요X  
> - 그냥 자바스크립트 내장함수 만으로 접근 가능  
>   - 값을 저장 : localStorage.setItem(key, value)  
>   - 값을 꺼냄 : localStorage.getItem(key)  

- SessionStorage 와 LocalStorage가 있음.  
  - SessionStorage : 브라우저 탭 별로 데이터를 보관   
    - 탭이 종료되기 전에는 데이터 유지(새로고침),  
    - 탭이 종료되거나 꺼지면 데이터 삭제  
  - LocalStorage : 사이트 주소별로 데이터 보관  
    - 사용자가 직접 삭제하기 전까지 데이터 보관  

```javascript
localStorage.setItem("test", 'hello');
localStorage.setItem("person", JSON.stringify({ name: "조재윤" }));   // JSON.stringify는 인수로 전달된 객체를 문자열로 변환시켜줌

console.log(localStorage.getItem("test"));
console.log(JSON.parse(localStorage.getItem("person")));    // JSON.parse는 인수로 전달한 객체 형태의 문자열을 파싱해서 객체로 다시 변환시킴
📌 JSON.parse는 인수로 전달한 값이 undefined이거나 null일때 오류가 발생하므로
---반드시 localStorage로부터 꺼내온 값이 undefined이 아닐 경우에만 JSON.parse의 인수로 전달하도록 주의해야 함!

localStorage.removeItem("test");
```  

#### 📘 배포하기(Deploy)  
- Vercel : 프론트엔드 개발자를 위한 클라우드 서비스, React.js의 확장판 개념인 Next.js를 개발하는 회사  
- Vercel 이용하여 감정 일기장 배포  
  👉 https://emotion-diary-woad-two.vercel.app