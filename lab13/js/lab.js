function isMultipleOf3(number) {
    return number % 3 === 0;
}
function isMultipleOf5(number) {
    return number % 5 === 0;
}
function isMultipleOf7(number) {
    return number % 7 === 0;
}
function isMultipleOf15(number) {
    return number % 15 === 0;
}
function isMultipleOf21(number) {
    return number % 21 === 0;
}
function isMultipleOf35(number) {
    return number % 35 === 0;
}

for (var i=1; i<=200; i++){

if (isMultipleOf35(i) === true && isMultipleOf3(i) === true){console.log("fizzbuzzboom");}

else if (isMultipleOf35(i)===true){ console.log("buzzboom");}

else if (isMultipleOf21(i)===true){console.log("fizzboom");}

else if (isMultipleOf15(i)===true){console.log("fizzbuzz");}

else if (isMultipleOf3(i)===true){console.log("fizz");}

else if (isMultipleOf5(i)===true){console.log("buzz");}

else if (isMultipleOf7(i)===true){console.log("boom");}

else{console.log(i);}

}
var oneLongString = "";


for (var i=1; i<=200; i++){

    if (isMultipleOf35(i) === true && isMultipleOf3(i) === true){oneLongString = oneLongString.concat("fizzbuzzboom, ");}
    
    else if (isMultipleOf35(i)===true){oneLongString = oneLongString.concat("buzzboom, ");}
    
    else if (isMultipleOf21(i)===true){oneLongString = oneLongString.concat("fizzboom, ");}
    
    else if (isMultipleOf15(i)===true){oneLongString = oneLongString.concat("fizzbuzz, ");}
    
    else if (isMultipleOf3(i)===true){oneLongString = oneLongString.concat("fizz, ");}
    
    else if (isMultipleOf5(i)===true){oneLongString = oneLongString.concat("buzz, ");}
    
    else if (isMultipleOf7(i)===true){oneLongString = oneLongString.concat(" boom, ");}
    
    else{oneLongString = oneLongString.concat(i + ", ");}
}

$("#output").html(oneLongString);
