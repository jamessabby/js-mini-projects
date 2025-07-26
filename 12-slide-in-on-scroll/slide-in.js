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
      console.log(`Window scrollY: ${window.scrollY}`);
      console.log(`Window innerHeight: ${window.innerHeight}`);
      console.log(`Image offsetTop: ${sliderImage.offsetTop}`);
      console.log(`Image height: ${sliderImage.height}`);

      const slideInAt = (window.innerHeight + window.scrollY) - sliderImage.height / 2;
      const bottomImage = sliderImage.offsetTop + sliderImage.height;
      const halfImage = slideInAt > sliderImage.offsetTop;
      const notScrolledPast = window.scrollY < bottomImage;

      if (halfImage && notScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
      console.log(" ");
      console.log(`Half of image location: ${slideInAt}`);
      console.log(`Bottom of image location: ${bottomImage}`);
      console.log(`Already half the image?: ${halfImage}`);
      console.log(`Not scrolled past the image?: ${notScrolledPast}`);
      console.log("---------------------------------------");

    }) 
  }

window.addEventListener('scroll', checkSlide);