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

const parallaxItem = document.querySelectorAll('.cont_item')
const parallaxNav = document.querySelectorAll('nav ul li')

//🎃올릴때만 메뉴 뜨게하기
let lastScrollTop=0;

function scrollNav(){
   document.querySelectorAll('nav ul li a').forEach((item, index)=>{
      item.addEventListener('click',(e)=>{
         e.preventDefault()
         document.querySelector(item.getAttribute('href')).scrollIntoView(
            {behavior:"smooth"}
         )
      })
   })
}

function scroll(){
   //let scrollTop=window.pageYOffset; 밑에거랑 같은 말.
   let scrollTop=window.scrollY;

   if(scrollTop<=lastScrollTop){
      document.querySelector('nav').classList.add('show')
   }else{
      document.querySelector('nav').classList.remove('show')
   }
   lastScrollTop = scrollTop;

   parallaxNav.forEach((ele, i)=>{
      if(ele.offsetTop){
         
      }
   })
}



window.addEventListener('scroll',scroll)
scrollNav()














// 🎃메뉴바

const bar = document.querySelector('.scroll-indicator');

window.onscroll=()=>{
   //document.documentElement.scrollHeight -> html 문서의 전체 높이값
   let winScroll=document.documentElement.scrollHeight ;
   let height= winScroll - window.innerHeight; //실제 스크롤 되는 높이값
   let scrolled = window.scrollY / height * 100
   //console.log(scrolled)
   bar.style.width= scrolled + "%"
}