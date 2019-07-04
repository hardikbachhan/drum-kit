
// function to output desired sound type according to the key pressed
//,or button clicked.

function soundSelector(stimulusPerciever) {

  switch (stimulusPerciever) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;

    default:
      console.log(selectedElement);
  }

}

//function to add animation to button which gets clicked or pressed.

function buttonAnimation(keyPressed){
  var buttonSelected = document.querySelector("." + keyPressed);
  console.log(buttonSelected);
  buttonSelected.classList.add("pressed");
  setTimeout(function(){
    buttonSelected.classList.remove("pressed");
  },100);
}


// Event listener for clicks

var drumButtonNumber = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtonNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var selectedElement = this.innerHTML;

    soundSelector(selectedElement);

    buttonAnimation(selectedElement);

  });
}

// Event listener for Key strokes.

document.addEventListener("keydown", function(event) {

  var keyStroke = event.key;

  soundSelector(keyStroke);

  buttonAnimation(keyStroke);

})



//    to make every button post an alert on refreshing.
//
// var drumButtonNumber = document.querySelectorAll(".drum").length;
//
// for(var i = 0;i<drumButtonNumber;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//   alert("hello");
//     this is the case of an anonymous function.
//     what to do when click is detected.
// });
// }


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
