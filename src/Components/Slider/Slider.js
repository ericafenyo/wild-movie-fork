 import React from 'react';
 import './Slider.css';
 import $ from "jquery";

// let scaling = 1.50;
// //count
// let currentSliderCount = 0;
// let videoCount = $(".slider-container").children().length;
// let showCount = 4;
// let sliderCount = videoCount / showCount;
// let controlsWidth = 40;
// let scollWidth = 0;
    
 
    

// const Slider = () => { 
  
//     return(
//       <div class="slider-frame">
    
//     <div class="slider-container">
//     {/* <div class="btn prev"></div>
//     <div class="btn next"></div> */}
//         <div class="slide"><img src="https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Affichefilm_HP1.jpg/revision/latest/scale-to-width-down/250?cb=20120819063135&path-prefix=fr" /></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/169796-collateral-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/FC1F26-million-dollar-baby-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/A0C659-hannibal-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//         <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
//     </div>
//   </div>
//   )
 
// }



//JS 

// const slider = document.querySelector('.items');
// let isDown = false;
// let startX;
// let scrollLeft;
// //Definit une fonction slider qui prend items en paramètre et declare des variable.

// slider.addEventListener('mousedown', (e) => {
//   //prend slider et 
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });








const Slider = () => { 
  
   return(

<div class="grid-container">
  <header class="grid-item header">
    <h2>🍽 CSS Grid Tem-plated 🍽</h2>
    
  </header>
  <div class="grid-item title">
    <h1>So you wanna side scroll, eh?</h1>
  </div>
  <main class="grid-item main">
    <div class="items">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
      <div class="item item7"></div>
      <div class="item item8"></div>
      <div class="item item9"></div>
      <div class="item item10"></div>
    </div>
    <p>🐰🥚Click & Drag <i>powered by Javascript</i></p>
  </main>
  <footer class="grid-item footer">
    <h2>More Things</h2>
    <a>All of the Things</a>
    <a>Some of the Things</a>
    <a>None of the Things</a>
  </footer>
</div>
   )
}

 export default Slider;
