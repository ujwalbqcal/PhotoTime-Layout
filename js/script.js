var image = document.querySelectorAll('.Image-wrapper img');
var imagewrapper = document.getElementById('image-wrapper');

var previousButton = document.getElementById('previous');
var nextButton = document.getElementById('next');

var index = 1;
var imageSize = image[0].width;
var imageTransition = index * - imageSize;
var stopinterval;

window.onload = function() {
  stopinterval = setInterval(animate,3000);

}

function startSlider() {
  if (stopinterval === null) {
    stopinterval = setInterval(animate,3000);
  }
}

function stopSlider() {
  if (stopinterval) {
    clearInterval(stopinterval);
    stopinterval = null;
  }
}

var animate=()=>{
    imageTransition = index * - imageSize;
    imagewrapper.style.marginLeft = imageTransition + 'px';
    index ++;
    checkCounter();

}

nextButton.addEventListener('click',() =>{
  imageTransition = index * - imageSize;
  imagewrapper.style.marginLeft =imageTransition + 'px'  ;
  index++;

  checkCounter();
});

previousButton.addEventListener('click',()=>{
  index--;
  imagewrapper.style.marginLeft = parseInt(imagewrapper.style.marginLeft) + imageSize + 'px'  ;

  checkCounter();
});

let checkCounter=()=>{
  if(index>image.length){
    index=1;
    imagewrapper.style.marginLeft=`0px`;
  }

if(index<1){
  index=image.length;
  imagewrapper.style.marginLeft=`-${imageSize*(index-1)}px`;
  }
}
