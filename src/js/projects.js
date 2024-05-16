document.addEventListener('DOMContentLoaded', () => {
    function initSlider(sliderId) {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        const slides = slider.querySelectorAll('.slider-img');
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

        const prevButton = slider.querySelector('.slider-prev');
        const nextButton = slider.querySelector('.slider-next');

        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        } else {
            console.error(`Prev button not found in slider ${sliderId}`);
        }

        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        } else {
            console.error(`Next button not found in slider ${sliderId}`);
        }
    }

    const sliderIds = ['slider1', 'slider2', 'slider3', 'slider4', 'slider5'];
    sliderIds.forEach(initSlider);
});