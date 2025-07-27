    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {  
    sliderImages.forEach(sliderImage => {
      
      console.log("---------------------------------------");
      console.log(`Window scrollY: ${window.scrollY}`);           // how far you've scrolled from top of page
      console.log(`Window innerHeight: ${window.innerHeight}`);   //  height of your browser window
      console.log(`Image offsetTop: ${sliderImage.offsetTop}`);   // distance from top of page to top of image 
      console.log(`Image height: ${sliderImage.height}`);         // height of image 

      const slideInAt = (window.innerHeight + window.scrollY) - sliderImage.height / 2;   // Just imagine that this is an invisible line 
      const bottomImage = sliderImage.offsetTop + sliderImage.height;
      const isHalfImage = slideInAt > sliderImage.offsetTop;    // Trigger condition
      const notScrolledPast = window.scrollY < bottomImage;     // The value of the very top of your window is not greater than the bottom of image

      if (isHalfImage && notScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
      console.log(" ");
      console.log(`Half of image location: ${slideInAt}`);
      console.log(`Bottom of image location: ${bottomImage}`);
      console.log(`Already half the image?: ${isHalfImage}`);
      console.log(`Not scrolled past the image?: ${notScrolledPast}`);
      console.log("---------------------------------------");

    }) 
  }

window.addEventListener('scroll', checkSlide);