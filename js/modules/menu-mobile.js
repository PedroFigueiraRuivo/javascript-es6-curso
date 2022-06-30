import outsideClick from './helper/outside-click.js';

export default class MenuMobile {
  constructor(button, content, events) {
    this.menuButton = document.querySelector(button);
    this.menuList = document.querySelector(content);
    this.activeClass = 'active';

    if (events === undefined) this.eventsRunning = ['touchstart', 'click'];
    else this.eventsRunning = events;

    // Bind
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.menuButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);

    outsideClick(this.menuList, this.eventsRunning, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.eventsRunning.forEach((event) => {
      this.menuButton.addEventListener(event, this.toggleMenu);
    });
  }

  init() {
    if (this.menuButton !== undefined && this.menuList !== undefined) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
