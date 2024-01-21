import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tabnav.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import Modal from "./modules/modal.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-animation="true"] dt');
accordion.init();

const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] div');
tabnav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

initAnimacaoScroll();
