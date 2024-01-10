let stageEle=document.querySelector('.stage'),
    houseEle=document.querySelector('.house'),
    maxScrollValue, //실제 스크롤이 움직이는 값
    mousePos={x:0,y:0};


function resizeHandler(){
   maxScrollValue=document.body.offsetHeight - window.innerHeight * 2
}
window.addEventListener('scroll',function(){
   let page1=document.querySelector('.first-page')
   let page1Height=page1.offsetHeight
   let yoffset=pageYOffset - window.innerHeight
   let scrollPer= yoffset / maxScrollValue;
   console.log(scrollPer)
   let zMove=scrollPer * 920 - 790
   if(pageYOffset >= page1Height){
      houseEle.style.transform=`translateZ(${zMove }vw)`
   }
})

window.addEventListener('mousemove',function(e){
   mousePos.x=(e.clientX / window.innerWidth) * 5;
   mousePos.y=-(e.clientY / window.innerHeight) * 5;
   stageEle.style.transform=`rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`
})

window.addEventListener("resize",resizeHandler)
resizeHandler()