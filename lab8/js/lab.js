// index.js - Lab 8: Anon Functions and Callbacks
// Author: Jonah Teitz
// Date: 11/5/2023

//Arrays
var z = [1,5,9,22,66,97,345,1]
console.log("The array is " + z)

//Functions
function multiplyByTen(y) {
  var results = y * 10
  return results;
}

//Test function
console.log("What is 5 * 10? " + multiplyByTen(5))
console.log("What is 2.5 * 10? " + multiplyByTen(2.5))

//Use function with .map
console.log("The array multiplied by 10: " + z.map(multiplyByTen));
//Function .map(function) without the console.log
z.map(multiplyByTen)


//Use anonymous function with .map
console.log("The array divided by 2: " + z.map(function(x) {
  var results = x / 2
  return results;
}))
//anonymous function, no console.log
z.map(function(x) {
  var results = x / 2
  return results;
})

//Task X
var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "The original array: " + z + '<br>' +
"The array multiplied by 10: " + z.map(multiplyByTen) + '<br>' +
"The array divided by 2: " + z.map(function(x) {
  var results = x / 2
  return results;
})


