// menu lateral 
const hamburgerBtn = document.querySelector('[data-hamburger]');
const menuMobile = document.querySelector('[data-menu-mobile]');
const closeMenuBtn = document.querySelector('[data-close-menu]');

hamburgerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menuMobile.classList.toggle('active');
});

closeMenuBtn.addEventListener('click', function() {
    menuMobile.classList.remove('active');
});

// ao selecionar link esconder menu
const menuLinks = menuMobile.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuMobile.classList.remove('active');
    });
});