export default function horarioFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const horario = document.querySelector('[data-horario]');

  const diasSem = funcionamento.dataset.semana
    .split(',')
    .map(Number);

  const horarioFun = horario.dataset.horario
    .split(',')
    .map(Number);

  const nowDate = new Date();
  const nowDay = nowDate.getDay();
  const nowHour = nowDate.getHours();

  const openDay = diasSem.indexOf(nowDay) !== -1;
  const openHour = (nowHour >= horarioFun[0] && nowHour <= horarioFun[1]);

  if (openHour && openDay) {
    funcionamento.classList.add('open');
  } else {
    funcionamento.classList.add('close');
  }
}
