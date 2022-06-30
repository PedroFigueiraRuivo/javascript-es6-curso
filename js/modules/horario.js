export default class FuncionamentoHorario {
  constructor(seectBlock) {
    this.funcionamento = document.querySelector(seectBlock);
  }

  getData() {
    this.diasSem = this.funcionamento.dataset.semana
      .split(',')
      .map(Number);

    this.horarioFun = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  getNowData() {
    this.nowDate = new Date();
    this.nowDay = this.nowDate.getDay();
    this.nowHour = this.nowDate.getUTCHours() - 3;
  }

  isOpen() {
    const openDay = this.diasSem.indexOf(this.nowDay) !== -1;
    const openHour = (this.nowHour >= this.horarioFun[0] && this.nowHour <= this.horarioFun[1]);

    return openDay && openHour;
  }

  startOpen() {
    if (this.isOpen()) {
      this.funcionamento.classList.add('open');
    } else {
      this.funcionamento.classList.add('close');
    }
  }

  init() {
    if (this.funcionamento !== undefined) {
      this.getData();
      this.getNowData();
      this.startOpen();
    }

    return this.diasSem;
  }
}
