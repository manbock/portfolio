#🎃 react 페이지 나누기 리액트 라우터(React Router)

#Router 공식 사이트 -> https://reactrouter.com/en/main

#1) 설치하기 -- npm install react-router-dom

* 라우터를 임포트하고 index.js 의 App을 BrowserRouter태그로 싸줘야함
![image](https://github.com/manbock/node.js/assets/145514177/d88a2219-50c8-43bf-95ab-75bc845a474f)




* App.js 에서 사용할때 루트들은  Routes태그 안에 작성해야한다.
![image](https://github.com/manbock/node.js/assets/145514177/be8d409e-6a1d-4a8b-9c50-b0ee7853ce7c)


#🎃 링크로 페이지간 연결하기

# Link는 a태그로 변환된다. 라우터간에 이동할수 있게 도와주는 링크
```
import {Link} from 'react-router-dom' 를 위에 적는다
Link 태그를 만들고 속성 to에 값으로 설정해둔 패스이름을 넣어준다
```

![image](https://github.com/manbock/node.js/assets/145514177/9cd4613f-aba4-4ff0-a7c9-ef9845b05e02)



#🎃버튼을 클릭해서 페이지로 갈때(함수안에서 사용하는 방법)
