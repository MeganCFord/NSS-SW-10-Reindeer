
var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");


//Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

var reindeerColors = colors.length > reindeer.length ? colors.length : reindeer.length;

//if (colors.length >= reindeer.length) {
  //reindeerColors = colors;
//} else {
//  reindeerColors = reindeer;
//}
////this works, it found that colors is longer than reindeer. however, I'm going to use the shorter way to say it for practice.

//console.log("checking if", reindeerColors);

for (var i = 0; i < reindeerColors; i++) {
  if (reindeer[i] !== undefined && colors[i] !== undefined) {
    hohohoElement.innerHTML += ( "<p>Reindeer " + reindeer[i] + " is " + colors[i] + ".</p>" );
  }   
 } 

 //note: the if statement needs to say if the [i] output is undefined. undefined does not need quotes around it because it is an object.

//////////////////////
//keeping all this shit in here because I did it wrong. see 'boybands'- use the if statement to only do something IF IT ISN'T undefined- don't tell it to start by looking for the undefined. 
/////////////////////////////////////
//if (reindeer[i] == undefined || colors[i] == undefined) {
//  display = ???
//} else {
//  for (var i = 0; i < reindeerColors.length; i++) {
 // hohohoElement.innerHTML += "<p>Reindeer " + reindeer[i] + " is " + colors[i] + ".</p>"
 // }
//}
////////////////////////////////////

