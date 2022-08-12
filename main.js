// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === 'uil uil-angle-down') {
            icon.className = "uil uil-angle-up";
        } else {
            icon.className = "uil uil-angle-down";
        }
    })
})

// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

const learnMoreButton = document.getElementById("learn-more-btn");
const description = document.getElementById("category-description");
let isClose = false;

learnMoreButton.addEventListener('click', () => {
    isClose = !isClose;
    if (isClose) {
        description.style.display = "none";
    } else {
        description.style.display = "block";
    }

})