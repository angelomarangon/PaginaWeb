

let switcher = document.querySelector('.switcher__btn');


switcher.addEventListener('click', ()=>{
    let head = document.querySelector('head') //tambien puede ser document.head
    
    let link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./assets/css/dark.css";
    link.id = "theme-dark";
    let themeDark = document.querySelector('#theme-dark');

    let img_logo = document.querySelector('.navbar__logo-light');
    let iconD = document.querySelector(".switcher__icon-dark");
    let iconL = document.querySelector(".switcher__icon-light");

    if(themeDark){
        head.removeChild(themeDark);
        img_logo.src = "./assets/img/logo1.png";
        iconL.style.display = "block";
        iconD.style.display = "none";
    }else {
        head.appendChild(link);
        img_logo.src = "./assets/img/logo2.png";
        iconL.style.display = "none";
        iconD.style.display = "block";
    }

})