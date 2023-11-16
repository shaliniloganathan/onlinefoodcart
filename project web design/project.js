// https://codepen.io/Mohammed-Hamza_Pakistan/pen/eYQQXEJ
// https://codepen.io/kathykato/pen/prEmKe

// let carouselitem =document.querySelectorAll('carouselitem');
// let currentindex=0;
// function showslide(index){
//     carouselitem.forEach(item=>{
//         item.style.display="none";
//     });

//     carouselitem[index].style.display="block";
// }
// function nextslide(){
//     currentindex=(currentindex+1)%carouselitem.length;
//     showslide(currentindex);

// }
// function previousslide(){
//     currentindex=(currentindex-1 +carouselitem.length)%carouselitem.length;
//     showslide(currentindex);
// }

// showslide(currentindex);
// document.getElementById('nextBtn').addEventListener('click',nextslide)
// document.getElementById('prevBtn').addEventListener('click',previousslide)
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}