const lenis = new Lenis({
   duration:1.2,
   easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// --------------------------------------------

let backColor = document.querySelectorAll('[data-bgcolor]');
//속성 data-bgcolor 있는 요소들을 배열로 부름.
console.log(backColor)

backColor.forEach((colorSection,i)=>{
  //coloerSection에는 요소, i에는 인덱스 번호가 들어옴
  let prevBg = i === 0? "":backColor[i - 1].dataset.bgcolor;

  ScrollTrigger.create({
    trigger:colorSection,
    start:'top 50%',
    end:'bottom 5%',
    markers:false,
    onEnter:()=>gsap.to("#contents",{
      backgroundColor:colorSection.dataset.bgcolor
    }),
    onLeaveBack:()=>gsap.to("#contents",{
      backgroundColor:prevBg
    }),
  })
})

const horSection=gsap.utils.toArray(".port_desc .port");
//모든요소들을 horSection이라는 변수에 배열로 저장한다.
// console.log(horSection)

const horiz=gsap.to(horSection,{
  // x:(- 99 * (horSection.length - 2))+"%",
  xPercent: - 99 * (horSection.length - 2),
  scrollTrigger:{
    trigger:'.port_desc',
    start:'top 20%',
    end:'+=5000',   //애니가 시작되는 지점에서 5000px 떨어진 지점
    markers:false,
    scrub:1.5, //관성 수치 높을수록 미끄러짐
    pin:true,

  }

})