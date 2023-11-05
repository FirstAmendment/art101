//Author: Oscar Aguirre
//Created Nov 4
//creating my array
a = [69, 420, 21, 7, 3, 11, 9, 2, 4, 1738]
//displaying my array
console.log("This is my array: " + a);
//creating a function
function times9(b) {return b*9;}
//dislaying my new array
console.log("This is my array passed through a function that multiplies by 9: " + a.map(times9));
//displays my anonymous funtion
console.log("This is my anonymous function that divides my array by itself: " + a.map(function(a) {return a/a;}));
//Chat GPT
var mapResults = '<p>This is my array: </p>' + a+ '<p>This is my array passed through a function that multiplies by 9: </p>' + a.map(times9) +'<p>This is my array passed through an unnamed function that divides by itself: </p>' + a.map(function(a) {return a/a;});
var outputEl = document.getElementById("output");
outputEl.innerHTML = mapResults;

