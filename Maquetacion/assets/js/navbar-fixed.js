document.addEventListener('click', ()=> {
    let navbar = document.querySelector('.menu__navbar');

    window.addEventListener('scroll', ()=> {
        let scroll = window.scrollY;

        console.log(scroll);

        if(scroll > 120){
            navbar.classList.add('menu__navbar--fixed');
        }else {
            navbar.classList.remove('menu__navbar--fixed');
        }
        // scroll > 120 ? navbar.classList.add('menu__navbar--fixed') : navbar.classList.remove('menu__navbar--fixed');
    })
})