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
// =========================================
// МАСКА ДЛЯ ВВОДА ТЕЛЕФОНА (ТОЛЬКО ЦИФРЫ)
// =========================================
const phoneInput = document.querySelector('input[type="tel"]');

if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        // 1. Удаляем всё, кроме цифр
        let digits = e.target.value.replace(/\D/g, '');

        // Если поле очистили полностью — оставляем пустым
        if (!digits) {
            e.target.value = '';
            return;
        }

        // 2. Если пользователь начал вводить с 7, 8 или 9 — приводим к формату +7
        if (['7', '8', '9'].includes(digits[0])) {
            if (digits[0] === '9') digits = '7' + digits;
            let formatted = '+7';
            if (digits.length > 1) formatted += ' (' + digits.substring(1, 4);
            if (digits.length >= 5) formatted += ') ' + digits.substring(4, 7);
            if (digits.length >= 8) formatted += '-' + digits.substring(7, 9);
            if (digits.length >= 10) formatted += '-' + digits.substring(9, 11);
            e.target.value = formatted;
        } else {
            // Для иностранных номеров (не начинающихся с 7/8/9) просто оставляем цифры и +
            e.target.value = '+' + digits.substring(0, 15);
        }
    });

    // Запрещаем вставку букв через Ctrl+V / правую кнопку мыши
    phoneInput.addEventListener('paste', function (e) {
        const pasted = (e.clipboardData || window.clipboardData).getData('text');
        if (/\D/.test(pasted)) {
            // Событие input само очистит лишнее сразу после вставки
            setTimeout(() => phoneInput.dispatchEvent(new Event('input')), 0);
        }
    });
}
