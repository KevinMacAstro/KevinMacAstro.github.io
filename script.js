window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let asterism = document.querySelector('.asterism');
    let maxBrightness = 1.2; // Maximum brightness level
    let minBrightness = 1;   // Minimum brightness level
    let scrollHeight = document.body.scrollHeight - window.innerHeight; //added to scale the brightness
    let brightness = minBrightness + (maxBrightness - minBrightness) * (scrollTop / scrollHeight);

    asterism.style.filter = `brightness(${brightness})`;
});
