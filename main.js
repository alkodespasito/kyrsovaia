const slides = document.querySelectorAll('.price-panel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    // Прячем абсолютно все карточки
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Показываем только одну нужную
    slides[index].classList.add('active');
}

// Сразу при загрузке страницы показываем первый слайд
showSlide(currentIndex);

// Клик по правой стрелке
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

// Клик по левой стрелке
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});
