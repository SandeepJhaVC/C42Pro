var hr = hour();
var mn = minute();
var sc = second();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);

}

function draw() {
  background(255,255,255);

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360%12);
  hrAngle = map(hr, 0, 60, 0, 360);

  stroke('red');
  strokeWeight(5);
  arc(800, 200, 250, 250, 10, PI);

  translate(0,0);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);

  drawSprites();
}