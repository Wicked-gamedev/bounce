var fixrect,movingrect;
function setup() {
  createCanvas(1200,800);
   fixrect=createSprite(400, 100, 50, 80);
  fixrect.shapeColor="green";
  fixrect.velocityY=5;
  movingrect=createSprite(400, 800, 80, 30);
  movingrect.shapeColor="pink";
  movingrect.velocityY=-5;
}

function draw() {
  background(255,255,255);  
//edgeSprites
console.log(movingrect.x);

if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 
  && fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2){
 movingrect.velocityX=movingrect.velocityX*(-1)
 fixrect.velocityX=fixrect.velocityX*(-1)
  }

  if(movingrect.y-fixrect.y<movingrect.width/2+fixrect.width/2 
  && fixrect.y-movingrect.y<movingrect.width/2+fixrect.width/2){
    movingrect.velocityY=movingrect.velocityY*(-1)
    fixrect.velocityY=fixrect.velocityY*(-1)
}

  drawSprites();
}