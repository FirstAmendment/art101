/**
 * Author:Oscar Aguirre
 * Created:11-07-2023
 *
 * (c) Copyright by CocaPancho Lab.
 **/
// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
  console.log("JS");
});

