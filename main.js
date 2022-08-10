$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 32,
  autoWidth: true,
  nav: true,
  dots: false,
  stagePadding: 20,
  navText: ["<i class='uil uil-angle-left'></i>", "<i class='uil uil-angle-right'></i>"],
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
