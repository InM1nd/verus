const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");
const logo = document.querySelector(".logo");
const logoMobile = document.querySelector(".logo_mobile"); // Select the mobile logo

window.addEventListener("scroll", () => {
  const logoRect = logo.getBoundingClientRect(); // Get logo's position

  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect(); // Get section's position
    const isDark = section.classList.contains("dark");

    // Check if the logo intersects with the section
    if (
      logoRect.bottom >= sectionRect.top && // Logo bottom touches section top
      logoRect.top <= sectionRect.bottom // Logo top touches section bottom
    ) {
      console.log("Logo intersects with a section:", section); // Debugging output
      // Change logo color
      logo.classList.toggle("white-logo", isDark);

      if (logoMobile) {
        console.log("Toggling logo_mobile color"); // Debugging output
        logoMobile.classList.toggle("white-logo", isDark); // Change mobile logo color
      }
    }

    // Change link colors
    links.forEach((link) => {
      const linkRect = link.getBoundingClientRect(); // Get link's position

      // Check if the link intersects with the section
      if (
        linkRect.top >= sectionRect.top &&
        linkRect.bottom <= sectionRect.bottom
      ) {
        console.log("Link intersects with a section:", link); // Debugging output
        // Change link color
        link.classList.toggle("dark-link", isDark);
      }
    });
  });
});
