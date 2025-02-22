window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let speed = 0.5; 

  document.querySelector('.background').style.transform = `translateY(-${scrollTop * speed}px)`;
});
