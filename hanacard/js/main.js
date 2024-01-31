//🚩slick
let eb_slider = $('.eb_slider_list')
eb_slider.slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover: false, //pauseOnHover:기본값 true (마우스를 올리면 자동재생 멈춤)
  fade: true,
});

//🚩정지, 재생버튼

//✅제이쿼리 형식 stop
$('.event_box2 .page_act .btn_stop').click(function (e) {
  e.preventDefault(); //a태그 #때문에 튕김현상이 생기는 것 막아줌
  if ($('.event_box2 .page_act').hasClass('on')) {
    //on이라는 클래스명을 가지고 있다면 true,없다면 false
    $('.event_box2 .page_act').removeClass('on');
    eb_slider.slick('slickPause');
  }
})

//✅자바스크립트 형식 stop
//선택자.addEventListerner('click',function(){})
//선택자.onclick(function(){})


//✅제이쿼리 형식 play
//  !-->not , !!-->긍정
$('.event_box2 .page_act .btn_play').click(function (e) {
  e.preventDefault();
  if (!$('.event_box2 .page_act').hasClass('on')) {
    $('.event_box2 .page_act').addClass('on')
    eb_slider.slick('slickPlay');
  }
})

$('.card').slick({
   arrows: false,
   dots: true,
   autoplay: true,
   pauseOnHover: false, //pauseOnHover:기본값 true (마우스를 올리면 자동재생 멈춤)
   fade: true,
})

//🚩정지, 재생버튼

//✅제이쿼리 형식 stop
$('.event_box3 .page_act .btn_stop').click(function (e) {
   e.preventDefault(); //a태그 #때문에 튕김현상이 생기는 것 막아줌
   if ($('.event_box3 .page_act').hasClass('on')) {
     //on이라는 클래스명을 가지고 있다면 true,없다면 false
     $('.event_box3 .page_act').removeClass('on');
     $('.card').slick('slickPause');
   }
 })
 
 //✅자바스크립트 형식 stop
 //선택자.addEventListerner('click',function(){})
 //선택자.onclick(function(){})
 
 
 //✅제이쿼리 형식 play
 //  !-->not , !!-->긍정
 $('.event_box3 .page_act .btn_play').click(function (e) {
   e.preventDefault();
   if (!$('.event_box3 .page_act').hasClass('on')) {
     $('.event_box3 .page_act').addClass('on')
     $('.card').slick('slickPlay');
   }
 })

 //🎃life 버튼
 let tab=$('.life_menu ul li');
 let menu=$('.life_style ul li');

 tab.mouseover(function(){
  let target= $(this);
  let index=target.index();
  console.log(index)
  menu.css({opacity:0})
  menu.eq(index).css({opacity:1})
 })

 