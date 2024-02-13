import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

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
