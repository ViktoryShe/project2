const openModalButton = document.querySelector('.header__burger')
const modal = document.querySelector('.popup')
const closeModalButton = document.querySelector('.popup__esc')

function openModal() {
  modal.classList.add('show')
}
function closeModal() {
  modal.classList.remove('show')
}

function handleClickOutside(event) {
  if (
    event.target.classList.contains('popup') ||
    event.target.parentElement.classList.contains('popup')
  ) {
    closeModal()
  }
}

openModalButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)
modal.addEventListener('click', handleClickOutside)
