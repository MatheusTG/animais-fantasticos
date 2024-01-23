export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.animaScroll = this.animaScroll.bind(this)
  }

  animaScroll() {
    const windowMetade = window.innerHeight * 0.6;
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add("active");
      }
    });
  }

  init() {
    this.animaScroll()
    window.addEventListener("scroll", this.animaScroll);
  }
}
