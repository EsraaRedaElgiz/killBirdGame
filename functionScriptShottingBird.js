//shotting bird game
const moveBirdRight = function (imageObject, left, top) {
  let condition = true;
  let intervalId = setInterval(() => {
    if (left >= window.innerWidth - imageObject.width) {
      left = 0;
    }
    left += 10;
    top += Math.random() * (window.innerHeight - imageObject.height);
    if (top >= window.innerHeight - imageObject.height) {
      top = 0;
    }
    if (condition) {
      if (left < window.innerWidth - imageObject.width) {
        imageObject.style.left = left + "px";
        imageObject.addEventListener("click", function () {
          imageObject.src = "./images/killedBird.png";
          condition = false;
          left = 0;
        });
      } else {
        condition = false;
      }
    } else {
      clearInterval(intervalId);
      setTimeout(() => {
        setTimeout(() => {
          imageObject.src = "./images/birdFly.gif";
          imageObject.style.top = top + "px";
        }, 55);
        moveBirdRight(imageObject, left, top);
      }, 350);
    }
  }, 50);
};
