// index.js - Lab 13: Loops
// Author: Jonah Teitz
// Date: 11/26/2023

for (var index=0; index<=200; index++) {
  var str = ' - ' 
  if(index % 3 == 0) {
    str += "Fizz";
  }
  if(index % 5 == 0) {
    str += "Buzz";
  }
  if(index % 7 == 0) {
    str += "Boom";
  }
   $("#output").append("<p>" + index + str + '!' + "</p>");
 }