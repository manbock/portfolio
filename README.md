# 정규표현식
# /regiex/ ==> Regular expression의 약자

# 언제 사용하는가?
 - 텍스트에서 우리가 원하는 특정한 패턴을 찾을 때 ex)전화번호, 웹사이트 주소, 이메일형식.. 등등
 - 사용자가 입력한 텍스트가 이메일이나 패스워드처럼 특정한 패턴에 부합하는지 유효성검사를 할 때
 - 정규식은 문자를 검사하고자 할 때 사용하는 식이다.

# 정규식은 /로 시작해서 "나는 정규표현식"임을 나타낸다
 - /찾을 패턴/

 - /regiex/i
 - i는 어떤 옵션에 따라 검색할지 활용하는 플래그

# 문법
 1) Groups and ranges
  - |   : 또는
  - ()  : 그룹
  - []  : 문자셋, 괄호안의 어떤 문자든
  - [^] : 부정 문자셋, 괄호안의 문자 제외할때
  - (?:) : 찾지만 기억하지는 않음

![image](https://github.com/manbock/regiex/assets/145514177/a6410391-56d8-4431-9fb7-ee9cf0c36e0d)

![image](https://github.com/manbock/regiex/assets/145514177/f372a942-2734-4d5c-9149-d6e0be4ad3fe)

# S로 시작하고 중간글자가 av 또는 har 가 들어가고 e로 끝나는것을 찾음 
![image](https://github.com/manbock/regiex/assets/145514177/fc7b6721-45d8-43d4-a11b-59003662a1f8)

#찾아지기는 하지만 그룹으로 만들고 싶지 않다면 사용 
![image](https://github.com/manbock/regiex/assets/145514177/da961d14-5c59-42be-9082-30fceec424aa)



# gr로 시작하고 a또는e또는d가 포함되고 y로 끝남
# [aed] --> 대괄호 안에 글자중 하나라도 만족하는것을 찾으라는 의미
![image](https://github.com/manbock/regiex/assets/145514177/07c7bc86-b46b-42b0-9226-6ac318477399)

![image](https://github.com/manbock/regiex/assets/145514177/0084dace-e2d1-4cbe-8322-139e4cd867f1)
![image](https://github.com/manbock/regiex/assets/145514177/026ffff1-08ab-4212-968b-23a223bb6146)


