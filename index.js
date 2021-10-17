


  //Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    console.log(this.innerHTML);

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

    /*the "this" element in this line of code puts in the console the element with
 the EventListener that got trigered.
*/
  });
}


  //Detecting key press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

  console.log(event.key);

  // event.key = this.innerHTML;
  /* in this case the event.key that detects a key stroke has the same propriety
  of returning the key that got pressed as the this.innerHTML that has the propriety
  of returning the button name that got pressed, in this case the button names
  and the key names are the same.
  */
  //The entier document is listening for keyboard presses
});


function makeSound(key){
  switch (key) {
    case "w"/*currentKey*/:
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a"/*currentKey*/:
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s"/*currentKey*/:
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;


    case "d"/*currentKey*/:
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j" /*currentKey*/:
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k"/*currentKey*/:
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l"/*currentKey*/:
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100/*ms*/);
/*we put the "." because we need to specify a class, and classes in js are
specifyed exactly as classes in css.*/
}




//The addEventlistner has this syntax:
//document.querySelector("the element").addEventListener(type, listener);
//listener is usualy a js function
