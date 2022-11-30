//$(".navbar, .showcase, .blog, .languages, .footer").hide();
if (localStorage.getItem('intro')) {
    localStorage.setItem('intro', 7000);
} else {
    localStorage.setItem('intro', 0);
}

const intro = localStorage.getItem('intro');
console.log(intro);
$(document).ready(function() {
    //$(".navbar, .showcase, .blog, .languages, .footer").hide();
    //$(".atoz-larg").show();
    //alert($(".atoz-larg").attr("style")); 
    //alert($("body").attr("style")); 
    setTimeout(function(){
        $(".atoz-larg").hide();
        $(".preloader-container-index").show();
        // $(".intro-hide").show();
        console.log('Intro Done!');    
        
    }, intro);
    
}); 

//function plusSlides() {
//
//}