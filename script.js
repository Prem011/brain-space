gsap.from(".page1 > #box",{
    rotate: 360,
    duration: 2,
    // repeat: -1,
    // yoyo:true,
})

gsap.from(".page3 #box",{
    rotate:180,
    duration: 2,
    scale:0,  
    scrollTrigger: ".page3 #box" // one way of doing the thing {simple way}  
})

gsap.from(".page2 #box",{
    rotate:360,
    duration: 2,
    scale:0, 
    //advance way of using the scroll trigger thing 
    scrollTrigger:{
        trigger: ".page2 #box",
        scroller: "body",
        markers : true, //this property is for the developers
        start : "top 60%",
        end : "top 30%",
        scrub : true // or scrub value can be in b/w 1 to 5 (for smoothing the effect of the animations it is being used)
    }

})