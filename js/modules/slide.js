import debounce from './helper/debounce.js';

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };

    this.activeClass = 'active';

    this.changeEvent = new Event('changeEvent');
  }

  updateMovement(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 2;
    return this.dist.finalPosition - this.dist.movement;
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform 0.3s' : '';
  }

  mooveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  onStart(event) {
    let eventMove;
    let firstInteraction;

    if (event.type === 'mousedown') {
      event.preventDefault();
      firstInteraction = event.clientX;
      eventMove = 'mousemove';
    } else {
      firstInteraction = event.changedTouches[0].clientX;
      eventMove = 'touchmove';
    }

    this.dist.startX = firstInteraction;
    this.wrapper.addEventListener(eventMove, this.onMoove);
    this.transition(false);
  }

  changeslideEndMove() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  endMove(event) {
    const eventType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';

    this.wrapper.removeEventListener(eventType, this.onMoove);
    this.dist.finalPosition = this.dist.movePosition;
    this.changeslideEndMove();
    this.transition(true);
  }

  onMoove(event) {
    let pointerPosition;

    if (event.type === 'mousemove') pointerPosition = event.clientX;
    else pointerPosition = event.changedTouches[0].clientX;

    const finalPosition = this.updateMovement(pointerPosition);
    this.mooveSlide(finalPosition);
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.endMove);

    // Touch
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('touchend', this.endMove);
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.slideArr = [...this.slide.children].map((element) => {
      const position = this.slidePosition(element);
      return {
        element,
        position,
      };
    });
  }

  slidesIndexNav(index) {
    const last = this.slideArr.length - 1;

    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  changeActiveClass() {
    this.slide.querySelectorAll('li').forEach((slideLI) => {
      slideLI.classList.remove(this.activeClass);
    });

    this.slideArr[this.index.active].element.classList.add(this.activeClass);
  }

  changeSlide(index) {
    const activeSlide = this.slideArr[index];

    this.mooveSlide(activeSlide.position);
    this.slidesIndexNav(index);
    this.dist.finalPosition = activeSlide.position;

    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next);
  }

  onResizing() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResizing);
  }

  bind() {
    this.onStart = this.onStart.bind(this);
    this.onMoove = this.onMoove.bind(this);
    this.endMove = this.endMove.bind(this);

    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);

    this.onResizing = debounce(this.onResizing.bind(this), 200);
  }

  init() {
    if (this.slide && this.wrapper) {
      this.bind();
      this.transition(true);
      this.addSlideEvents();
      this.slidesConfig();
      this.addResizeEvent();
      this.changeSlide(0);
    }
    return this;
  }
}

export class SlideNav extends Slide {
  constructor(...args) {
    super(...args);

    this.bindControlEvents();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);

    this.addArrowEvents();
  }

  addArrowEvents() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArr.forEach((slide, index) => {
      control.innerHTML += `
      <li>
        <a href="#slide${index + 1}">${index + 1}</a>
      </li>
      `;
    });
    this.wrapper.appendChild(control);

    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activecontrolItem);
  }

  activecontrolItem() {
    this.controlArr.forEach((navLI) => {
      navLI.classList.remove(this.activeClass);
    });

    this.controlArr[this.index.active].classList.add(this.activeClass);
  }

  addControl(custonControl) {
    this.control = document.querySelector(custonControl) || this.createControl();
    this.controlArr = [...this.control.children];

    this.controlArr.forEach(this.eventControl);
    this.activecontrolItem();
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activecontrolItem = this.activecontrolItem.bind(this);
  }
}
