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
      items: 3,
    },
    1000: {
      items: 2,
    },
  },
});

const accordions = document.querySelectorAll(".faq___accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
