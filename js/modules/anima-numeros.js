export default function animanumeros() {
  const numeros = document.querySelectorAll('[data-numero]');
  const observerTarget = document.querySelector('.numeros');

  function animation(theNumeros) {
    theNumeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;

        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50);
    });
  }

  let mutacao;
  function startAction(mutation) {
    if (mutation[0].target.classList.contains('js-anima')) {
      mutacao.disconnect();
      animation(numeros);
    }
  }

  mutacao = new MutationObserver(startAction);
  mutacao.observe(observerTarget, { attributes: true });
}
