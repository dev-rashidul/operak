// Mobile Menu JavaScript

const menu = document.querySelector(".main-menu")
const bars_icon = document.getElementById("bars-icon")
const cross_icon = document.getElementById("cross-icon")


bars_icon.addEventListener("click", ()=>{
    bars_icon.style.display = "none"
    menu.classList.add("active")
    cross_icon.style.display = "block"
})

cross_icon.addEventListener("click", ()=>{
    cross_icon.style.display = "none"
    menu.classList.remove("active")
    bars_icon.style.display = "block"
})


// Sliders JavaScript

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:25,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})