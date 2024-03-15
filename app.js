const wrapper = document.querySelector('.wrapper');
const signup_link = document.querySelector('.signup_link');
const login_link = document.querySelector('.login_link');
const popBtn = document.querySelector('.pop-up-btn');
const closeBtn = document.querySelector('.close-btn')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.list')
const header = document.querySelector('header')
const faqs = document.querySelectorAll('.content-box')

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('showfaqs')
    })
})

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0 )
})




signup_link.addEventListener('click', () => {
    wrapper.classList.add('active')
})

login_link.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

popBtn.addEventListener('click', () => {
    wrapper.style.transform = 'scale(1)'
})

closeBtn.addEventListener('click', () => {
    wrapper.style.transform = 'scale(0)'
})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menu.classList.toggle('show')
})