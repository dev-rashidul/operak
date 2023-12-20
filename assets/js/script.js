// Mobile Menu JavaScript

const menu = document.querySelector(".main-menu");
const bars_icon = document.getElementById("bars-icon");
const cross_icon = document.getElementById("cross-icon");

bars_icon.addEventListener("click", () => {
  bars_icon.style.display = "none";
  menu.classList.add("active");
  cross_icon.style.display = "block";
});

cross_icon.addEventListener("click", () => {
  cross_icon.style.display = "none";
  menu.classList.remove("active");
  bars_icon.style.display = "block";
});

// Car Details Sliders JavaScript

$(".car-details-slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 20,
      margin: 15,
    },
    600: {
      items: 1,
    },
  },
  navText : ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
});

// Car Details Small Sliders JavaScript

$(".car-details-small-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 5,
  responsive: {
    0: {
      items: 4,
      stagePadding: 15,
    },
    767: {
      stagePadding: 0,
    },
  },
  navText : ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
});

// Sliders JavaScript

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  nav: true,
  responsive: {
    0: {
      items: 1,
      stagePadding: 40,
    },
    600: {
      items: 2,
      stagePadding: 50,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
