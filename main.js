// Reference: EGATOR tutorial

// NAVBAR scrolling
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// FAQs accordion
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        const icon = faq.querySelector(".faq__header i")
        if(icon.className === "uil uil-angle-down faq__arrow") {
            icon.className = "uil uil-angle-up faq__arrow"
        } else {
            icon.className = "uil uil-angle-down faq__arrow"
        }
    })
})