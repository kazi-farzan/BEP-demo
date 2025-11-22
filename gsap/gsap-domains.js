gsap.from("#page3 #grid1",{
    rotate: 360,  
    duration:2, 
    scrollTrigger:{
      trigger:"#page3 #grid1",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    }
  });
  gsap.to("#page3 #grid1",{
    scale:1.3,
    yoyo:true,
    repeat:1,
    duration:2, 
    scrollTrigger:{
      trigger:"#page3 #grid1",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    }
  });
  gsap.from("#page3 #grid1 .box-small",{
    rotate: -360,
    duration:2, 
    scrollTrigger:{
      trigger:"#page3 #grid1 .box-small",
      scroller: "body",      
      start: "top 40%",
      end: "top 10%",
      scrub: 2.1,
    }
  });