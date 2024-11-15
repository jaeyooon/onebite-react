import './App.css'
import Button from './components/Button'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      <Button {...buttonProps} />   {/* spread 연산자 이용 */}
      <Button text={ "카페"}/>
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  )
}

export default App
