// index.js - creating arrays and objects, then calling on them
// Author: Oscar Aguirre
// Date:10/26/2023

// Constants

// Functions
//declare myRide
var myRide = {
  make : "Chevrolet",
  model: "El Camino",
  color: "Blood Red",
  year : 1969,
  age: function() {
      return 2023 - this.year;
  }
}

//declare myTransport
myTransport = ["bus", "car", "walking", "plane", "train"];

//display myTransport
document.writeln("<br>Getting around: " + myTransport + "<br>");

//display myRide
document.writeln("My Ride: <pre>", 
    JSON.stringify(myRide, null, '\t'), "</pre>");









