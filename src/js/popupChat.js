const openChatButton = document.querySelector('.popup__chat')
const headerChatButton = document.querySelector('.header__chat')
const modalChat = document.querySelector('.popup-chat')
const closeChatButton = document.querySelector('.popup__close')

function openChat() {
  modalChat.classList.add('show')
}

function closeChat() {
  modalChat.classList.remove('show')
}

openChatButton.addEventListener('click', openChat)
closeChatButton.addEventListener('click', closeChat)

headerChatButton.addEventListener('click', function () {
  if (modalChat.classList.contains('show')) {
    closeChat()
  } else {
    openChat()
  }
})

window.addEventListener('click', function (event) {
  if (
    !modalChat.contains(event.target) &&
    event.target !== openChatButton &&
    event.target !== closeChatButton &&
    event.target !== headerChatButton
  ) {
    closeCall()
  }
})
