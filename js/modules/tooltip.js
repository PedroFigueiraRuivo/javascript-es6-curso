export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMousehover = this.onMousehover.bind(this);
  }

  // Move a tooltip com base
  // na orientação com a janela
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;

    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 170}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // Remove a tooltip e seus eventos
  // após o usuário retira-la
  // da área limite
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // Cria a tooltip e coloca no body
  createTooltip(ellementHover) {
    const tooltipBox = document.createElement('div');
    const text = ellementHover.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    (document.body).appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos
  onMousehover({ currentTarget }) {
    this.createTooltip(currentTarget);

    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // Adiciona os eventos de a cada tooltip
  addToolTipEvent() {
    this.tooltips.forEach((ellement) => {
      ellement.addEventListener('mouseover', this.onMousehover);
    });
  }

  // Inicia a função
  init() {
    if (this.tooltips.length) {
      this.addToolTipEvent();
    }
    return this;
  }
}
