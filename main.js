window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

// show /hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        //change icon
        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'uil uil-angle-down') {
            icon.className = "uil uil-angle-up"
        } else{
            icon.className = "uil uil-angle-down";
        }
        
    })
})