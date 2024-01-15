function loco(){

    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();

function show_img(){

    
    var fixed=document.querySelector(".fixed_img");
    var elm= document.querySelector(".elm_container");
    elm.addEventListener("mouseenter",function(){
        
        fixed.style.display="block";
    });
    elm.addEventListener("mouseleave",function(){
        
        fixed.style.display="none";
    })
var elm=document.querySelectorAll(".elm");
elm.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img= e.getAttribute("data_img");
        fixed.style.backgroundImage=`url(${img})`;
    })
    
})

}
show_img();
function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiper();

var mouseFollower=document.querySelector(".cursor");
var move=document.querySelector(".main");
move.addEventListener("mousemove",function(e){
    gsap.to(mouseFollower,{
        x:e.x,
        y:e.y
    })
})

gsap.registerPlugin(ScrollTrigger);
function gsapAnim(){
    gsap.to(".right h1 span",{
        y:0,
        delay:.2,
        duration:.8,
        stagger:0.2,
        ease:"power1"
    })
    gsap.from(".page1 video",{
        width:0,
        scrollTrigger:{
            trigger:".page1",
            // markers:true,
            scrub:2
        }
    })
    gsap.to(".page3 .elm h2",{
    y:0,
    stagger:"0.2",
    duration:1,
    ease:"power1",
    scrollTrigger:{
        trigger:".page3",
        scrub:2,
        // markers:true,
        start:"50% 100%",
        end:"50% 40%"
    }
})
gsap.from("footer h1",{

    scale:0,
    opacity:0,
    duration:1,
    ease:"power1",
    scrollTrigger:{
        trigger:".page5",
        scrub:2,
        // markers:true,
        start:"50% 90%",
        end:"50% 50%"
    }
})

}
gsapAnim();

var full_scr=document.querySelector(".full_scr");
var cut=document.querySelector(".cut")
var menu=document.querySelector(".nav h3");
menu.addEventListener("click",function(){


        full_scr.style.top=0;


})
cut.addEventListener("click",function(){


        full_scr.style.top="-100%";


})