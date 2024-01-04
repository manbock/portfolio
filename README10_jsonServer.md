# Json server 사용하기
--> 작은 서버를 만드는것 --> api는 소통할때 제일 많이 쓰이는 파일타입

https://www.npmjs.com/package/json-server
![image](https://github.com/manbock/node.js/assets/145514177/54fdb390-8f5b-4c30-aa4e-ba29cc458761)
https://www.npmjs.com/package/json-server#getting-started

### 1) npm으로 설치
```
npm install -g json-server
```

### 2) 루트 자리에 .json파일만들고 아래내용 붙여넣기
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

json서버 실행 --> 기본적으로 3000번에서 시작하는데
```
json-server --watch db.json --port 3004
```
