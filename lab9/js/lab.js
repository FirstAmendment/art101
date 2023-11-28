/**
 * Author:Oscar Aguirre
 * Created:11-07-2023
 *
 * (c) Copyright by CocaPancho Lab.
 **/
// add button to challenge section
$("#challenge").append("<button id='button-red'>red</button>");
$("#problems").append("<button id='button-middle'>blue</button>");
$("#results").append("<button id='button-challenge'>Special</button>");


// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#results").toggleClass("special");
  console.log("JS");
});

$(document).ready(function() {
  $("#button-middle").click(function(){
//Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "blue");
    console.log("JS");
});
});
$(document).ready(function() {
  $("#button-red").click(function(){
//Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "red");
    console.log("JS");
});
});
