export default class Modal {
  constructor(buttonOpen, buttonClose, container) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.containerModal = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  openClose() {
    this.containerModal.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.openClose();
  }

  clickOutsideModal(e) {
    if (e.target === this.containerModal) {
      this.openClose();
    }
  }

  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.containerModal) {
      this.addModalEvents();
    }

    return this;
  }
}
