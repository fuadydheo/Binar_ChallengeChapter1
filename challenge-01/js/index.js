//change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
    console.log('di scroll')
})

//show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
        //change the icon to minus
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-angle-down') {
            icon.className = 'uil uil-angle-up'
        } else {
            icon.className = 'uil uil-angle-down'
        }
    })
})