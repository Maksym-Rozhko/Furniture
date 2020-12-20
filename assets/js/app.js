const openBurgerMenu = document.querySelector('.mob-menu');
const menuSidebar = document.querySelector('.header-inner__lists');
const burgerLines = document.querySelectorAll('.m-line');

openBurgerMenu.addEventListener('click', e => {
    e.preventDefault();
    menuSidebar.classList.toggle('active-menu');
    for (line of burgerLines) {
        line.classList.toggle('active');
    }
});