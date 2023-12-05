
ENDPOINT = "https://xkcd.com/info.0.json";

// add button event listener
$("#get-em").click(function(){

	// construct ajax object
	const ajaxParams = {
	url: ENDPOINT,
	type: "GET",
	dataType: "json",
    success: ajaxSuccess,
    error: ajaxError
	}
    $.ajax(ajaxParams);
})





function ajaxSuccess(comic){
console.log("Here's what I got:", comic)
    const title = comic.title;

  //jQuery
$("#output").append("<h2>" + title + "</h2>");


}

function ajaxError(request,error){
console.log("No Worky:", request, error)
$("#output").append("No Worky:", request, error)

}