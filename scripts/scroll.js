function reveal() {
    var reveals_down = document.querySelectorAll(".reveal-down");
    var reveals_left = document.querySelectorAll(".reveal-left");
    var reveals_right = document.querySelectorAll(".reveal-right");
    var reveals_circular = document.querySelectorAll(".reveal-circular");

  
    for (var i = 0; i < reveals_down.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals_down[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals_down[i].classList.add("active");
      } else {
        reveals_down[i].classList.remove("active");
      }
    }

    for (var i = 0; i < reveals_left.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals_left[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals_left[i].classList.add("active");
      } else {
        reveals_left[i].classList.remove("active");
      }
    }

    for (var i = 0; i < reveals_right.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals_right[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals_right[i].classList.add("active");
      } else {
        reveals_right[i].classList.remove("active");
      }
    }

    for (var i = 0; i < reveals_circular.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals_circular[i].getBoundingClientRect().top;
      var elementVisible = 300;
      // console.log(reveals_circular);
  
      if (elementTop < windowHeight - elementVisible) {
        reveals_circular[i].classList.add("active");
      } else {
        reveals_circular[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  