var images = document.getElementsByTagName('img');
var changeFrom = 400; // from which amount of scroll do you want the effect to appear ?

window.addEventListener('scroll', function() {
  if (window.scrollY >= changeFrom ) {
    [].forEach.call(images, function(image) {
      image.classList.add('contact-color');
    });
  }
  else {
    [].forEach.call(images, function(image) {
      image.classList.remove('contact-color');
    });
  }
});