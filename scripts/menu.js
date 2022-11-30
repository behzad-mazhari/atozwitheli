// window.onresize = function(){
//     if ( $(window).width() > 868) {
//       document.getElementById("navbar").className = "navbar";
//     }
//   }

  window.onresize = function(){
    if ( $(window).width() > 868) {
      document.getElementById("myTopnav-mobile").className = "myTopnav-mobile";
      document.getElementById("lang-select").className = "lang-select";
    }
  }

// function menuPop() {
//   var x = document.getElementById("navbar");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }


function menuPop() {
  var x = document.getElementById("myTopnav-mobile");
  if (x.className === "myTopnav-mobile") {
    x.className += " responsive";
  } else {
    x.className = "myTopnav-mobile";
  }

  var y = document.getElementById("lang-select");
  if ((y.className === "lang-select text-persian") || (y.className === "lang-select")) {
    // console.log(y.className);
    y.className += " responsive";
    // console.log("classname was lang-select now it is \n");
    // console.log(y.className);
  } else {
    // console.log(y.className);
    y.className = "lang-select";
    // console.log("classname was not lang-select now it is \n");
    // console.log(y.className);
  }
}











  
