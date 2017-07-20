function setup(){
    createCanvas(1000,1000);
    background(195);
}

var x =100;

function draw(){
background(200);


    if(xPos<0 || xPos>1000)  x= -x;
    
   
    if(yPos<0 || yPos>1000) y= -y;
    
    xPos += x;
    yPos += y;

    ellipse(xPos, yPos, random(0, 100), random(0, 100));
    fill(random(0,100),random(0,255),random(0,255));
}
    if (keyIsDown(LEFT_ARROW)){
    x -= 5; 
}
    if (keyIsDown(UP_ARROW)){
    x += 5;
}
    if (x>599){
    x = 0;
} else if(x<= 1);

rect(50, 70, 50, 70);

function setup(){
    createCanvas(1000,1000);
    background(51);
}


var xPos = 10;
var yPos = 10;
var x = 3;
var y = 30;

// function bounce(){

// }

}