// Detects the button press

let numberOfButtons = document.querySelectorAll(".drum").length;                // gets the length of buttons who has .drum class

for (let i = 0; i < numberOfButtons; i++) {                                     // iterates over all the buttons

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // when you click each button, it runs a function

    let buttonInnerHTML = this.innerHTML;                                       // gets the inner HTML of the button you clicked
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  })

  };

// Detects the keyboard press 
   document.addEventListener("keydown", function(event) { // runs a function when you press a key
                                                          // event is the object that holds details about which key was pressed.
    makeSound(event.key);                                 // if the type of event that happened is the same as the type of first parameter, 
    buttonAnimation(event.key);                           // it  runs the call back function
   })

function makeSound(key) {

    switch(key) {                                         // switch case that plays a sound depending on the button's inner HTML 

    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      
      case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

      case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerHTML);                // when you click something that triggers the eventlistener 
                                                          //but isn't in the switch case, it logs it 
  }

}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() { 
    activeButton.classList.remove("pressed"); 
  }, 100); 
}