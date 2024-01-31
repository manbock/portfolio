import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';

//🎃useState라는 함수를 통해 react에게 값이 변했음을 알려주는 유일한 방법.
//(useState는 React가 제공하는 React hook(훅))
function App() {
  // const counter=useState(0)[0];
  // const setCounter=useState(0)[1];
  let num=0;
  const [counter, setCounter]= useState(0);
  //const [값, 값을다룰 함수]= useState(값의 초기값);
  //0은 매개변수 counter의 초기값이 0이라는 뜻
  //state를 바꾸면 ui를 다시 렌더링한다.

  const increase =function(){
    num = num + 1
    setCounter(counter + 1)
    //state는 함수가 끝날때 바뀌기때문에 아직은 그대로임.
  }
  


  return(
    <>
    <div>{num}</div> {/*<<< 안바뀜 */}
    <div>{counter}</div>{/*<<< useState써서 바뀜 */}
    <button onClick={increase}>클릭</button>
    </>
  );
}

export default App;
