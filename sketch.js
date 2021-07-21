var hr;
var mn;
var sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  translate(200,200);

  push();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  stroke("blue");
  arc(0, 0, 300, 300, 0, scAngle);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  stroke("green");
  arc(0, 0, 300, 300, 0, mnAngle);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  stroke("red");
  arc(0, 0, 300, 300, 0, hrAngle);
  pop();

  drawSprites();
}