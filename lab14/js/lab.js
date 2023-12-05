const ENDPOINT = "https://icanhazdadjoke.com/api";
//attach an event listener
$("#go").click(function(){
//Ajax this shit 
$.ajax({
  "url":ENDPOINT,
  "success": function(results){
    jokeText = results.joke
    $("#output").append("<p>" + joketext);
  },
  "errror": function(){
  

}
})})