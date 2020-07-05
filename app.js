const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');


    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav_active');
        navlinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }
            else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index /7 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
    
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

navSlide();