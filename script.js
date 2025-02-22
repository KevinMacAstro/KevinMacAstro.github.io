window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let speed = 0.5; // Adjust this value to control the parallax speed (0.5 is half the speed of scrolling)

  document.querySelector('.background').style.transform = `translateY(${scrollTop * speed}px)`;
  //You may also want to translate the x-axis as well. This is a more complex parallax effect.
});
