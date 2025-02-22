window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let speed = 0.2; // Adjust scrolling speed
    let asterism = document.querySelector('.asterism');
    let maxBrightness = 2.0; // Maximum brightness level
    let minBrightness = 0.5;   // Minimum brightness level
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    let brightness = minBrightness + (maxBrightness - minBrightness) * (scrollTop / scrollHeight);
    let yPosition = -scrollTop * speed;

    asterism.style.backgroundPositionY = `${yPosition}px`;
    asterism.style.filter = `brightness(${brightness})`;
});
