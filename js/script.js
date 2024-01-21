import ScrollSuave from "./modules/scrollSuave.js";
import initTabNavigation from "./modules/tab-navigation.js";
import initAccordionList from "./modules/accordion-list.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initTabNavigation();
initAccordionList();
initAnimacaoScroll();
