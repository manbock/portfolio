#폴더 src 참조

# react에서는 데이터를 바꿀 수 있는 값이 변할때마다 실시간 UI를 변경해 달라고 알려야한다.
#  그럴때 사용하는것이 useState()이다.
```
const[num, setNum] = useState(0)

num = 변수처럼 사용되는 값
setNum = num 을 제어하는 함수
0 = num의 값
``` 
![image](https://github.com/manbock/node.js/assets/145514177/2bd14bd5-1f70-4664-971f-630f1d990f6d)

#부분적으로 값 받기
![image](https://github.com/manbock/node.js/assets/145514177/2e682eec-1414-4a89-8e8d-7b127a607413)


#🎃구조분해
```
import React from 'react'

const Profile = ({img,name,title,isNew}) => {
  // || --> OR연산자: A||B 둘중에 하나라도 참이면 참
  // && --> AND연산자: A && b 둘중에 하나라도 false 이면 false

  // const img=e.img;
  // const name=e.name;
  // const title=e.title;


  //구조분해 destructure
  // const {img,name,title,isNew}=props;

  return (
    <div className='profile'>
      <img src={img} alt="avatar" />
      {isNew?<span className='new'>신입</span>:""}
      {isNew && <span className='new'>신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  )
}

export default Profile
```
