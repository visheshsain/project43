var space1,space2,space3,space4;
var spaceBg;
var issImg;
var iss;
var hasDocked = false;
var spacecraft;

function preload(){
space1= loadImage("Docking-undocking/spacecraft1.png");
space2= loadImage("Docking-undocking/spacecraft2.png");
space3= loadImage("Docking-undocking/spacecraft3.png");
space4= loadImage("Docking-undocking/spacecraft4.png");
spaceBg= loadImage("Docking-undocking/spacebg.jpg");
issImg= loadImage("Docking-undocking/iss.png");
}
function setup() {
  createCanvas(600,350);
 iss =  createSprite(330, 130);
 iss.addImage(issImg);
 iss.scale = 0.25;

 spacecraft =  createSprite(285, 240);
 spacecraft.addImage(space1);
 spacecraft.scale = 0.15;
  
}

function draw() {
  background(spaceBg);  
  drawSprites();
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1);
    if(keyDown ("LEFT_ARROW")){
      spacecraft.addImage(space4);
      spacecraft.x -=1;
    
    }

    if(keyDown ("RIGHT_ARROW")){
      spacecraft.addImage(space3);
      spacecraft.x +=1;
    
    }
    if(keyDown ("UP_ARROW")){
      spacecraft.addImage(space1);
      spacecraft.y -=1;
    
    }
    if(keyDown ("DOWN_ARROW")){
      spacecraft.addImage(space2);
      spacecraft.y +=1;
    
    }
    

  }
if(spacecraft.y<= (iss.y+70)&& spacecraft.x<=(iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white");
  text("DOCKING SUCESSFULL",200,300)
}
}