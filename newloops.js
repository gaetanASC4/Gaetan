function Capitols(location, food, people, celebrities){
    this.location = location
    this.food = food
    this.people = people
    this.celebrities = celebrities
}

var ALbany = new Capitols("New York","Pizza","7,000,000",["J.Cole","50 Cent"]);
var Sacramento = new Capitols("California","Fries","2,000,000",["Selena Gomez","Justin Beiber"]);
var Honolulu = new Capitols("Hawaii","Coconuts","100,000","TBH I'm not sure");
var Montgomery = new Capitols("Alabama","Not sure","300,000","None");

Capitols();

var cRoster = [
    ALbany,
    Sacramento,
    Honolulu,
    Montgomery
]

lb                                                                                                          