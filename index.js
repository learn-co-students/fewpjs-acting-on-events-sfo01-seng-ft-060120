// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "100px";

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    moveDodgerLeft();
    moveDodgerRight();
  });

  function moveDodgerLeft() {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
     
      if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
  }

  function moveDodgerRight() {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
     
      if (left > 0) {
        dodger.style.left = `${left + 1}px`;
      }
  }
  

