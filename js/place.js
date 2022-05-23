function modelAc() {
  document.getElementById("mainModal").style.display = "block";
}

function modelKapa() {
  document.getElementById("mainModal").style.display = "none";
}

function menuModalKapa() {
  document.getElementById("menuModal").style.display = "none";
}


function menuModalAc(){
  document.getElementById("menuModal").style.display = "block"
}

document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
      isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
      modelKapa();
      menuModalKapa();
  }
}

var slideIndex = 1;
indexGoster(slideIndex);

function indexArtir(n) {
  indexGoster(slideIndex += n);
}

function indexBelirt(n) {
  indexGoster(slideIndex = n);
}

function indexGoster(n) {
  var i;
  var slides = document.getElementsByClassName("modalSlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}