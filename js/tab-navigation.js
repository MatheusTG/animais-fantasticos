export default function initTabNavigation() {
  const animaisImagens = document.querySelectorAll('[data-tab-menu] .animais-lista li')
  const animaisDescricao = document.querySelectorAll('[data-tab-menu] .animais-descricao > div')

  function activeTab(index) {
    animaisDescricao.forEach((div) => {
      div.classList.remove('active')
    })
    animaisDescricao[index].classList.add('active')
  }

  if (animaisImagens && animaisDescricao) {
    activeTab(0)
    animaisImagens.forEach((value, index) => {
      value.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}