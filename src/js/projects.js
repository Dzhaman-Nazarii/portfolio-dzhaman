function initSlider(sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} .slider-img`);
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    document.querySelector(`#${sliderId} .slider-prev`).addEventListener('click', prevSlide);
    document.querySelector(`#${sliderId} .slider-next`).addEventListener('click', nextSlide);
}

initSlider('slider1');
initSlider('slider2');
initSlider('slider3');
initSlider('slider4');
initSlider('slider5');