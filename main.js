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
const principleSlides = document.querySelectorAll('.principle-slide');
const prevPrincipleBtn = document.querySelector('.prev-principle');
const nextPrincipleBtn = document.querySelector('.next-principle');

let principleIndex = 0;

function showPrincipleSlide(index) {
    principleSlides.forEach((slide) => {
        slide.classList.remove('active');
    });
    principleSlides[index].classList.add('active');
}

if (principleSlides.length > 0) {
    showPrincipleSlide(principleIndex);

    nextPrincipleBtn.addEventListener('click', () => {
        principleIndex++;
        if (principleIndex >= principleSlides.length) {
            principleIndex = 0;
        }
        showPrincipleSlide(principleIndex);
    });

    prevPrincipleBtn.addEventListener('click', () => {
        principleIndex--;
        if (principleIndex < 0) {
            principleIndex = principleSlides.length - 1;
        }
        showPrincipleSlide(principleIndex);
    });
}
