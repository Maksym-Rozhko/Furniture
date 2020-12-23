const openBurgerMenu = document.querySelector('.mob-menu');
const menuSidebar = document.querySelector('.header-inner__lists');
const burgerLines = document.querySelectorAll('.m-line');
const mainScreen = document.querySelector('.main-screen');
const btnScrollDown = document.querySelector('.button-down');
const btnScrollUp = document.querySelector('.button-up');

btnScrollUp.addEventListener('click', e => {
    e.preventDefault();
    btnScrollDown.classList.add('button-scroll');
    mainScreen.scrollIntoView({
        behavior: "smooth", 
        block: "end",
        inline: "nearest"
    });
});

btnScrollDown.addEventListener('click', e => {
    e.preventDefault();
    btnScrollDown.classList.remove('button-scroll');
    btnScrollUp.scrollIntoView({
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
    });
});

openBurgerMenu.addEventListener('click', e => {
    e.preventDefault();
    menuSidebar.classList.toggle('active-menu');
    for (line of burgerLines) {
        line.classList.toggle('active');
    }
});

