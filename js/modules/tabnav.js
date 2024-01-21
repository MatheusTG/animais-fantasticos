export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "active";
  }

  activeTab(index) {
    this.tabContent.forEach((div) => {
      div.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  // Adiciona os eventos a tabs
  addTabNavEvent() {
    this.tabMenu.forEach((value, index) => {
      value.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
