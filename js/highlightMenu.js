const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav_link");

function highlightMenu() {
  let scrollPosition = window.scrollY;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50; // Чуть смещаем для корректной активации
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      menuLinks.forEach((link) => link.classList.remove("active"));

      menuLinks[index].classList.add("active");
    }
  });
}

// Запускаем функцию при прокрутке
window.addEventListener("scroll", highlightMenu);
