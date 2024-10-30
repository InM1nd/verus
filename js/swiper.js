var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.3, // По умолчанию 3.3 слайда
  breakpoints: {
    1280: {
      slidesPerView: 3.3, // При ширине экрана 1280px и больше - 2.3 слайда
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
