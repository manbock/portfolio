# react router dom 설치

```
npm install react-router-dom
```


# RESTful Routes는 url 패턴을 말한다.
```
  * get: 데이터 가져올때 사용하는 패턴
  * post: 새로운 데이터를 만들때
  * put: 기존 데이터를 수정할때
  * delete: 데이터를 삭제할때
```
![image](https://github.com/manbock/node.js/assets/145514177/74052111-ddc5-4c4d-a754-6d53ffe41466)
```
🎃내가 선택한 상품의 상세페이지로 이동하고자 한다면
  /subjects/:id 방법을 사용하자
  : 이것은 파라미터라는 뜻 --> url로 파라미터값을 넘긴다
  subjects 는 고정적인 값이고 :id 는 가변적인 값이다 --> 어떤임의의 값을 만들어서 개별 아이템으로 넘길 수 있다
```
