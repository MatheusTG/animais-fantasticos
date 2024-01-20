export default function initAccordionList() {
  const accordionListDT = document.querySelectorAll("[data-accordion] dt");
  if (accordionListDT.length) {
    accordionListDT[0].classList.add('active')
    
    accordionListDT.forEach((value) => {
      value.addEventListener('click', (event) => {
        event.target.classList.toggle('active')
      })
    })
  }
}
