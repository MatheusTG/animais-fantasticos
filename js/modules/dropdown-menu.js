import outideClick from "./outsideclick.js";

export default function initdropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function onMouseOver(event) {
    event.preventDefault();
    this.classList.add("active");
    outideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, onMouseOver);
    });
  });
}
