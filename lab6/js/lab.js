// index.js - Lab 6: Arrays and Objects
// Author: Jonah Teitz
// Date: 10/27/2023

//Variables
var myTransport = [" legs", " bus", " bike", " 1995 Ford Taurus"];

//Objects
myMainRide = {
  make: "Schwinn",
  model: "leToure",
  color: "gold",
  year: 1979,
  extras: "fixies, Brooks saddle",
}

//Output
//For myTransport
document.writeln("I commonly use these forms of transportation: " + myTransport +".<br>");

//For myMainRide
document.writeln("<br>"
)
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");


//I had problems having the script run on the website, but when I added this code from lab 5
//the script starter working.
var make = "Ford";
var model = "Taurus";
var color = "Black";
var year = 1995;
var currentYear = 2023;



// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
