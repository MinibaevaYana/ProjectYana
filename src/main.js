import "./style.css"

const burger = document.querySelector('.header-burger')
const menu = document.querySelector('.menu-header')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('lock')
})

menu.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-list')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
        document.body.classList.remove('lock')
    }
})

el1.addEventListener('click', function() {
    document.querySelector('#el1 .menu-nav').classList.toggle('active')
    document.querySelectorAll('#el1 .menu-item').forEach(e => {
        e.classList.toggle('active')
    })
})

el2.addEventListener('click', function() {
    document.querySelector('#el2 .menu-nav').classList.toggle('active')
    document.querySelectorAll('#el2 .menu-item').forEach(e => {
        e.classList.toggle('active')
    })
})

el3.addEventListener('click', function() {
    document.querySelector('#el3 .menu-nav').classList.toggle('active')
    document.querySelectorAll('#el3 .menu-item').forEach(e => {
        e.classList.toggle('active')
    })
})