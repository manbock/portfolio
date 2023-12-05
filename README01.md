# 1_node.js 설치
* 자바스크립트를 브라우저 밖에서도 동작할 수 있도록 하는 런타임환경
* Node.js가 제공하는것이 npm(Node Package Manager)
* npm이란 node.js로 만들어진 필요한 모듈을 다운받고 관리해줌. 다른 개발자가 만들어둔 유용한 nodejs로 만들어진 툴로 가져다 쓸 수 있음
* npm을 이용한 유용한 라이브러리를 다운받을 예정("개발은 가져다쓰는게 절반이다")

cmd 창을연다

* node.js 사이트에서 설치파일을 다운받고 설치한다.
* cmd 창에서

  ```
  node -v
  ```
![image](https://github.com/manbock/node.js/assets/145514177/b2381b24-f601-47b7-b117-9db377c1e55b)
를 입력했을때 버전이 나오면 설치완료.


* node.js를 설치하면 npm이 자동으로 설치됨
* npx는 npm이 설치될때 함께 설치가된다.
* npm --> 외부 라이브러리를 쉽게 설치하고 버전을 관리 해준다. --> package.json를 만들게 된다.
* npx --> 라이브러리를 개별적으로 실행하고자 할때 사용하는것임

# 1. 폴더 생성
## - 프로젝트를 만들 폴더를 만든다 ex)minsoo-react
# 2. 리액트에서 필요한 패키지를 자동으로 설치해 주는 명령어 입력
```
npx create-react-app my-app // my-app 자리에 내가 쓸 폴더명
cd my-app // 방금 만든 폴더로 진입
npm start // 폴더안에 소스 실행
```

# SPA:Single Page Application
 - 페이지가 여러개인 것처럼 보이지만, 사실 하나인 어플리케이션
 - 페이지를 매번 새로 가져올 필요 없음, 웹사이트를 모바일처럼 사용할 수 있음.




