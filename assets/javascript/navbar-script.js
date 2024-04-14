const hamburger = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('hide');
});

const navItem = document.getElementById('#nav-item');

const homeTab = document.querySelector('.home-item');
homeTab.classList.add('nav-tab-gradient');

function navTab(){
    navItem.classList.add('nav-tab-gradient');
}