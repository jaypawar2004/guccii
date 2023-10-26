// gsap.to("#page1 svg",{
//     scale:0.1,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         start:"top -7%",
//         end:"top 30%",
//         // markers:true,
//         scrub:3,
    


//     }
// })
// gsap.to("#page1 #pg1-img",{
//     width:"80%",
//     scrollTrigger:{
//         trigger:"#pg1-img",
//         scroller:"body",
//         start:"top 30%",
//         end:"top 50%",
//         // markers:true,
//         scrub:2,
//         duration:0.5


//     }
// })

gsap.to("#page1 svg",{
    scale:0.12,
    marginTop:"-125px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub: 3,
    }
})
gsap.to("#page1 #img-div",{
    marginTop:"300px",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -10%",
    },
})

gsap.to("#page1 #nav h4",{
    visibility: "visible",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -10%",
        scrub:true
    },
})

var pg = document.querySelector("#main")
var point = document.querySelector("#gola")

pg.addEventListener("mousemove",function(dets){
    point.style.left = dets.x+"px"
    point.style.top = dets.y+"px"
})