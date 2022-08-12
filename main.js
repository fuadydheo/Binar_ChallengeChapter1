$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 32,
  autoWidth: true,
  nav: true,
  dots: false,
  stagePadding: 20,
  navText: ["<i class='uil uil-angle-left-b'></i>", "<i class='uil uil-angle-right-b'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      autoWidth: false,
      items: 1,
    },
    1024: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  },
});

const accordions = document.querySelectorAll(".faq___accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});

//show and hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);
