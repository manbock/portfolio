function locomotive(){
   gsap.registerPlugin(ScrollTrigger); 
   //ScrollTrigger를 통해 스크롤 애니메이션을 관리하기 위한 도구입니다.
 
 
 /* SMOOTH SCROLL */
 const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#main"),
   smooth: true
 });
 //locoScroll 객체를 생성, 스크롤 관련 동작을 제어하는데 사용됩니다.
 //el: document.querySelector("#main")
 //↪ #main이라는 css선택자로 해당하는 HTML요소를 스크롤 컨테이너로 지정합니다.
 //#main 영역이 LocomotiveScroll이 적용되는 범위이다
 //smooth: true ➡ 부드러운 스크롤을 활성화합니다.
 
 
 locoScroll.on("scroll", ScrollTrigger.update);  
 //LocomotiveScroll의 Scroll 이벤트가 발생할 때 마다 ScrollTrigger의 update함수를 호출합니다. 이것은 스크롤 이벤트와 ScrollTrigger간의 연동을 설정함
 
 ScrollTrigger.scrollerProxy("#main", {
   scrollTop(value) {
     return arguments.length
       ? locoScroll.scrollTo(value, 0, 0)
       : locoScroll.scroll.instance.scroll.y;
   },
   //ScrollTrigger의 scrollerProxy란?
   //↪(스크롤에 대한 인터페이스를 제어/조작)를 설정한다
   //이 부분은 ScrollTrigger가 LocomotiveScroll와 함께 작동하도록 만듬
 
 
   getBoundingClientRect() {
     return {
       left: 0,
       top: 0,
       width: window.innerWidth,
       height: window.innerHeight
     }; //뷰포트의 크기를 반환하는 getBoundingClientRect()함수를 정의함
   },
/*    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed" */
 });
 //pinType은 #main 요소의 스타일 속성이 transform으로 설정되어 있으면 "transform"으로, 그렇지 않으면 "fixed"로 설정함
 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
 //"refresh" 이벤트를 감지하면 locoScroll.update() 함수를 호출하여 LocomotiveScroll을 업데이트합니다. 스크롤 컨테이너나 내용이 동적으로 변경될 때 사용됩니다.
 
 ScrollTrigger.refresh();
 //ScrollTrigger를 초기화하고 설정을 적용합니다.
 
 }
 locomotive();

//---------------------🎃메인메뉴-----------------------
//🚩메인메뉴 
//(function(){})(); ➡ 즉시 실행 함수라고함
window.addEventListener('load',function(){

(function(){


let nav = document.querySelectorAll('nav ul li a')
nav.forEach((ele,i)=>{
   ele.addEventListener('click',(e)=>{
      e.preventDefault();

      document.querySelector(ele.getAttribute("href")).scrollIntoView({behavior:'smooth'})
      
      
   })
})

let parallaxItem=document.querySelectorAll('.cont_item');
parallaxItem[0].classList.add('show')

//영역으로 이동하면 그에 해당하는 메뉴에 클래스명을 추가하기
window.addEventListener('scroll',()=>{
   let scrollTop = window.scrollY;

   const parallaxNav=document.querySelectorAll('nav ul li');


   function scroll(){
      parallaxItem.forEach((element,index)=>{
         if(scrollTop>=element.offsetTop - 100){
            parallaxNav.forEach((li)=>{li.classList.remove('active')})
            parallaxNav[index].classList.add('active')
   
            // section에 애니메이션 입히기 
            element.classList.add('show')
         }
      })
      requestAnimationFrame(scroll)
   }

   scroll()

})




})();

function ani(){
   let parallaxItem=document.querySelectorAll('.cont_item');
   function scroll(){
      let scrollTop = window.pageYOffset;
      
      parallaxItem.forEach((element,index)=>{
         //🚩section에 애니메이션 입히기
         
         let target1=element.querySelector('.sec_img');
         let target2=element.querySelector('.desc');
         
         let offset1=(scrollTop - element.offsetTop) * 0.5
         
         target1.style.transform=`translateY(${offset1}px)`;
         //end section에 애니메이션 입히기
      })
      requestAnimationFrame(scroll)
   }
   scroll();
};
//  ani();

})


//🎃메뉴바
const bar = document.querySelector('.scroll-indicator');

window.onscroll=()=>{
   //document.documentElement.scrollHeight -> html 문서의 전체 높이값
   let winScroll=document.documentElement.scrollHeight ;
   let height= winScroll - window.innerHeight; //실제 스크롤 되는 높이값
   let scrolled = window.scrollY / height * 100
   // console.log(scrolled)
   bar.style.width= scrolled + "%"
}
