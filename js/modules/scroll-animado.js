export default function srollAnimado() {
  const animaSectiosn = document.querySelectorAll('.js-scroll');
  const metadeTelaMedida = window.innerHeight * 0.5;

  function animaScroll() {
    animaSectiosn.forEach((section) => {
      const sectionsTop = section.getBoundingClientRect().top;
      const proporcTela = sectionsTop - metadeTelaMedida;

      if (proporcTela < 0) {
        section.classList.add('js-anima');
      } else if (section.classList.contains('js-anima')) {
        section.classList.remove('js-anima');
      }
    });
  }
  animaScroll();

  window.addEventListener('scroll', animaScroll);
}
