document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img"); // Now inside the event listener
    let slideIndex = 0; // Declare slideIndex inside the function
    let setIntervalId = null;
  
    function initializeSlider() {
      if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide"); // Show first image
        setIntervalId = setInterval(nextSlide, 2000); // Start slideshow
      }
    }
  
    function nextSlide() {
      slides[slideIndex].classList.remove("displaySlide"); // Hide current slide
      slideIndex = (slideIndex + 1) % slides.length; // Move to next slide
      slides[slideIndex].classList.add("displaySlide"); // Show next slide
    }
  
    initializeSlider(); // Start the slider
  });