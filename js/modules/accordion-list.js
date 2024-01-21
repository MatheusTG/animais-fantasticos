export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "active";
  }

  toggleAcordion(value) {
    value.classList.toggle(this.activeClass);
  }

  // Adiciona evento ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((value) => {
      value.addEventListener("click", () => this.toggleAcordion(value));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item
      this.toggleAcordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
