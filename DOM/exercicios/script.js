const botao = document.querySelector('#openModal')
const modal = document.querySelector('.modal-wrapper')


botao.addEventListener('click', () => {
  modal.classList.remove('invisible')
})

document.addEventListener('keydown', event => {
  const isEsc = event.key === 'Escape' ? modal.classList.toggle('invisible') : ''
})