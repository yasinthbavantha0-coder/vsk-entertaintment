// Navigation link click karaddi header eka thiyeddima smoothly scroll wenna
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Image Gallery Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0; 
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; 
    }
    
    slides[currentSlide].classList.add('active');
}

// Auto-play pictures every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);