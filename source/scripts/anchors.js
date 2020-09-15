var anchors = document.querySelectorAll('.header-list__link');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      let blockID = anchor.getAttribute('href').substr(1),
        offset = document.getElementById(blockID).getBoundingClientRect().top;
      window.scrollTo({
        behavior: 'smooth',
        top: offset - 50
      })
    })
  }