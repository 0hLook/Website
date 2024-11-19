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

    setInterval(showNextSlide, 5000); // Change slide every 5.0 seconds
});

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
      // Add active class to the clicked button
      button.classList.add('active');
  
      // Hide all content sections
      document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
      // Show the corresponding content
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
