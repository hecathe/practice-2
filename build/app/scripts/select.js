var btn = document.querySelector('.contact-form__select');
var selectList = document.querySelector('.contact-form__wrap');

btn.addEventListener('click', function (evt) {
    btn.classList.toggle('active');
    selectList.classList.toggle('active');
});