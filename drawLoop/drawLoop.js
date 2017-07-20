function setup(){
    createCanvas(700,700);
    background(51);
}


xPos = 0;
yPos = 0;

// function bounce(){

// }

function draw(){

    background(200);
    xPos = xPos -10;
    if (xPos < 0){
        xPos = width
    }
    yPos = yPos -10
    if(yPos < 0){
        yPos = height
    }
    ellipse(xPos, yPos, random(0, 100), random(0, 100));
    fill(random(0,100),random(0,255),random(0,255));
}

