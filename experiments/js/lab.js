$("#buttons").append("<button id='button-light'>Light</button>");
$("#buttons").append("<button id='button-middle'>Middle</button>");
$("#buttons").append("<button id='button-dark'>Dark</button>");

$("#buttons2").append("<button id='anime'>Anime</button>");
$("#buttons2").append("<button id='tradJapan'>Traditional Japanese</button>");
$("#buttons2").append("<button id='americanTrad'>American Traditional</button>");
$("#buttons2").append("<button id='americanTrad'>Random Image</button>");

// removes lag from js functions
$(document).ready(function() {
// Dark Button
  $("#button-dark").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "664d48");
    console.log("JS");
});

// Light Button

  $("#button-light").click(function(){
      //Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "d8bb89");
    console.log("JS");
});

// Middle Button

  $("#button-middle").click(function(){
//Thank you stack overflow, https://stackoverflow.com/questions/8035695/how-to-get-the-body-element-using-jquery
    $("body,html").css("background-color", "c78d75");
    console.log("JS");
});


// Anime Button
    $("#anime").click(function(){
      $("#myImage").attr("src", "img/jiggly.png");
      console.log("JS");
});
// American Traditional Button
$(document).ready(function() {
  $("#americanTrad").click(function(){
    $("#myImage").attr("src", "img/americantrad.png");
    console.log("JS");
});})
// Traditional Japanese Button
  $("#tradJapan").click(function(){
    $("#myImage").attr("src", "img/japanesetradfrog.png");
    console.log("JS");
});


// click listener for button
$("#submit").click(function(){
// get value of input field
const userName = $("#user-name").val();
// append a new div to our output div
$("#output2").html('<div class="text"><p>' + userName + '</p></div>');
// Change background color
$("body,html").css("background-color", userName);
});


//upload function ~ Thank You CHAT GPT
function uploadImage() {
  // Get the input element and the img element
  var input = document.getElementById('imageInput');
  
  // Check if a file is selected
  if (input.files.length > 0) {
      var file = input.files[0];

      // Check if the selected file is an image
      if (file.type.startsWith('image/')) {
          // Create a FileReader to read the image file
          var reader = new FileReader();

          // Set up the FileReader callback when the file is loaded
          reader.onload = function (e) {
              // Set the src attribute of the specified img element to the data URL of the loaded image
              $("#myImage").attr("src", e.target.result);
          };

          // Read the image file as a data URL
          reader.readAsDataURL(file);
      } else {
          alert('Please select a valid image file.');
      }
  } else {
      alert('Please select an image file.');
  }
}


//more chatgpt
// function getRandomImage() {
//   const width = 400;  // Adjust width as needed
//   const height = 300;  // Adjust height as needed

//   const apiUrl = `https://picsum.photos/${width}/${height}`;

//   // Fetch the image
//   fetch(apiUrl)
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(`Network response was not ok: ${response.status}`);
//           }
//           return response.url;
//       })
//       .then(imageUrl => {
//           // Display the image on the page
//           document.getElementById('randomImage').src = imageUrl;
//       })
//       .catch(error => {
//           console.error('Error fetching random image:', error);
//       });
// }

// // Call the function to get a random image when the page loads
// window.onload = getRandomImage;
})