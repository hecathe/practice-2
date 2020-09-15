var contactButtons = document.querySelectorAll('.popup-contact-us');
var popupContact = document.querySelector('.popup-contact');
var popupClose = popupContact.querySelector('.popup-close');

for (let contactButton of contactButtons) {
    contactButton.addEventListener('click', function(event){
        popupContact.classList.add('show');
    });

    popupClose.addEventListener('click', function(event) {
        popupContact.classList.remove('show');
    });
}