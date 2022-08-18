window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//FAQ SEXTION
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq__icon i');
    if (icon.className === 'uil uil-angle-down') {
      icon.className = 'uil uil-minus' 
    } else {
      icon.className = 'uil uil-angle-down'
    }
  })
})