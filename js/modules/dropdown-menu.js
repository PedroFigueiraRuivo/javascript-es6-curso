import outsideClick from './outside-click.js';

export default function runDropdounmMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const eventsRunning = ['touchstart', 'click'];

  function handleClick(e) {
    e.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => this.classList.remove('active'));
  }

  dropdownMenus.forEach((theMenu) => {
    eventsRunning.forEach((eventOccurring) => {
      theMenu.addEventListener(eventOccurring, handleClick);
    });
  });
}
