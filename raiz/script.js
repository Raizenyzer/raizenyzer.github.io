//Button to scroll on top js
let topbtn = document.getElementById("topbtn");

window.onscroll = function() {myFunction()};

function myFunction() {
//Scroll bar js
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}


//Scroll top button js
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}