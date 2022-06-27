export default function scrollSuave() {
  const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollAnimado(event) {
    event.preventDefault();

    const linkHash = event.currentTarget.getAttribute('href');
    const sectionHash = document.querySelector(linkHash);

    sectionHash.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksMenu.forEach((link) => {
    link.addEventListener('click', scrollAnimado);
  });
}
