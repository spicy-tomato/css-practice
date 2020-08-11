const menuBtn = document.querySelector('.menu-button')
const logo = document.querySelector('.navigation .logo-area .logo')
const logoName = document.querySelector('.navigation .logo-area .name')
const dropdown = document.querySelector('.dropdown')

let menuOpen = false

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    logo.classList.add('open')
    logoName.classList.add('open')
    dropdown.classList.add('open')
    menuOpen = true
  }
  else {
    menuBtn.classList.remove('open')
    logo.classList.remove('open')
    logoName.classList.remove('open')
    dropdown.classList.remove('open')
    menuOpen = false
  }
})