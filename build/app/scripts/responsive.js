document.addEventListener('DOMContentLoaded', function(event){
    var list = document.querySelectorAll('.responsive__list .responsive__link');
    list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(event){
            event.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));

            // remove "act" class
            document.querySelector('.responsive__list .active').classList.remove('active');
            document.querySelector('.responsive__image-wrap .active').classList.remove('active');
            // set "act"
            el.classList.add('active');
            tab.classList.add('active');
        })
    })
})