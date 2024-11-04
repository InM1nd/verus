const animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: true,
  autoplay: false, // Отключаем автоматическое воспроизведение
  path: "../lottie/Arrow.json",
});

const button = document.getElementById("hover-button");
button.addEventListener("mouseenter", () => {
  animation.goToAndPlay(0); // Запускаем анимацию с начала
});

button.addEventListener("mouseleave", () => {
  animation.stop(); // Останавливаем анимацию при уходе курсора
});
