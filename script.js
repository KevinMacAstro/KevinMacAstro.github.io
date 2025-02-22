window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let speed = 0.3; // Adjust scrolling speed
    let asterism = document.querySelector('.asterism');

    // Calculate the asterism's vertical position with parallax effect
    let yPosition = scrollTop * speed;
    asterism.style.top = `${yPosition}px`;

    //Ensure that it doesn't go off the top of the screen.
    if (yPosition < 0) {
        asterism.style.top = '0px';
    }
});
