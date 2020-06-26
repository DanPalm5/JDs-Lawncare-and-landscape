const bgimg = document.querySelector(".hero")

const t1 = new TimelineMax();

t1.fromTo(bgimg, 1.5, {height:"0%"}, 
{height: "100%", ease: Power2.easeInOut}
).fromTo(
    bgimg, 
    1.2,
     {width: "80%"},
    {width: "100%", ease: Power2.easeInOut}
);

// JS for Slides
var slideIndex = [1,1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["lawncare", "mulching", "debris"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}