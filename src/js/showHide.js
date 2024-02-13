const containerSwiper = document.querySelector('.swiper')
const showMoreButton = document.querySelector('.brands__showMore')
const containerBrands = document.querySelector('.brands__content')

showMoreButton.addEventListener('click', function () {
  if (
    (containerSwiper.classList.contains('expanded'),
    containerBrands.classList.contains('expanded'))
  ) {
    containerSwiper.classList.remove('expanded')
    containerBrands.classList.remove('expanded')
    this.textContent = 'Показать все'
  } else {
    containerSwiper.classList.add('expanded')
    containerBrands.classList.add('expanded')
    this.textContent = 'Скрыть'
  }
  this.classList.toggle('rotate')
})

const containerSwiperT = document.querySelector('.swiperTechnique')
const showMoreButtonT = document.querySelector('.technique__showMore')
const containerTechnique = document.querySelector('.technique__content')

showMoreButtonT.addEventListener('click', function () {
  if (
    (containerSwiperT.classList.contains('expanded'),
    containerTechnique.classList.contains('expanded'))
  ) {
    containerSwiperT.classList.remove('expanded')
    containerTechnique.classList.remove('expanded')
    this.textContent = 'Показать все'
  } else {
    containerSwiperT.classList.add('expanded')
    containerTechnique.classList.add('expanded')
    this.textContent = 'Скрыть'
  }
  this.classList.toggle('rotate')
})
