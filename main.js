//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-angle-down') {
            icon.className = "uil uil-angle-up"
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

//show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display= "inline-block";
    menuBtn.style.display = "none";
})

//close navmenu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)