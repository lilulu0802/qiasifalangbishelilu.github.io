const images = document.querySelectorAll('.image-gallery img');

images.forEach((image) => {
  image.addEventListener('mouseenter', function () {
    this.style.left = '25px';
  });

  image.addEventListener('mouseleave', function () {
    this.style.left = '0';
  });
});