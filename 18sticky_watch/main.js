let scrollBody=document.querySelector(".fix_motion"),
    scrollHeight, //스크롤의 높이
    sectionOffsetTop,
    sectionScrollTop,
    scrollRealHeight, //실제로 스크롤 해야할 높이
    winScrollTop, //스크롤바의 높이를 담을 변수
    scrollPercent,//스크롤 백분율
    percent;

// console.log(scrollBody)


let isMobile;

scrollFuc=()=>{
   setProperty();
   if(isMobile){
      contentInMobile()
   }else{
      contentIn();
   }
}

function setProperty(){
   isMobile=window.innerWidth<=1024?true:false;
   scrollHeight=scrollBody.offsetHeight;
    //객체(fix_motion)의 높이

   sectionOffsetTop=scrollBody.offsetTop;
   //객체의 top좌표

   scrollRealHeight=scrollHeight - window.innerHeight
   //마지막페이지 뺀 전체높이

   winScrollTop=pageYOffset;
   sectionScrollTop=winScrollTop - sectionOffsetTop
   //화면top-객체top값

   // console.log(sectionScrollTop)//섹션 꼭대기 기준 탑값
   //↪ .fix_motion 기준 탑값 구하는 식

   scrollPercent=sectionScrollTop/scrollRealHeight
   percent=scrollPercent * 100 
   console.log(percent)

} 

function contentIn(){
   let deviceImg = document.querySelectorAll('.slide figure')
   let imgWidth = deviceImg[0].offsetWidth //figure태그 하나의 넓이값

   if(percent>=12 && percent<37){
      document.querySelector('.text_box .text01').classList.add('active')
      imageChange(imgWidth*0)
   }
   if(percent>=37 && percent<62){
      document.querySelector('.text_box .text02').classList.add('active')
      imageChange(imgWidth*1)
   }
   if(percent>=62 && percent<88){
      document.querySelector('.text_box .text03').classList.add('active')
      imageChange(imgWidth*2)
   }
   if(percent>=88){
      document.querySelector('.text_box .text04').classList.add('active')
      imageChange(imgWidth*3)
   }
   if(percent<12 ){
      document.querySelector('.text_box .text01').classList.remove('active')
      document.querySelector('.text_box .text02').classList.remove('active')
      document.querySelector('.text_box .text03').classList.remove('active')
      document.querySelector('.text_box .text04').classList.remove('active')
   }
}


function imageChange(movex){
   let img=document.querySelector('.slide_wrap .slide')
   img.style.transform=`translateX(${-movex}px)`
}


function contentInMobile(){
   let deviceImg=document.querySelectorAll('.slide figure');
   let imgWidth=deviceImg[0].offsetWidth;//이미지 하나의 넓이값
  

   if(percent>=12 && percent < 37){
       document.querySelector('.text_box p.text01').classList.add('active')
       document.querySelector('.text_box p.text02').classList.remove('active')
       document.querySelector('.text_box p.text03').classList.remove('active')
       document.querySelector('.text_box p.text04').classList.remove('active')
       imageChange(imgWidth*0)
   }
   if(percent>=37 && percent < 62){
       document.querySelector('.text_box p.text02').classList.add('active')
       document.querySelector('.text_box p.text01').classList.remove('active')
       document.querySelector('.text_box p.text03').classList.remove('active')
       document.querySelector('.text_box p.text04').classList.remove('active')
       imageChange(imgWidth*1)
   }

   if(percent>=62 && percent < 88){
       document.querySelector('.text_box p.text03').classList.add('active')
       document.querySelector('.text_box p.text01').classList.remove('active')
       document.querySelector('.text_box p.text02').classList.remove('active')
       document.querySelector('.text_box p.text04').classList.remove('active')

       imageChange(imgWidth*2)
   }
   if(percent>=88){
       document.querySelector('.text_box p.text04').classList.add('active')
       document.querySelector('.text_box p.text01').classList.remove('active')
       document.querySelector('.text_box p.text02').classList.remove('active')
       document.querySelector('.text_box p.text03').classList.remove('active')

       imageChange(imgWidth*3)
   }

   if(percent<12){
       document.querySelector('.text_box p.text01').classList.remove('active')
       document.querySelector('.text_box p.text02').classList.remove('active')
       document.querySelector('.text_box p.text03').classList.remove('active')
       document.querySelector('.text_box p.text04').classList.remove('active')
   }

}













window.addEventListener("scroll",()=>{
   scrollFuc()
})
scrollFuc()