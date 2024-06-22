const contentimg = document.querySelector('.shoecontentcontainer__content')
contentimg.addEventListener('click', function(event) {
      if (event.target.classList.contains('colorBtn')) {
          const button = event.target;
          const newImageSrc = button.getAttribute('data-image-src');
          console.log(newImageSrc);
          const shoeItem = button.closest('.shoecontentcontainer__content__item');
          const shoeImage = shoeItem.querySelector('.shoeImage');
  
          shoeImage.src = newImageSrc;
      }
  }) 
 
 