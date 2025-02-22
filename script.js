window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let speed = 0.2; // Adjust scrolling speed
    let asterism = document.querySelector('.asterism');

    // Calculate the asterism's vertical position with parallax effect
    let yPosition = -scrollTop * speed; // Negative for upward movement
    asterism.style.transform = `translateY(${yPosition}px)`;
});
