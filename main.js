// Change navbar style on scroll//
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
})


// Show / Hide FAQ Answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change Icon
        const icon =  faq.querySelectorAll('.faqs__icon i');
        if(icon.className === "uil uil-plus-circle") {
            icon.className = "uil uil-minus-circle";
        } else {
            icon.className = "uil uil-plus-circle";
        }
    })
})