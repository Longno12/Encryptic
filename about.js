let slideIndex = 0;

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide");
    }
    slides[slideIndex].classList.add("active-slide");
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
});
