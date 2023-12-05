// Using the core $.ajax() method
 // click listener for button
$("#activate").click(function(){

$.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/pokemon-species/6/",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);

        bulba = JSON.stringify(data.names[4].name)
        $("#output").html(bulba);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
});
$("#activate2").click(function(){

    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://pokeapi.co/api/v2/pokemon-species/6/",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
                id: 123,
                api_key: "blahblahblah",
    },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            console.log(data);
            bulba = JSON.stringify(data.name)
            $("#output").html(bulba);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
    });