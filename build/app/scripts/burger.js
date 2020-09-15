var toggle = document.querySelector('.header__toggle');
var nav = document.querySelector('.header__nav');
var logo = document.querySelector('.header__logo');

toggle.addEventListener('click', function (evt) {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
});