import setJS from './modules/set-js.js';
import TabNav from './modules/tab-nav.js';

import Accordion from './modules/accordion.js';
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

const tabNav = new TabNav('.js-tabMenu li', '.js-tabContent section');
tabNav.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

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
