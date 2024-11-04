document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("active");
  document.body.style.overflow = "hidden";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("menu").classList.remove("active");
  document.body.style.overflow = "";
});

var menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("menu").classList.remove("active");
    document.body.style.overflow = "";
  });
});

document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".nav_link");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const sectionId = section.getAttribute("id");

    // Проверяем, есть ли ссылка на секцию в меню
    const link = Array.from(links).find(
      (l) => l.getAttribute("href") === `#${sectionId}`
    );
    if (!link) return; // Пропускаем секцию, если ссылки нет

    // Проверяем, видна ли секция на экране
    if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
      // Убираем класс 'active' у всех ссылок
      links.forEach((link) => link.classList.remove("active"));
      // Добавляем 'active' к ссылке на видимую секцию
      link.classList.add("active");
    }
  });
});
