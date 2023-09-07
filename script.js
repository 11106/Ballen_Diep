var xJager = 50;
var yJager = 50;
var xProoi = 800;
var yProoi = 175;

function setup() {
  canvas = createCanvas(1000,400);
  textFont("Verdana");
  textSize(140);
  noStroke();
  frameRate(100);
}

function draw() {
  background('black');
  if (keyIsDown(LEFT_ARROW)) {
    xJager -= 100;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJager += 100;
  }
  if (keyIsDown(UP_ARROW)) {
    yJager -= 100;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJager += 100;
  }

  xJager = constrain(xJager,0,width - 100);
  yJager = constrain(yJager,0,height - 100);

  if (xJager >= 700 && xJager <= 875 && yJager >= 75 && yJager <= 225) {
    fill('red');
  }
  else {
    fill('grey');
  }
  rect(mouseX,mouseY,75,50);
  fill('blue');
  rect(xJager,yJager,100,100);   
}

function eindScherm() {
  background('white');
  fill('black');
  text("GEVANGEN!",75,250);
  noLoop();
}