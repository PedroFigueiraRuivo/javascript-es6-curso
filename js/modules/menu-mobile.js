import outsideClick from './helper/outside-click.js';

export default function menumobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function toggleMenu(button, list) {
    button.classList.toggle('active');
    list.classList.toggle('active');

    outsideClick(list, ['click'], () => {
      button.classList.remove('active');
      list.classList.remove('active');
    });
  }

  menuButton.addEventListener('click', () => toggleMenu(menuButton, menuList));
}
