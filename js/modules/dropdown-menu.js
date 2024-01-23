import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // Define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (!events) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";

    this.activeDropdownManu = this.activeDropdownManu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownManu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(event.currentTarget, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownManuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownManu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownManuEvent();
    }
    return this;
  }
}
