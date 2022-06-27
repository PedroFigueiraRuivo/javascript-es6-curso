export default function runToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createTooltip(ellementHover) {
    const text = ellementHover.getAttribute('aria-label');
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    (document.body).appendChild(tooltipBox);

    return tooltipBox;
  }

  function onMousehover(e) {
    const tooltipBox = createTooltip(this);
    tooltipBox.style.top = `${e.pageY + 20}px`;
    tooltipBox.style.left = `${e.pageX + 20}px`;

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((ellement) => {
    ellement.addEventListener('mouseover', onMousehover);
  });
}
