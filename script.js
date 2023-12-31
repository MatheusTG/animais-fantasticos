function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu img");
  const tabDescricao = document.querySelectorAll(".js-tabdescricao div");

  if (tabMenu && tabDescricao) {
    function activeTab(index) {
      tabDescricao.forEach((value) => {
        value.classList.remove("active");
      });
      tabDescricao[index].classList.add("active");
    }

    tabMenu.forEach((value, index) => {
      value.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const faqLista = document.querySelectorAll(".js-accordion dt");
  if (faqLista) {
    faqLista.forEach((value) => {
      value.addEventListener("click", () => {
        value.classList.toggle("active-accordion");
      });
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-header a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const link = this.getAttribute('href')
    const section = document.querySelector(link)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // // Forma alternativa
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth',
    // })

  }

  linksInternos.forEach((value) => {
    value.addEventListener("click", scrollSection);
  });
}
initScrollSuave()

function initAnimationScroll() {
  const sections = document.querySelectorAll('.js-scroll')

  sections.forEach((value) => {
    value.style.opacity = '0'
  })

  function animaScroll() {
    sections.forEach((value) => {
      if (value.getBoundingClientRect().top - window.innerHeight * 0.6 < 0) {
        value.style.animation = 'show .3s forwards'
      }
    })
  }

  window.addEventListener('scroll', animaScroll)
}
initAnimationScroll()
