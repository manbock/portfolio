

const lenis = new Lenis({
   duration:1.3
})

lenis.on('scroll', (e) => {
   
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//---------------메인메뉴----------------



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


