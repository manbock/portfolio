//전체화면 부드럽게 움직이기


const lenis = new Lenis({
   duration:1.5
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

//영역으로 이동하면 그에 해당하는 메뉴에 클래스명을 추가하기
window.addEventListener('scroll',()=>{
   // let scrollTop = window.pageYOffset;
   let scrollTop = window.scrollY;
   // console.log(scrollTop)

   const parallaxItem=document.querySelectorAll('.cont_item');
   const parallaxNav=document.querySelectorAll('nav ul li');

   parallaxItem.forEach((element,index)=>{
      if(scrollTop>=element.offsetTop - 100){
         parallaxNav.forEach((li)=>{li.classList.remove('active')})
         parallaxNav[index].classList.add('active')
      }
   })
})

const bar = document.querySelector('.scroll-indicator');

window.onscroll=()=>{
   //document.documentElement.scrollHeight -> html 문서의 전체 높이값
   let winScroll=document.documentElement.scrollHeight ;
   let height= winScroll - window.innerHeight; //실제 스크롤 되는 높이값
   let scrolled = window.scrollY / height * 100
   console.log(scrolled)
   bar.style.width= scrolled + "%"
}