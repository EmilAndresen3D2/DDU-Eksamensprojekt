var tank;
var grid = 20;
var p2;

function setup() {
  createCanvas(500, 500); 
  tank = new Tank();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var kolonne = floor(width/grid);
  var række = floor(height/grid);
  p2 = createVector(floor(random(kolonne)), floor(random(række)));
  p2.mult(grid);
}

function draw() {
  background(51);

  tank.update();
  tank.vis();
  
  noStroke();
  
  fill(255);
  rect(p2.x, p2.y, grid, grid);
  
  textSize(25); //bestemmer størrelse på teksten
  textAlign(CENTER, CENTER); //placerer teksten i midten af skærmen og hinanden
  text('Venstre piletast = gå til venstre', 250, 150);
  text('Højre piletast = gå til højre', 250, 180);
  text('Midterste piletast = gå ned af', 250, 210);
  text('Øverste piletast = gå op af', 250, 240);
  
}

function keyPressed() { //"bev" står for bevægelse

  if (keyCode === UP_ARROW) {
    tank.bev(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    tank.bev(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    tank.bev(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    tank.bev(1, 0);
  }
}
