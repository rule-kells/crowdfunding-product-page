const header = document.querySelector('header')
const navToggle = document.querySelector('.nav__toggle--container')
const modalBtns = document.querySelectorAll('.btn--modal')
const modalWrapper = document.querySelector('.modal__wrapper')

navToggle.addEventListener('click', _ => {
    header.classList.toggle('active')
    console.log('click')
})

modalBtns.forEach(modalBtn => {
    modalBtn.addEventListener('click', _ => {
       modalWrapper.classList.add('active')
    })
})