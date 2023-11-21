
var name;
$("#input").click(function(){

    var name = $("#input").val()


    console.log("Java is woking " + name);
})

$('#my-button').click(function() {
$("#title").text("Hello " + name);
});

