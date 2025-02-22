
window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let speed = 0.5; // Adjust this value to control the parallax speed

  // Corrected calculation for upward movement
  document.querySelector('.background').style.transform = `translateY(-${scrollTop * speed}px)`;
});
