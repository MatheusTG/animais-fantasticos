import ScrollSuave from "./modules/scrollSuave.js";
import Accordion from "./modules/accordion-list.js";
import initTabNavigation from "./modules/tab-navigation.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-animation="true"] dt')
accordion.init()

initTabNavigation();
initAnimacaoScroll();
