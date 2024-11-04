var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  breakpoints: {
    1920: {
      slidesPerView: 3.1, // Показывает часть третьего слайда
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
