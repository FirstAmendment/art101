function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;

    if(mod == 0){
    return "Gryffindor";
    }else if(mod == 1){
    return "Ravenclaw";
    }else if(mod == 2){
    return "Slytheryn";
    }else if(mod == 3){
    return "Hufflepuff";
    }
    }
  // click listener for button
$("#submit").click(function(){
    // get value of input field
const userName = $("#user-name").val();
house = sortingHat(userName);
    // append a new div to our output div
$("#output").html('<div class="text"><p>' + house + '</p></div>');

});



