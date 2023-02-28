// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let animal = prompt("Name a kind of animal (singular):");
let place = prompt("Name a place:");
let food = prompt("Name a food (plural):");

document.write("Here is a story for you!<br>");
document.write(
  "The giant "
  + animal
  + " walked proudly through "
  + place
  + ", dropping "
  + food
  + " everywhere."
);
