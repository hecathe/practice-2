document.addEventListener('DOMContentLoaded', function(evt){
    var list = document.querySelectorAll('.types-list .types-list__link');
    list = Array.prototype.slice.call(list, 0); // convert nodeList to Array
    list.forEach(function(el, i, ar) {
        el.addEventListener('click', function(evt){
            evt.preventDefault();
            var tab = document.querySelector(el.getAttribute('href'));

            // remove "act" class
            document.querySelector('.types-list .active').classList.remove('active');
            document.querySelector('.types-group .active').classList.remove('active');
            // set "act"
            el.classList.add('active');
            tab.classList.add('active');
        })
    })
})