import setJS from './modules/set-js.js';
import sectionAnimais from './modules/tab-nav.js';
import listFaqInteration from './modules/accordion.js';

import ScrollSuave from './modules/scroll-suave.js';

import srollAnimado from './modules/scroll-animado.js';
import runmodal from './modules/modal.js';
import runToolTip from './modules/tooltip.js';
import runDropdounmMenu from './modules/dropdown-menu.js';
import menumobile from './modules/menu-mobile.js';
import horarioFuncionamento from './modules/horario.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitCoin from './modules/fetch-bitcoin.js';

setJS();
sectionAnimais();
listFaqInteration();

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();

srollAnimado();
runmodal();
runToolTip();
runDropdounmMenu();
menumobile();
horarioFuncionamento();
initFetchAnimais();
initFetchBitCoin();
