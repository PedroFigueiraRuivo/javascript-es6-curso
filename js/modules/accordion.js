export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativarFuncaoFaq';
  }

  toggleAccordion(element) {
    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAcordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAcordionEvent();
    }

    return this;
  }
}
