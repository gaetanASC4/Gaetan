var mashArray = ["Haiti", "Jamcaica","Africa", "Barbados"];
var firstQuestion = ["5", "9"];
var secondQuestion = ["Mario","Luigi"]

var prompt = require('prompt-sync')();
function battleRoyal(){
var fight = prompt("Who will you choose to fight?") 
var strike = prompt ("How many times will you strike?")
firstQuestion.push(strike);
secondQuestion.push(fight)
}
battleRoyal();
// while(firstQuestion.length<5){
    // battleRoyal();
// }
var randArray = function (array){
    return array [Math.floor(Math.random()) * array.length];

}

console.log("You fought" + randArray (secondQuestion) + "in " + randArray (mashArray) + "and hit them" + randArray (firstQuestion) + "times");

 