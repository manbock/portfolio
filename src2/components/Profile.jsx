import React from 'react'

const Profile = ({img,name,title,isNew}) => {
  // || --> OR연산자: A||B 둘중에 하나라도 참이면 참
  // && --> AND연산자: A && b 둘중에 하나라도 false 이면 false

  // const img=e.img;
  // const name=e.name;
  // const title=e.title;


  //구조분해(destructure)
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