// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }
// function showSlides(n) {
//     let slides = document.querySelectorAll('.banner-image');
//     let dots = document.querySelectorAll('.dot');
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
//     });
//     dots.forEach((dot) => {
//         dot.classList.remove('active');
//     });
//     dots[slideIndex - 1].classList.add('active');
// }

// // 自动播放
// setInterval(() => {
//     plusSlides(1);
// }, 3000);
let slideIndex = 1;
let autoPlayInterval;

function showSlides() {
    let slides = document.querySelectorAll('.banner-image');
    let dots = document.querySelectorAll('.dot');

    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    if (slideIndex === 3) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setTimeout(() => {
            slideIndex = (slideIndex % 5) + 1;
            showSlides();
        }, 10000);
    } else {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setTimeout(() => {
            slideIndex = (slideIndex % 5) + 1;
            showSlides();
        }, 3000);
    }
}

function plusSlides(n) {
    clearInterval(autoPlayInterval);
    slideIndex += n;
    if (slideIndex > 5) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = 5;
    }
    showSlides();
}

function currentSlide(n) {
    clearInterval(autoPlayInterval);
    slideIndex = n;
    showSlides();
}

// 初始化自动播放
autoPlayInterval = setTimeout(() => {
    showSlides();
}, 3000);