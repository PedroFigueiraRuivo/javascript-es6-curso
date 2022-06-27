export default function listFaqInteration() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion(event) {
    event.currentTarget.classList.toggle('ativarFuncaoFaq');
    event.currentTarget.nextElementSibling.classList.toggle('ativarFuncaoFaq');
  }

  if (accordionList.length) {
    accordionList[0].classList.add('ativarFuncaoFaq');
    accordionList[0].nextElementSibling.classList.add('ativarFuncaoFaq');

    accordionList.forEach((item) => {
      item.addEventListener('click', (e) => activeAccordion(e));
    });
  }
}
