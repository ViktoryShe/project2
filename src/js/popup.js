const openModalButton = document.querySelector('.header_burger')
const modal = document.querySelector('.popup')
const closeModalButton = document.querySelector('.popup__esc')

function openModal() {
  modal.classList.add('show')
}
function closeModal() {
  modal.classList.remove('show')
}
openModalButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)

window.addEventListener('click', function (event) {
  if (
    !modal.contains(event.target) &&
    event.target !== openModalButton &&
    event.target !== closeModalButton
  ) {
    modal.classList.remove('show')
  }
})
