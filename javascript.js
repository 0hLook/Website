document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll("img");
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.scrollTo({
            left: slider.clientWidth * currentIndex,
            behavior: "smooth",
        });
    }

    setInterval(showNextSlide, 4000); // Change slide every 4.0 seconds
});
