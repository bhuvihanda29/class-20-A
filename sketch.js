var bhuvi;
var garima; 


function setup() {
  createCanvas(400,400);
  bhuvi=createSprite(200, 200, 50, 50);
  bhuvi.shapeColor="lavender";
  bhuvi.debug=true;

  garima=createSprite(50,50,70,70);
  garima.shapeColor="pink";
  garima.debug=true;
  
}

function draw() {
  background("yellow");  

  garima.y=mouseY;
  garima.x=mouseX;

  touching();

  drawSprites();
}
function touching(){
  if(garima.x-bhuvi.x<garima.width/2+bhuvi.width/2 &&
    bhuvi.x-garima.x<garima.width/2+bhuvi.width/2 &&
    garima.y-bhuvi.y<garima.height/2+bhuvi.height/2 &&
    bhuvi.y-garima.y<garima.height/2+bhuvi.height/2){
    bhuvi.shapeColor="lightgreen";
    garima.shapeColor="lightgreen";
  }
  else{
    bhuvi.shapeColor="lavender";
    garima.shapeColor="pink";
  }
}