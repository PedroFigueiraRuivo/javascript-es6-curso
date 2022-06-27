export default function runmodal() {
  const buttonOpen = document.querySelector('[data-modal="abrir"]');
  const buttonClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function openClose(e, container) {
    e.preventDefault();
    container.classList.toggle('ativo');
  }

  function clickOutsideModal(e, container) {
    if (e.target === container) {
      openClose(e, container);
    }
  }

  if (buttonOpen && buttonClose && containerModal) {
    buttonOpen.addEventListener('click', (e) => openClose(e, containerModal));
    buttonClose.addEventListener('click', (e) => openClose(e, containerModal));
    containerModal.addEventListener('click', (e) => clickOutsideModal(e, containerModal));
  }
}
