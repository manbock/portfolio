//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function(){
   let bar=$(this).position().left;
   //.position():jquery메서드 중 하나로, 요소의 위치정보(top,left)를 반환.
   console.log(bar)
   let widnum=$(this).width();
   $('.mainmenu .bar').animate({
      'left':bar + "px",
      'width':widnum + "px",
      'opacity':1,
   },300)
})

// ------------------전체 애니메이션--------------------

$('.animate').scrolla({
   // default
   mobile: false, // 모바일 활성화 여부
   once: false, // 스크롤시 반복실행 여부
   animateCssVersion: 4 // animate.css 버전
});

//path의 길이(px)를 알아내기
let pathH=document.querySelector('.st0');
let pathHeight=pathH.getTotalLength();
console.log(pathHeight)

//----------------------menuOpen----------------------
// $('.menuOpen .open').on("click",()=>{})
$('.menuOpen .open').click((e)=>{
   e.preventDefault();
   $('.menuOpen .menuWrap').addClass('on')
})
$('.menuOpen .close').click((e)=>{
   e.preventDefault();
   $('.menuOpen .menuWrap').removeClass('on')
})

//service 영역시 배경색 바꾸기
$(window).scroll(function(){
   let scrollTop=$(this).scrollTop(); 
   //scrollTop = 전체 문서에서 현재 페이지 위의 높이값
   console.log(scrollTop);
   //
   let offset=$('.service').offset().top; 
   //service영역의 top이 viewport의 top에 위치하는지점
   // => 전체문서에서 service영역 전까지의 높이값을 추출
   if (scrollTop>=offset) {
      $('body').addClass('on')
   }else{
      $('body').removeClass('on')
   }
})