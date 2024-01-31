
#  JSX문법

https://react.dev/learn

- 컴퍼넌트의 return()에서는 반드시 하나의 태그로 둘러싸여 있어야한다 (태그 한덩이만 있어야함)
- 태그대신 <> </>   --> Fragment를 사용할 수 있다.
- class명을 className="클래스명"
- javaScript 코드를 JSX 문법에서 사용할때는 {쓸내용} 형식으로 사용해야한다.(안쓰면 문자로 출력됨)
- ![image](https://github.com/manbock/node.js/assets/145514177/b4764c3e-f3c3-42ae-a52e-1e004e67281a)



     
## 🎃인라인스타일로 css를 작성할때
- 밖의 {}  -> 스크립트를 사용한다는 의미
- 안의 {}  -> 객체를 사용한다는 의미
- <div style={{width:"300px",height:"200px"}}>추가하기</div>

```
import "./App.css";

function App() {
  const name = "댕댕이";
  return (
    <>
      <div className="App">
        <p>{name}시작하기</p>
      </div>
      <div style={{ width: "300px", height: "200px" }}>추가하기</div>
    </>
  );
}
```

```
import "./App.css";

function App() {
  const name = "댕댕이";
  const list = ["기침", "감기", "약"];
  return (
    <>
      <h1 className="dog">{name}주제에 나보다 팔자가 좋구나</h1>
      <h1 className="dog">{`${name}주제에 나보다 팔자가 좋구나`}</h1>
      <ul>
        <li>기침</li>
        <li>감기</li>
        <li>약</li>
      </ul>
      <ul>
        {/*{list.map((item) => {
          return <li>{item}</li>;
        })} */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: "300px", height: "300px" }}
        src="https://mblogthumb-phinf.pstatic.net/MjAxODA2MTlfNzMg/MDAxNTI5Mzc2MTA1MjUw.u0AuI2S98eAwaT2U43VcA7xT-NP4zf0CzL2qiTvg8Nog.bLqtNdyv5WQMfilqzgt0saG3dhhBUS_S8Hh6LVMXTiog.PNG.jsrwnmejs/20180619113123.png?type=w420"
        alt="img"
      ></img>
    </>
  );
}

export default App;
```
