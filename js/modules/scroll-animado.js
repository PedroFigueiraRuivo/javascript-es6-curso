export default class ScrollAnima {
  constructor(sections) {
    this.animaSectiosn = document.querySelectorAll(sections);
    this.metadeTelaMedida = window.innerHeight * 0.65;

    // Bind
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Cria um objeto com os elementos e suas
  // respectivas distâncias ao topo
  getDistance() {
    this.distance = [...this.animaSectiosn].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.metadeTelaMedida),
      };
    });
  }

  // Verifica a adistância de cada objeto
  // com relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('js-anima');
      } else if (item.element.classList.contains('js-anima')) {
        item.element.classList.remove('js-anima');
      }
    });
  }

  // Inicia o evento quando o scroll é gerado
  addAnimaScrollEvents() {
    window.addEventListener('scroll', this.checkDistance);
  }

  // Método para iniciar o processo da classe
  init() {
    if (this.animaSectiosn.length) {
      this.getDistance();
      this.addAnimaScrollEvents();
    }
    return this;
  }

  // Remove o evento de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
