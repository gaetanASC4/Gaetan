var prompt = require('prompt-sync')();
// // 
// // get input from the user. 
// // 
// var n = prompt('How many more times? ');

var balance = 1000;
while (balance > 0){
    var spent = prompt("How much do you want to spend?");
 while (spent > balance) {
     spent = prompt("That's too much money. Your balance is" + balance + "How much do you want to spend?")
 }
    
    balance = balance - spent;
    console.log("your balance is" + balance);
}
