var car, wall;
var speed, weight,thickness,damage;

function setup() {
  createCanvas(1600,400);
 speed=223;
 weight=random(30,52);
 thickness=random(22,83);

 car=createSprite(50,200,50,50);
car.velocityX=speed;

 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor=(0,255,0);
}

function draw() {
  background(255);  

  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if (isTouching(car,wall)) {
    car.velocityX=0;

    if(damage<10){
      car.shapeColor=(0,255,0);
      textSize(30);
      text("this wall is reliable",200,200);
    }
  
    if(damage>10){
      car.shapeColor=(230,230,0);
      textSize(30);
      text("this wall is not reliable",200,200);
    }
  }
  
  drawSprites();
}

function isTouching (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2
    ) {
  return true;
}else{
  return false;
}
}