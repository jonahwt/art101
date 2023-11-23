// index.js - Lab 12: Conditionals
// Author: Jonah Teitz
// Date: 11/21/23

function sortingHat(str) {
  var mod = str.length % 4
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
};

$('#button').click(function(){
  var name = $("#input").val()
  var house = sortingHat(name)
  $("#output").html('<div class="text"><p> The sorting hat has sorted you into ' + house + '</p></div>');
})