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


    let option = document.querySelectorAll('.menu-mobile__option')
    let icon = document.querySelectorAll('.menu-mobile__icon');
    let submenu = document.querySelectorAll('.menu-mobile__submenu');

    option[1].addEventListener('click', ()=>{
        icon[0].classList.toggle('menu-mobile__icon--active');

        submenu[0].classList.toggle('menu-mobile__submenu--active');

    })
    option[2].addEventListener('click', ()=>{
        icon[1].classList.toggle('menu-mobile__icon--active');

        submenu[1].classList.toggle('menu-mobile__submenu--active');
    })
    option[3].addEventListener('click', ()=>{
        icon[2].classList.toggle('menu-mobile__icon--active');

        submenu[2].classList.toggle('menu-mobile__submenu--active');
    })
    


})