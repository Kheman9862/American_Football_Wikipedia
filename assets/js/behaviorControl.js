function smoothScroll(tar, duration) {
  var tar = document.querySelector(tar);
  var tarPosition = tar.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = tarPosition - startPosition;
  var startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function executeSmoothScroll(boxTarget1, boxTarget2, boxTarget3) {
  var box = document.querySelector(boxTarget1);
  box.addEventListener("click", function() {
    smoothScroll(boxTarget2, boxTarget3);
  });
}

executeSmoothScroll(".boxA", ".box2", 1500);
executeSmoothScroll(".box1", ".box2", 1500);

/////////////////////////////Image SlideShow///////////////////////////////

let i = 0;
let images = [];
let time = 2000;

images[0] = "assets/media/history1.jpg";
images[1] = "assets/media/history2.jpg";
images[2] = "assets/media/history3.jpg";

function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
