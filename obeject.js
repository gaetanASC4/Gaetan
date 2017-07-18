var charizard = {
    "attack": "flamethrower",
    "HP": "HP: 2000000",

};

console.log(charizard["HP"])

function Pokemon(name, type, hp){
  this.name = name;
  this.type = type;
  this.hp = hp;
  this.speak = function(){
    console.log(this.name+"!");
  }

}
var pikachu = new Pokemon("pikachu","electric",100);

