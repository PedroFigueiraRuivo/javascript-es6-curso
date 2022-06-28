export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Secc Bids
    this.startAction = this.startAction.bind(this);
  }

  // Recebe elementos do DOM com números no seu texto
  // Incrementando a partir de zero até o número final
  static incrementarNumero(numero) {
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
  }

  // Ativa o incremento para cada
  // elemento do DOM passado
  animation() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // Desconecta a mutação e ativa o processo de animação
  startAction(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.mutacao.disconnect();
      this.animation();
    }
  }

  // Adiciona o MutationObserver para verificr quando
  // a classe 'ativo' é inserida no elemento target
  addMutationObserver() {
    this.mutacao = new MutationObserver(this.startAction);
    this.mutacao.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass !== undefined) {
      this.addMutationObserver();
    }

    return this;
  }
}
