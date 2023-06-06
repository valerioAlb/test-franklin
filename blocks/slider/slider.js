export default function decorate(block) {
  console.info(block);
  // Assuming your HTML block is stored in a variable named htmlBlock
let parser = new DOMParser();
let doc = parser.parseFromString(block, 'text/html');
let slider = doc.querySelector('.slider.block');

let slides = Array.from(slider.children);
let currentSlideIndex = 0;

slides.forEach((slide, index) => {
    slide.style.display = 'none';
});

slides[currentSlideIndex].style.display = 'block';

function goToNextSlide() {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].style.display = 'block';
}

function goToPreviousSlide() {
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slides[currentSlideIndex].style.display = 'block';
}

// This part is for testing purposes. 
// Ideally, you should use buttons for navigating through slides.
setInterval(goToNextSlide, 3000); // Change slides every 3 seconds

}
