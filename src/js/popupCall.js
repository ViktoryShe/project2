const openCallButton = document.querySelector('.popup__call')
const modalCall = document.querySelector('.popup-call')
const closeCallButton = document.querySelector('.popup__end')

function openCall() {
  modalCall.classList.add('show')
}
function closeCall() {
  modalCall.classList.remove('show')
}

openCallButton.addEventListener('click', openCall)
closeCallButton.addEventListener('click', closeCall)

window.addEventListener('click', function (event) {
  if (
    !modalCall.contains(event.target) &&
    event.target !== openCallButton &&
    event.target !== closeCallButton
  ) {
    modalCall.classList.remove('show')
  }
})
