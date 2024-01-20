import initTabNavigation from "./modules/tab-navigation.js";
import initAccordionList from "./modules/accordion-list.js";
import ScrollSuave from "./modules/scrollSuave.js";

initTabNavigation();
initAccordionList();
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()
