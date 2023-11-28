
// get user input
var usrname = prompt("Please enter your username");
function nameBreakdown(a){
// create an array
splitUsr = a.split("");
// sort array
splitUsr.sort()
// return sorted array
var joinUsr = splitUsr.join('');
return joinUsr;
}
//print array
document.writeln(nameBreakdown(usrname))