let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.header__list')

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
})

let mediaQuery = window.matchMedia("(min-width: 700px)")

mediaQuery.addEventListener("change", () => {
  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    list.classList.remove('header__list_active')
  }
})