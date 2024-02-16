const openCallButton = document.querySelector('.popup__call')
const headerCallButton = document.querySelector('.header__call')
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

headerCallButton.addEventListener('click', function () {
  if (modalCall.classList.contains('show')) {
    closeCall()
  } else {
    openCall()
  }
})

modalCall.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('popup-call') ||
    event.target.parentElement.classList.contains('popup-call')
  ) {
    closeCall()
  }
})
