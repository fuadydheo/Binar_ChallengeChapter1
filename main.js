// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document
      .querySelector('nav')
      .classList.toggle('window-scroll', window.scrollY > 0)
  })
  
  const faqs = document.querySelectorAll('.faq')
  
  faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open')
  
      //change icon
      const icon = faq.querySelector('.faq__icon i')
      if (icon.className === 'uil uil-angle-down') {
        icon.className = 'uil uil-minus'
      } else {
        icon.className = 'uil uil-angle-down'
      }
    })
  })
  
  // for testimonial
  const testimonials = [
    {
      name: 'Eva Sawyer 30, City',
      image: './image/template_3.jpg',
      testimonial:
        'Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur',
    },
    {
      name: 'Katey Topaz 32, City',
      image: './image/template_3.jpg',
      testimonial:
        'Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla',
    },
    {
      name: 'Jae Robin 33, City',
      image: './image/template_3.jpg',
      testimonial:
        'Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis',
    },
    {
      name: 'Nicola Blakely 24, City',
      image: './image/template_3.jpg',
      testimonial:
        'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
    },
  ]
  //Current Slide
  let i = 0
  //Total Slides
  let j = testimonials.length
  let testimonialContainer = document.getElementById('testimonial-container')
  let nextBtn = document.getElementById('next')
  let prevBtn = document.getElementById('prev')
  nextBtn.addEventListener('click', () => {
    i = (j + i + 1) % j
    displayTestimonial()
  })
  prevBtn.addEventListener('click', () => {
    i = (j + i - 1) % j
    displayTestimonial()
  })
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <img src=${testimonials[i].image}>
    <p>${testimonials[i].testimonial}</p>
    <p></p>
    <h3>${testimonials[i].name}</h3>
  
      `
  }
  window.onload = displayTestimonial
  