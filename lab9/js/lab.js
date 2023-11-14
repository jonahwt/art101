// index.js -Lab 9: Libraries & jQuery\
// Requirements: jQuery must be loaded for this script to work.
// Author: Jonah Teitz
// Date: November 2023

// add buttons to sections
$("#challenge").append("<button id='button'>Click me to reveal the text!</button>");
$("#problems").append("<button id='button2'>Click me to change the text!</button>");
$("#reflection").append("<button id='button3'>Click me for fun!</button>");


// add a click listener to the buttons
$("#challenge").toggleClass("special");
$("button#button").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

$("button#button2").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special2");
});

$("button#button3").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflection").toggleClass("special3");
});