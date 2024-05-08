const images = document.querySelectorAll('.slider-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
console.log(images);
let imageIndex = 0;

function show(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    imageIndex = index;
}

prevBtn.addEventListener('click', () => {
    let index = imageIndex - 1;
    if (index < 0) {
        index = images.length - 1;
    }
    show(index);
});

nextBtn.addEventListener('click', () => {
    let index = imageIndex + 1;
    if (index >= images.length) {
        index = 0;
    }
    show(index);
});

show(imageIndex);