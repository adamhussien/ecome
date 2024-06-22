  'use strict'



  const sections = document.querySelectorAll("section");

  const revealsection = function(entries, observer) {
      const [entry] = entries;
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("section-hideen");
      observer.unobserve(entry.target);
  };
  
  const sectionobs = new IntersectionObserver(revealsection, {
      root: null,
      threshold: 0.16
  });
  
  sections.forEach(section => {
      sectionobs.observe(section);
      section.classList.add("section-hideen");
  }); 

  const btntabs = document.querySelectorAll(".btncontainer__btntab");
  const tabcontent = document.querySelectorAll(".contentcontainer__content");

  btntabs.forEach(button => {
      button.addEventListener('click', function (e) {
          const tabId = e.target.dataset.tabbtn;
      
          // Remove active class from all buttons
          btntabs.forEach(btn => btn.classList.remove('active'));

          // Hide all tab contents
          tabcontent.forEach(content => content.classList.remove('contentactive'));

          // Add active class to the clicked button
          e.target.classList.add('active');

          // Show the corresponding tab content
          if (tabId === 'all') {
              document.querySelector('.contentcontainer__content--all').classList.add('contentactive');
          } else {
              document.querySelector(`.contentcontainer__content--${tabId}`).classList.add('contentactive');
          }
      });
  });
   // Select all the headers with the class 'togfoot'
   const toggles = document.querySelectorAll('.togfoot');
    
   // Add click event listener to each header
   toggles.forEach(toggle => {
       toggle.addEventListener('click', function () {
           // Get the next sibling element (the list) of the clicked header
           const list = this.nextElementSibling;
           
           // Toggle the 'listactive' class on the list
           if (list.classList.contains('listactive')) {
               list.classList.remove('listactive');
           } else {
               // Remove 'listactive' class from all lists
               document.querySelectorAll('.footer__lists__list').forEach(el => {
                   el.classList.remove('listactive');
               });
               // Add 'listactive' class to the clicked list
               list.classList.add('listactive');
           }

           // Toggle the plus/minus icon
           const icon = this.querySelector('i');
           icon.classList.toggle('fa-plus');
           icon.classList.toggle('fa-minus');
       });
   });

  

 
 






const bar = document.querySelector(".header-bar")
const list = document.querySelector(".list")
const close = document.querySelector(".nav-close")


const open = function(){
list.classList.add("active")
}
const closebar = function(){
    list.classList.remove("active")
    }
    bar.addEventListener("click", open)
    close.addEventListener("click", closebar)

 
   const slideContainer = document.querySelector('.cardslide');
    const slidescard = document.querySelectorAll('.cardslide__slider');
    const nextButton = document.querySelector('.right');
    const prevButton = document.querySelector('.left');
    const dotts = document.querySelectorAll('.dont');
    let currentIndex = 0;
  
  const updatedonts = function(){
  dotts.forEach((dot, index) =>{
    dot.classList.toggle("dotnactive", index === currentIndex)
     })
  }
  function updateSliderpos() {
  const offset = -currentIndex * slidescard[0].clientWidth;
  slideContainer.style.transform = `translateX(${offset}px)`;
  updatedonts();
  }
  
  nextButton.addEventListener("click", function(){
  if(currentIndex < slidescard.length - 1){
  currentIndex++;
  }
  else{
  currentIndex = 0
  }
  updateSliderpos()
  })
  
  prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slidescard.length - 1; // Loop back to the end
  }
  updateSliderpos();
  });
  
  
  dotts.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSliderpos();
  });
  });
  
  
  
  updatedonts(); 

  const slides = document.querySelectorAll('.slider-slide');
  const leftButton = document.querySelector('.slider__left');
  const rightButton = document.querySelector('.slider__right');
  const dots = document.querySelector('.dots');
  
  let currentSlide = 0;
  
  const updateSlides = () => {
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
      });
      updateDots();
  };
  
  const updateDots = () => {
      dots.innerHTML = '';
      slides.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add(index === currentSlide ? 'active' : '');
          dot.addEventListener('click', () => {
              currentSlide = index;
              updateSlides();
          });
          dots.appendChild(dot);
      });
  };
  
  rightButton.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
  });
  
  leftButton.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
  });
   updateSlides()

  



    /* const contentimg = document.querySelector('.shoecontentcontainer__content')


    contentimg.addEventListener('click', function(event) {
        if (event.target.classList.contains('colorBtn')) {
            const button = event.target;
            const newImageSrc = button.getAttribute('data-image-src');
            console.log(newImageSrc);
            const shoeItem = button.closest('.shoecontentcontainer__content__item');
            const shoeImage = shoeItem.querySelector('.shoeImage');
    
            shoeImage.src = newImageSrc;
        }
    });  */
    

