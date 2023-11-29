$("#buttons").append("<button id='button-light'>Light</button>");
$("#buttons").append("<button id='button-middle'>Middle</button>");
$("#buttons").append("<button id='button-dark'>Dark</button>");

$("#buttons2").append("<button id='anime'>Anime</button>");
$("#buttons2").append("<button id='tradJapan'>Traditional Japanese</button>");
$("#buttons2").append("<button id='americanTrad'>American Traditional</button>");


// Dark Button
$(document).ready(function() {
  $("#button-dark").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "664d48");
    console.log("JS");
});
});
// Light Button
$(document).ready(function() {
  $("#button-light").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "d8bb89");
    console.log("JS");
});
});
// Middle Button
$(document).ready(function() {
  $("#button-middle").click(function(){
//Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "c78d75");
    console.log("JS");
});
});

// Anime Button
$(document).ready(function() {
    $("#anime").click(function(){
      $("#myImage").attr("src", "img/jiggly.png");
      console.log("JS");
});})
// American Traditional Button
$(document).ready(function() {
  $("#americanTrad").click(function(){
    $("#myImage").attr("src", "img/americantrad.png");
    console.log("JS");
});})
// Traditional Japanese Button
$(document).ready(function() {
  $("#tradJapan").click(function(){
    $("#myImage").attr("src", "img/japanesetradfrog.png");
    console.log("JS");
});})


// click listener for button
$("#submit").click(function(){
// get value of input field
const userName = $("#user-name").val();
// append a new div to our output div
$("#output2").html('<div class="text"><p>' + userName + '</p></div>');
// Change background color
$("body,html").css("background-color", userName);
});
