

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


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
