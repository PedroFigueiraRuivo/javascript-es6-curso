export default class ScrollSuave {
  constructor(links, options) {
    this.lisksInternos = document.querySelectorAll(links);
    // this.lisksInternos = links;
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.scrollAnimado = this.scrollAnimado.bind(this);
  }

  scrollAnimado(event) {
    event.preventDefault();

    const linkHash = event.currentTarget.getAttribute('href');
    const sectionHash = document.querySelector(linkHash);

    sectionHash.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.lisksInternos.forEach((link) => {
      link.addEventListener('click', this.scrollAnimado);
    });
  }

  init() {
    if (this.lisksInternos.length) {
      this.addLinkEvent();
    }

    return this;
  }
}
