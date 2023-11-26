$("#output").append("<button id='button-middle'>Middle</button>");
$("#output").append("<button id='button-light'>Light</button>");
$("#output").append("<button id='button-dark'>Dark</button>");



$(document).ready(function() {
  $("#button-dark").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
      $("body,html").toggleClass("dark");
      console.log("JS");
  });
});
$(document).ready(function() {
  $("#button-light").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
      $("body,html").toggleClass("light");
      console.log("JS");
  });
});
$(document).ready(function() {
  $("#button-middle").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
      $("body,html").toggleClass("medium");
      console.log("JS");
  });
});
