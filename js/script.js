import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion-list.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimais from "./modules/fetch-animais.js";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-anima.js";
import DropdownMenu from "./modules/dropdown-menu";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-scroll="suave"] a[href^="#"]');
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

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("animaisapi.json", ".numeros-grid");
FetchBitcoin("https://blockchain.info/ticker", ".bitcoin");

const scrollAnima = new ScrollAnima("[data-animation]");
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");
