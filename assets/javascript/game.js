$( document ).ready(function(){



var counter=0;
var wins=0;
var losses=0;

var targetNumber= 19 + Math.floor(Math.random()*101);
var gem1=1+Math.floor(Math.random()*12);
var gem2=1+Math.floor(Math.random()*12);
var gem3=1+Math.floor(Math.random()*12);
var gem4=1+Math.floor(Math.random()*12);

console.log("gem1 "+(gem1));
console.log("gem2 "+(gem2));
console.log("gem3 "+(gem3));
console.log("gem4 "+(gem4));
console.log(targetNumber);
console.log(wins)


$("#number-to-guess").text(targetNumber);
$('#counter').text(counter);
$("#wins").text(wins);
$("#losses").text(losses);




$('#blue').on ('click', function(){
    counter=counter+gem1;
    $('#counter').text(counter);
    
if (counter==targetNumber){
wins++;
console.log(wins);
$("#wins").text(wins);
alert("You Win!");

reset();
}

else if (counter > targetNumber){
    losses++;
    $("#losses").text(losses);
alert("You Lost!");

console.log(losses);
reset();
}
}) 


$('#ruby').on ('click', function(){
    counter=counter+gem2;
    $('#counter').text(counter);
   
if (counter==targetNumber){
wins++;
console.log(wins);
$("#wins").text(wins);
alert("You Win!");

reset();
}

else if (counter > targetNumber){
    losses++;

    $("#losses").text(losses);
alert("you Lost");

reset();
}
}) 

$('#emerald').on ('click', function(){
    counter=counter+gem3;
    $('#counter').text(counter);
   
if (counter == targetNumber){
wins++;
console.log(wins);

$("#wins").text(wins);
alert("You Win!");

reset();
}

else if (counter > targetNumber){
    losses++;
    $("#losses").text(losses);
alert("You Lost!");

reset();
}
}) 

$('#diamond').on ('click', function(){
    counter=counter+gem4;
    $('#counter').text(counter);
   
if (counter==targetNumber){
wins++;
console.log(wins)
$("#wins").text(wins);
alert("You Win!");

reset();
}

else if (counter > targetNumber){
    losses++;
    $("#losses").text(losses);
alert("You Lost!");

reset();
}
}) 

function reset (){
counter=0;
targetNumber= 19 + Math.floor(Math.random()*101);
gem1=1+Math.floor(Math.random()*12);
gem2=1+Math.floor(Math.random()*12);
gem3=1+Math.floor(Math.random()*12);
gem4=1+Math.floor(Math.random()*12);
$("#number-to-guess").text(targetNumber);
$('#counter').text(counter);
}

}); 