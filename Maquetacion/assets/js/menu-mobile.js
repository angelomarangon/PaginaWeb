document.addEventListener("DOMContentLoaded", e => {
    
    let btnMenu = document.querySelector('.btn-menu__container');
    let menu = document.querySelector('.menu-mobile');
    let menuClose = document.querySelector('.menu-mobile__close');

    btnMenu.addEventListener('click', ()=>{
        menu.classList.toggle('menu-mobile--active');
    })

    menuClose.addEventListener('click', ()=>{
        menu.classList.remove('menu-mobile--active');
    })


    let optionService = document.querySelectorAll('.menu-mobile__option')


})