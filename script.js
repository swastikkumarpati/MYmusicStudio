

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4anim(){
    var elemc = document.querySelector("#elemcont")
var fiximgg = document.querySelector("#fiximg")
elemc.addEventListener("mouseenter",function(){
   fiximgg.style.display = "block"
})
elemc.addEventListener("mouseleave",function(){
    fiximgg.style.display = "none"
 })

 var elems = document.querySelectorAll(".elem")
 elems.forEach(function (e) {
    e.addEventListener("mouseenter", function() {
        var image = e.getAttribute("data-image")
        fiximgg.style.backgroundImage = `url(${image})`
    
     })
 })
}
function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      
      });
}

function menuAnimation(){
    var flag=0
    var full = document.querySelector("#fullscreen1")
    var menu = document.querySelector("#nav h3")
    var navimg=  document.querySelector("#nav img")
    menu.addEventListener("click", function(){
    
       if(flag==0){
        full.style.top = 0
        navimg.style.opacity = 0
        flag=1
                  }
       else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        flag=0
           }
    })
}

menuAnimation()
swiperAnimation()
page4anim()

var loader = document.querySelector("#loader")


setTimeout(function(){
  loader.style.top = "-100%"
},3500)
