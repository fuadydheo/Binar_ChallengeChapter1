window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})




const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon img');
        if (icon.style.transform === '') {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = '';
        }
    })
})