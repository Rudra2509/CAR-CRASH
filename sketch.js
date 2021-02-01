var car, wall;
var speed, weight;

function setup() {
  createCanvas(1500,400);


  speed = random(55,90);
  weight = random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "blue";

  wall=createSprite(500,200,50,400);
  wall.shapeColor = color(255,255,255);
}

function draw() {
  background(0,0,0);  

if(wall.x - car.x < car.width/2 + wall.width/2){
  car.velocityX = 0;
  if(weight*speed*speed*0.5/22500 > 180){
  car.shapeColor = color(255,0,0);
    }
  if(weight*speed*speed*0.5/22500 <= 180 && weight*speed*speed*0.5/22500 >= 100){
    car.shapeColor = color(230,230,0);
    }
  if(weight*speed*speed*0.5/22500 < 100){
      car.shapeColor = color(0,255,0);
    }
   car.depth = wall.depth + 1;
}
  drawSprites();
}