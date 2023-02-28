// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let adjective = prompt("Enter an adjective");
let singWeapon = prompt("Enter a weapon (singular)");
let ingVerb = prompt("Enter a verb ending with -ing")
let item = prompt("Enter an item needed for survival (plural)")
let food = prompt("Name a food that could fit easily in the hand (plural)")

document.write("Here is a story for you!<br>");
document.write(
  "The "
  + adjective
  + " adventurer entered a random shop looking for a "
  + singWeapon
  + " of "
  + ingVerb
  + ". "
  + "Inside this shop were some racks of old dusty "
  + item
  + " and "
  + food
  + " that look like they were well past a reasonable condition to consume."
);
