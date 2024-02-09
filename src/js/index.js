import { getActiveElement } from '@testing-library/user-event/dist/utils'
import '../scss/style.scss'
// import Swiper, { Navigation, Pagination } from 'swiper'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
// Swiper

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 12,
      autoplay: false
    }
  }
})

// скрыть-показать все

const container = document.querySelector('.swiper')
const showMoreButton = document.querySelector('.brands__showMore')
const containerB = document.querySelector('.brands__content')

showMoreButton.addEventListener('click', function () {
  if (
    (container.classList.contains('expanded'),
    containerB.classList.contains('expanded'))
  ) {
    container.classList.remove('expanded')
    containerB.classList.remove('expanded')
    this.textContent = 'Показать все'
  } else {
    container.classList.add('expanded')
    containerB.classList.add('expanded')
    this.textContent = 'Скрыть'
  }
  this.classList.toggle('rotate')
})

const containerT = document.querySelector('.swiperTechnique')
const showMoreButtonT = document.querySelector('.technique__showMore')
const container1 = document.querySelector('.technique__content')

showMoreButtonT.addEventListener('click', function () {
  if (
    (containerT.classList.contains('expanded'),
    container1.classList.contains('expanded'))
  ) {
    containerT.classList.remove('expanded')
    container1.classList.remove('expanded')
    this.textContent = 'Показать все'
  } else {
    containerT.classList.add('expanded')
    container1.classList.add('expanded')
    this.textContent = 'Скрыть'
  }
  this.classList.toggle('rotate')
})

//popup

const openModalButton = document.querySelector('.header_burger')
const modal = document.getElementById('popup')
const closeModalButton = document.querySelector('.popup__esc')

function openModal() {
  modal.classList.add('show')
}
function closeModal() {
  modal.classList.remove('show')
}
function outsideClickHandler(event) {
  if (!modal.contains(event.target) && event.target !== openModalButton) {
    closeModal()
  }
}
openModalButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)
document.addEventListener('click', outsideClickHandler)

//popupCall

const openCallButton = document.querySelector('.popup__call')
const modalCall = document.getElementById('popupCall')
const closeCallButton = document.querySelector('.popup__end')

function openCall() {
  modalCall.classList.add('show')
}
function closeCall() {
  modalCall.classList.remove('show')
}

openCallButton.addEventListener('click', openCall)
closeCallButton.addEventListener('click', closeCall)

document.addEventListener('click', function (event) {
  if (
    !modalCall.contains(event.target) &&
    event.target !== openCallButton &&
    event.target !== closeCallButton
  ) {
    modalCall.classList.remove('show')
  }
})

//popupChat

const openChatButton = document.querySelector('.popup__chat')
const modalChat = document.getElementById('popupChat')
const closeChatButton = document.querySelector('.popup__close')

function openChat() {
  modalChat.classList.add('show')
}

function closeChat() {
  modalChat.classList.remove('show')
}

openChatButton.addEventListener('click', openChat)
closeChatButton.addEventListener('click', closeChat)

document.addEventListener('click', function (event) {
  if (
    !modalChat.contains(event.target) &&
    event.target !== openChatButton &&
    event.target !== closeChatButton
  ) {
    modalChat.classList.remove('show')
  }
})
