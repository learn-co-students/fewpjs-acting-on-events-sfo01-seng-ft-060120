let dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";

// let left = dodger.style.left == 180px
// dodger.style.left = "180px";
// let bottom = dodger.style.bottom == 0px
// dodger.style.bottom = "0px";

// Let's say we want to move the dodger to the left.
//  First we have to figure what the left arrow key's numeric value is.
//  We could look it up, but we're programmers — let's explore!

// document.addEventListener('keydown', function(e){
//   if (e.key === "ArrowLeft"){
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 5}px`
//   }
// })

function moveDodgerLeft(){
  let dodger = document.getElementById('dodger');
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if(left > 0){
  dodger.style.left = `${left - 5}px`
  }
}

document.addEventListener('keydown', function(e){
    if (e.key === "ArrowLeft"){
      moveDodgerLeft();
    }
  });

  function moveDodgerRight(){
    let dodger = document.getElementById('dodger');
    let leftNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(leftNumbers, 10);
    if (right > 0){
      dodger.style.left = `${right + 5}px`
    }
  }

  document.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight"){
      moveDodgerRight();
    }
  });