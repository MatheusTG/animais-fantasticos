const tabMenu = document.querySelectorAll('.js-tabmenu img')
const tabDescricao = document.querySelectorAll('.js-tabdescricao div')

if (tabMenu.length && tabDescricao.length) {
  function activeTab(index) {
    tabDescricao.forEach((value) => {
      value.classList.remove('active')
    })
    tabDescricao[index].classList.add('active')
  }

  tabMenu.forEach((value, index) => {
    value.addEventListener('click', () => {
      activeTab(index)
    })
  })
}