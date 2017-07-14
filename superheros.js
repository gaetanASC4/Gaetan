function superhero(realName, ability, gender, archEnenemy) {
    this.realName = realName;
    this.ability = ability
    this.gender = gender
    this.archEnenemy = archEnenemy
    
}


var superman = {
    realName : "Clark Kent"


}

// console.log(superman.realName)

var batman = new superhero("Bruce Wayne", "dat money","male","joker");
//var batmanFinal = batman.toString();



 console.log(batmanFinal);

// console.log(batman.realName);


var staticShock = new superhero("Virgil");

//lines 19 and 23 do the same thing because we made a funtion for it//

var staticShock = {
    "realName" : "Virgil"
}
// console.log(batman.realName)
// console.log(superman.realName)
// console.log(staticShock.realName)