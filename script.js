window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let speed = 0.4; // Adjust scrolling speed - Increased for better visual effect
    let asterism = document.querySelector('.asterism');
    let maxBrightness = 1.2; // Maximum brightness level
    let minBrightness = 0.5; // Minimum brightness level
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    
    // Calculate the brightness using a sine wave function
    let brightness = minBrightness + (maxBrightness - minBrightness) * (0.5 * (1 + Math.sin((scrollTop / scrollHeight) * 2 * Math.PI)));
    let yPosition = -scrollTop * speed; // Control background position with scroll

    asterism.style.backgroundPositionY = `${yPosition}px`;
    asterism.style.filter = `brightness(${brightness})`;
});



window.addEventListener('load', function() {
    const contentContainer = document.querySelector('.content-container');

    // Center the content within the container.  Uses flexbox
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'center';
    contentContainer.style.alignItems = 'center';
});