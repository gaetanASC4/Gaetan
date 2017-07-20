function setup() {
   
    createCanvas(801,801);
    background(0);
}
var x = 0;
var y = 0;
function draw(){
 var squ= rect(0, 0, 100, 100);
    for(var i=0; i<8;i++){
        for(var a=0; a<8; a++){
            rect(x,y,100,100);
            x+=100;
        }
    x= 0;
    y+=100;   
 }

function createShip(shipX, shipY){
  var c = color(100);
  fill(c);
  stroke(c);

 rect(shipX, shipY, 100, 100);
}

  createShip(40,40,300);
  createShip(493,458,250);
  createShip(60,120,200);
  createShip(253,408,120);

placePins();


}







// if (mouseIsPressed){
    
// }else
    

//   print(mouseIsPressed);

// }



