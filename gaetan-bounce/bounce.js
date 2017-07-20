function setup(){
    createCanvas(1000,1000);
    background(51);
}


var xPos = 20;
var yPos = 40;
var x = 30;
var y = 30;

// function bounce(){

// }

function draw(){

    background(200);


    if(xPos<0 || xPos>1000)  x= -x;
    
   
    if(yPos<0 || yPos>1000) y= -y;
    
    xPos += x;
    yPos += y;

    ellipse(xPos, yPos, random(0, 200), random(0, 200));
    fill(random(0,100),random(0,255),random(0,255));
}

