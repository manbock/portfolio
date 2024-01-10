gsap.registerPlugin(ScrollTrigger) 

let tl=gsap.timeline({
   scrollTrigger:{
      trigger:".part-2",
      start:"top 90%",
      end:"180% 90%",
      scrub:true,
      markers:true,
   }
})

tl.to(".strip-r",{marginLeft:"-50%"})
tl.to(".strip-l",{marginLeft:"0%"},"<")