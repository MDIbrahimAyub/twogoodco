// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")

sidenav.style.right = "-100%";

menubtn.onclick = function () {
    if (sidenav.style.right == "-100%") {
        sidenav.style.right = "0";
        menu.src = "close.png"
    }
    else {
        sidenav.style.right = "-100%";
        menu.src = "menu.png"
    }
}
gsap.from(".nav ul li", {
    y: -20,
    duration: 0.40,
    opacity: 0,
    delay: 0.20,
    stagger: 0.18

})
gsap.from(".logo h1", {
    y: -20,
    duration: 0.40,
    opacity: 0,
    delay: 0.20,
    stagger: 0.28

})
gsap.from(".nav i", {
    y: -20,
    duration: 0.40,
    opacity: 0,
    delay: 0.20,
    stagger: 0.28

})


gsap.from(".content h1", {
    y: 40,
    duration: 0.80,
    opacity: 0,
    delay: 0.60
})

var cursor = document.querySelector(".cursor")
var video = document.querySelector(".video-background")

video.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y
    })
})
