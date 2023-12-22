
#input에 값이 바뀌어도 App.js는 다시 실행되지 않는다. --> 이것을 react로 부터 제어받지 않는다고 해서 uncontroled component라고 한다.

# input안의 내용이 useState의 상태값과 매칭되도록 맞추어 줘야함.

### !! input 태그에서는
e ==> 이벤트 받음 상태의 값을 변경하기위해 setName 함수를 사용하며
사용자가 입력한 값을 상태값으로 적용하기위해 e.target.value 를 사용한다.
```
onChange={(e)=>{setName(e,target,value)}}
```

# form은 새로고침이 일어나는 속성을 가지고 있다.
새로고침을 막기위해 onSubmit 함수를 사용하고 e.preventDefault()로 새로고침을 막음.

```
 <form onSubmit={(e)=>{e.preventDefault()}}>
```
![image](https://github.com/manbock/node.js/assets/145514177/d7bb07bc-a9f8-4b5c-9084-4bb77b44bed8)

```jsx
import { useState } from 'react';
import './App.css';

function App() {
const [name,setName]=useState("")
  
  return (
    <div className='counter'>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <label htmlFor="name">이름</label>
        <input type="text" id='name' name='name' value={name} 
        onChange={(e)=>{
          console.log(e.target.value)
          setName(e.target.value)
        }}/>
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
```
