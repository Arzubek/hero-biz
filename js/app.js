var swiper = new Swiper(".mySwiper", {
  loop: true,
  infinite: true,
  autoplay: true,
  slidesPerView: 6,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 6,
    },
    992: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 4,
    },
    320: {
      slidesPerView: 2,
    },
  },
});
var swiper = new Swiper(".swiper-users", {
  spaceBetween: 10,
  loop: true,
  infinite: true,
  autoplay: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
