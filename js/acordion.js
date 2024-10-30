const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((faq) => {
  const faqHeader = faq.querySelector(".faq-header");
  const faqIcon = faqHeader.querySelector(".faq-icon"); // Иконка внутри заголовка

  faqHeader.addEventListener("click", () => {
    const openFaq = document.querySelector(".faq-open");

    toggleFaq(faq, faqIcon);

    // Если есть другой открытый FAQ, закрываем его
    if (openFaq && openFaq !== faq) {
      const openIcon = openFaq.querySelector(".faq-icon");
      toggleFaq(openFaq, openIcon);
    }
  });
});

const toggleFaq = (faq, faqIcon) => {
  const faqDescription = faq.querySelector(".faq-desp");

  if (faq.classList.contains("faq-open")) {
    // Закрываем аккордеон
    faqDescription.style.height = "0";
    faq.classList.remove("faq-open");
    faqIcon.classList.remove("ri-subtract-line"); // Убираем минус
    faqIcon.classList.add("ri-add-line"); // Добавляем плюс

    faqDescription.addEventListener(
      "transitionend",
      () => {
        faqDescription.removeAttribute("style");
      },
      { once: true }
    );
  } else {
    // Открываем аккордеон
    faqDescription.style.height = faqDescription.scrollHeight + "px";
    faq.classList.add("faq-open");
    faqIcon.classList.remove("ri-add-line"); // Убираем плюс
    faqIcon.classList.add("ri-subtract-line"); // Добавляем минус
  }
};
