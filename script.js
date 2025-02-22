window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let speed = 0.5; // Adjust scrolling speed
    let asterism = document.querySelector('.asterism');

    // Calculate the asterism's vertical position with parallax effect
    let yPosition = -scrollTop * speed; // Negative for upward movement

    // Apply the transformation to background-position
    asterism.style.backgroundPositionY = `${yPosition}px`;
});
