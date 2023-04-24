const menuIcon = document.querySelector(".header__menu__icon");
const listaItems = document.querySelector(".header__navigation");

menuIcon.addEventListener( "click", ()=>{
    listaItems.classList.toggle("active");
    menuIcon.classList.toggle("active");
})