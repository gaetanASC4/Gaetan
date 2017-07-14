//One of the hardest things we've done so far 
// basically showing us how to get a random number
// to pop up and understanding how funtions work//
function rand(num) {
    var randDec = Math.random() * num;
    var randInt = Math.floor(randDec);
    console.log(randInt);
    return randInt;
}   
rand(50);