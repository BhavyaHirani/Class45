var lander, lander_img;
var bg_img;
var gravity = 0.05;

var vx = 0;
var vy = 0;
var up;

function preload(){
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup(){
createCanvas(1000,700);

lander = createSprite(300, 200);
lander.addImage("lander", lander_img);
lander.scale = 0.2;
}

function draw(){
  background(52);
  image(bg_img, 0, 0);

  push();
  textSize(20);
  fill("red");
  text("vertical velocity " + round(vy), 650, 50);
  pop();

  if(vy <= 5.5){
    vy += gravity;
    lander.position.y += vy;
    up = vy;
  }

  if(keyIsDown(UP_ARROW)){
    up -= up;
    lander.position.y = up;
    console.log(up);
  }

  drawSprites()
}