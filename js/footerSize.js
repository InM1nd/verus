function setFooterHeight() {
  const footer = document.getElementById("footer");
  const vw = window.innerWidth;

  // Проверяем, если ширина окна больше 880 пикселей
  if (vw >= 880) {
    const vh = window.innerHeight;
    footer.style.height = `${vh}px`;
  } else {
    // Можно сбросить высоту футера на меньших экранах
    footer.style.height = "auto"; // или любое другое значение, если нужно
  }
}

document.addEventListener("DOMContentLoaded", setFooterHeight);
window.addEventListener("resize", setFooterHeight);
