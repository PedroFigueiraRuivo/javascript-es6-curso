import outsideClick from './helper/outside-click.js';

export default class DropdounmMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = 'active';

    if (events === undefined) this.eventsRunning = ['touchstart', 'click'];
    else this.eventsRunning = events;

    // Bild
    this.activeDropdownmMenu = this.activeDropdownmMenu.bind(this);
  }

  // Gerencia o dropdownm menu
  activeDropdownmMenu(e) {
    const element = e.currentTarget;

    e.preventDefault();
    element.classList.add(this.activeClass);

    outsideClick(element, this.eventsRunning, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventoos aos dropdownms
  addDropdownmMenuEvents() {
    this.dropdownMenus.forEach((theMenu) => {
      this.eventsRunning.forEach((eventOccurring) => {
        theMenu.addEventListener(eventOccurring, this.activeDropdownmMenu);
      });
    });
  }

  // valida as variáveis e inicia as funções
  init() {
    if (this.dropdownMenus.length && this.eventsRunning.length) {
      this.addDropdownmMenuEvents();
    }
    return this;
  }
}
