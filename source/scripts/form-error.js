var formInputs = document.querySelectorAll('.contact-form__input');
var forms = document.querySelectorAll('.form');
var popupContact = document.querySelector('.popup-contact');
var popupApp = document.querySelector('.popup-application');

document.querySelectorAll('[data-type="tel"]').forEach(item => {
    let telMask = IMask(item, {
      mask: '+{7}(000)000-00-00'
    });
    /*Добавление и удаление класса при снятии фокуса с data-type="tel"*/
    telMask.on('accept', function () {
      item.classList.remove('success');
    });
    telMask.on('complete', function () {
      item.classList.add('success');
    });
  });
  
  let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
  
  
  /*Добавление класса при снятии фокуса с текстовых инпутов*/
  let noTelAndEmailInput = document.querySelectorAll('input:not([data-type="tel"]):not([data-type="email"]), textarea');
  noTelAndEmailInput.forEach(item => {
    item.addEventListener('blur', function () {
      if (item.value != '') {
        item.classList.add('success');
      } else {
        item.classList.remove('success');
      }
    });
  });
  
  
  /*Добавление класса при снятии фокуса с data-type="email"*/
  let emailInput = document.querySelectorAll('input[data-type="email"]');
  emailInput.forEach(item => {
    item.addEventListener('blur', function () {
      if (item.value != '') {
        if (item.value.search(pattern) == 0) {
          item.classList.remove('error');
          item.classList.add('success');
        } else {
          item.classList.add('error');
          item.classList.remove('success');
        }
      } else {
        item.classList.remove('input-err');
        item.classList.remove('input-border');
      }
    });
  });
  
  
  /*Функция валидации*/
  function raValidation(form) {
    let inputs = form.querySelectorAll('[data-required]'),
      temp = true;
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].classList.contains('success')) {
        inputs[i].classList.add('error');
        temp = false;
      } else {
        inputs[i].classList.remove('error');
      }
    }
    if (temp == false) {
      console.warn('Форма заполнена не корректно')
      return false;
    } else {
      console.log('Форма отправлена')
      return true;
    }
  }
  
  
  /*Обработка клика по кнопке отправки формы*/
  let submitButton = document.querySelectorAll('button[type="submit"]');
  submitButton.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      let form = this.closest('form');
      if (raValidation(form)) {
        //form.submit();
        ifSuccess(form);
      }
    });
  });
  
  
  /*Функция для sucsess*/
  function ifSuccess(form) {
    let inputsAndButton = form.querySelectorAll('input, textarea, button'),
      contentButton = form.querySelector('button').textContent;
    form.querySelector('button').textContent = 'Отправлено';
    inputsAndButton.forEach(item => {
      item.classList.remove('error');
      item.classList.remove('success');
      item.setAttribute('disabled', 'disabled');

      function selfClose() {
        popupApp.classList.remove('show');
        }

      setTimeout(selfClose, 1800);
      popupContact.classList.remove('show');
      popupApp.classList.add('show');
      
    })
    setTimeout(() => {
      form.querySelector('button').textContent = contentButton;
      inputsAndButton.forEach(item => {
        item.value = '';
        item.removeAttribute('disabled');
      });
    }, 2000);
  }

/*for (let formInput of formInputs) {
    for (let form of forms) {
        form.addEventListener('submit', function(event){
            if (formInput.hasAttribute('data-required')) {
                if (formInput.value != '') {
                    //event.preventDefault();
                    formInput.classList.add('success');
                    popupContact.classList.remove('show');
                    popupApp.classList.add('show');

                    function selfClose() {
                        popupApp.classList.remove('show');
                    }
                    setTimeout(selfClose, 2000);
                    form.reset();
                    formInput.classList.remove('success');
                } else {
                    
                        event.preventDefault();
                        formInput.classList.add('error');   
                    }
                
            }
        });
    }
}*/

/*for (let i = 0; i < formInputs.length; i++) {
    
}*/
