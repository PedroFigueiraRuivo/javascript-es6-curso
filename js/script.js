import setJS from './modules/set-js.js';

import TabNav from './modules/tab-nav.js';
import Accordion from './modules/accordion.js';
import ScrollSuave from './modules/scroll-suave.js';
import ScrollAnima from './modules/scroll-animado.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import DropdounmMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import FuncionamentoHorario from './modules/horario.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitCoin from './modules/fetch-bitcoin.js';

setJS();

const tabNav = new TabNav('.js-tabMenu li', '.js-tabContent section');
tabNav.init();

const accordion = new Accordion('.js-accordion dt');
accordion.init();

const scrollSuave = new ScrollSuave('.js-menu a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new ToolTip('[data-tooltip]');
tooltip.init();

const scrollAnima = new ScrollAnima('.js-scroll');
scrollAnima.init();

const dropdownMenu = new DropdounmMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', ['click']);
menuMobile.init();

const funcionamentoHorario = new FuncionamentoHorario('[data-semana]');
funcionamentoHorario.init();

fetchAnimais('./js/animais-info.json', 'animalNumber');
fetchBitCoin('https://blockchain.info/ticker', '.bitcoin-preco');
