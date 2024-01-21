export default function initScrollSuave() {
  const sections = document.querySelectorAll("[data-animation]");

  function animaScroll() {
    const windowMetade = window.innerHeight * 0.6;
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add("active");
      }
    });
  }
  animaScroll();

  if (sections.length) window.addEventListener("scroll", animaScroll);
}
