function pokeStats(name, type, hp, def, atk, legend){
    this.name = name
    this.type = type
    this.hp = hp
    this.def = def
    this.atk = atk
    this.legend = legend
    this.pokemonAttacked = function(pokemonAttacked) {
        this.hp -=40
            
        }
}

var charizard = new pokeStats("Charizard", "Flying ,Fire", "100","200","300" ,false)
var pikachu = new pokeStats("Pikachu", "Electric","200","400","600", true)
var hitmonlee = new pokeStats("Hitmonlee","FIghting", "300","600","900",true)
var giratina = new pokeStats("Giratina","Flying","3000","4000","5000", false)
var squirtle = new pokeStats("Squirtle","Water","30","40","50",false)
var gaetan = new pokeStats("Gaetan","Everything","10000000000000000000000000000000000000000000000","10000000000000000000000000000000000000000000000000000000000","1000000000000000000000000000000000000000000000000000000000000000000000",true)

var pRoster =[
    charizard,
    pikachu,
    hitmonlee,
    giratina,
    squirtle,
    gaetan
]

function pokemonRoster(){
console.log(pRoster[0])
console.log(pRoster[1])
console.log(pRoster[2])
console.log(pRoster[3])
console.log(pRoster[4])
console.log(pRoster[5])
console.log(pRoster[6])
}

pokemonRoster();

var pRoster = [charizard, pikachu, hitmonlee, giratina,squirtle, gaetan]
function pokemonRoster 
    for(var i=0; i > 6; i++) {
    console.log(pokemonRoster(i))   
    }

// console.log(charizard.hp)
// charizard.pokemonAttacked();
// console.log(charizard.hp)
// console.log(pikachu.hp)
// pikachu.pokemonAttacked();
// console.log(pikachu.hp)

