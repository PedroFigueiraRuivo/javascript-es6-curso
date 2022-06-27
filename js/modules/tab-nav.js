export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'activeAnimalDescr';
  }

  // SECAO ANIMAIS INTERATIVA

  activeTab(index) {
    this.tabContent.forEach((limpaSection) => {
      limpaSection.classList.remove(this.activeClass);
    });

    this.tabContent[index].classList.add(this.activeClass);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index)); // passando o evento a ser executado após o click e lincando o index das imagens ao index do texto
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
