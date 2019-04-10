import React from 'react';
import './Slider.css';
import $ from "jquery";

let scaling = 1.50;
//count
let currentSliderCount = 0;
let videoCount = $(".slider-container").children().length;
let showCount = 4;
let sliderCount = videoCount / showCount;
let controlsWidth = 40;
let scollWidth = 0;
    

$(document).ready(function(){
    //$('.slider-container .slide:nth-last-child(-n+4)').prependTo('.slider-container');
    init();
    
});
$( window ).resize(function() {
    init();
});
function init(){
    // elements
  let win = $(window);
    let sliderFrame = $(".slider-frame");
    let sliderContainer = $(".slider-container");
    let slide = $(".slide");
    
    //counts
    let scollWidth = 0;
 
    
    //sizes
    let windowWidth = win.width();
    let frameWidth = win.width() - 80;
     if(windowWidth >= 0 && windowWidth <= 414){
       showCount = 2;
   }else if(windowWidth >= 414 &&  windowWidth <= 768){
       showCount = 3;
   }else{
       showCount = 4;
   }
    let videoWidth = ((windowWidth - controlsWidth * 2) / showCount );
    let videoHeight = Math.round(videoWidth / (16/9));
    
    let videoWidthDiff = (videoWidth * scaling) - videoWidth;
    let videoHeightDiff = (videoHeight * scaling) - videoHeight;
    
  
    
    //set sizes
    sliderFrame.width(windowWidth);
    sliderFrame.height(videoHeight * scaling);
    
    
    //sliderFrame.css("top", (videoHeightDiff / 2));
    
    sliderContainer.height(videoHeight * scaling);
    sliderContainer.width((videoWidth * videoCount) + videoWidthDiff);
    sliderContainer.css("top", (videoHeightDiff / 2));
    sliderContainer.css("margin-left", (controlsWidth));
    
    slide.height(videoHeight);
    slide.width(videoWidth);
    
    //hover effect
    $(".slide").mouseover(function() {
        $(this).css("width", videoWidth * scaling);
        $(this).css("height", videoHeight * scaling);
        $(this).css("top", -(videoHeightDiff / 2));
        if($(".slide").index($(this)) == 0 || ($(".slide").index($(this))) % 4 == 0){
          // do nothing
        }
        else if(($(".slide").index($(this)) + 1) % 4 == 0 && $(".slide").index($(this)) != 0){
            $(this).parent().css("margin-left", -(videoWidthDiff - controlsWidth));
        }
        else{
            $(this).parent().css("margin-left", - (videoWidthDiff / 2));
        }
    }).mouseout(function() {
        $(this).css("width", videoWidth * 1);
        $(this).css("height", videoHeight * 1);
        $(this).css("top", 0);
        $(this).parent().css("margin-left", controlsWidth);
    });
    
    // controls
    controls(frameWidth, scollWidth);
}
function controls(frameWidth, scollWidth){
    var prev = $(".prev");
    var next = $(".next");
    
    next.on("click", function(){
        console.log(currentSliderCount);
        console.log(sliderCount);
        scollWidth = scollWidth + frameWidth;
        $('.slider-container').animate({
            left: - scollWidth
        }, 300, function(){ 
            if(currentSliderCount >= sliderCount-1){
                $(".slider-container").css("left", 0);
                currentSliderCount = 0;
                scollWidth = 0;
            }else{
                currentSliderCount++;
            }
        });        
    });
    prev.on("click", function(){
        scollWidth = scollWidth - frameWidth;
        $('.slider-container').animate({
            left: + scollWidth
        }, 300, function(){ 
            currentSliderCount--;
        });
        //$(".slider-container").css("left", scollWidth);
    });
};
 
    

const Slider = () => { 
  
    return(
      <div class="slider-frame">
    <div class="btn prev"></div>
    <div class="btn next"></div>
    <div class="slider-container">
        <div class="slide"><img src="https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Affichefilm_HP1.jpg/revision/latest/scale-to-width-down/250?cb=20120819063135&path-prefix=fr" /></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/169796-collateral-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/FC1F26-million-dollar-baby-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/A0C659-hannibal-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
        <div class="slide"><img src="https://assets.e-cinema.com/UPLOADS/622134-zodiac-affiche.jpg"/></div>
    </div>
  </div>
  )
 
}

export default Slider;
