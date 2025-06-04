new Swiper(".swiper", {
  spaceBetween: 24,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },

    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 24,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});
