// index.js - Lab 7: Functions
// Author: Jonah Teitz
// Date: November 2, 2023


//Function to get users name, and to sort it.
function userNameSort() {
    var userName = window.prompt()
    return userName.split('').sort().join('')
}

//Output
document.writeln('Here is your name sorted: ' + userNameSort())



main();
