
# useEffect

# useEffect(()=>{},[])

## useEffect(()=>{},[]) ==> 배열이 비어있을 경우에는 component가 실행될때 처음 한번만 실행된다.
![image](https://github.com/manbock/node.js/assets/145514177/8676a0fb-0916-43b3-9f45-1bf388c86e00)


## useEffect(()=>{},[products]) ==> products의 값이 바뀔때마다 useEffect가 실행됨(component가 실행될때 처음 한번 실행된 후.)
![image](https://github.com/manbock/node.js/assets/145514177/ab53213c-fe3a-4631-99eb-9f6b0be16c7e)


## useEffect(()=>{},[products, count]) ==> products와 count중에서 하나라도 값이 바뀔때마다 useEffect가 실행됨(component가 실행될때 처음 한번 실행된 후.)


## useEffect() 가 종료되는 시점에 데이터가 변경된다.
![image](https://github.com/manbock/node.js/assets/145514177/36b5a87f-b864-4ceb-945c-e0c3786aac82)

# 이전값 prev

setNum((이전값)=>이전값 + 1)

```
import { useState } from 'react';
import './App.css';

function App() {
  // let num=0;
  let [num, setNum]=useState(0)
  return (
    <div className='counter'>
      <span className='number'>{num}</span>
      <button className='button' onClick={()=>{
        //아래 코드 세줄은 값의 변화가없다
        //상태값은 함수가 종료후 다시 실행될때 반영되기 때문이다.
        // setNum(num + 1)
        // setNum(num + 1)
        // setNum(num + 1)

        //prev는 이전값을 가지고 있음
        setNum((prev)=>prev + 1)//1
        // setNum((prev)=>prev + 1)//2
        // setNum((prev)=>prev + 1)//3

        }}>1씩증가</button>

        <form action="#">
          <input type="text" />
        </form>
    </div> 
  );
}

export default App;
```
