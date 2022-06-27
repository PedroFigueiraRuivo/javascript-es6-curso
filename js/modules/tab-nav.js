export default function sectionAnimais() {
  // SECAO ANIMAIS INTERATIVA
  const tabMenu = document.querySelectorAll('.js-tabMenu li');
  const tabContent = document.querySelectorAll('.js-tabContent section');

  function activeTab(index) {
    tabContent.forEach((limpaSection) => {
      limpaSection.classList.remove('activeAnimalDescr'); // removendo a classe se ela já tiver sido atribuída a outro elemento da lista
    });

    tabContent[index].classList.add('activeAnimalDescr'); // adicionando a classe ao elemento clicado
  }

  // estrutura de condicao para ver se as classes chamadas realmente existem
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('activeAnimalDescr'); // adicionando a classe para tornar o conteúdo visível inicialmente
    tabMenu.forEach((itemMenu, index2) => {
      itemMenu.addEventListener('click', () => activeTab(index2)); // passando o evento a ser executado após o click e lincando o index das imagens ao index do texto
    });
  }
  // FIM SECAO ANIMAIS INTERATIVA
}
