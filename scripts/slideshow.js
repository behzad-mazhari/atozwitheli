var slideIndex = 0;
var i;
var slides = document.getElementsByClassName("mySlides");
showSlides();
function showSlides() {
    
    //console.log(slides.length);
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides() {

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
}

function minusSlides() {

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex--;
    if(slideIndex < 1) {
        slideIndex = slides.length
    }
    slides[slideIndex - 1].style.display = "block";
}

function currentSlide(a) {
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[a].style.display = "block";

}

