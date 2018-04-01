var circles = [];
var edge = 20;

function setup() {
	var canvas = createCanvas(windowWidth-edge, windowHeight-edge);
	canvas.parent('canvas-wrap');
	smooth();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

var maxCircles = 500;
var numCircles = 0;
var currentCircle = 0;

function draw() {
  background(255);
  
  if (mouseIsPressed) {
    for (var a=0; a<2; a++) {
      circles.push(new Jitter());
      currentCircle++;
    } 
    
    if (numCircles < circles.length){
      numCircles++;
    }
    
    if (currentCircle >= maxCircles){
      currentCircle = 0;
    }
  }
  
  for (var i=0; i<circles.length; i++) {
    circles[i].fade();
    circles[i].move();
    circles[i].display();
  }
}

function Jitter() {
  this.x = mouseX;
  this.y = mouseY;
  this.diameter = random(15, 35);
  this.speedX = random(-3, 3);
  this.speedY = random(-3, 3);
  this.myRed = 255;
	this.myGreen = random(154, 229);
	this.myBlue = 235;
	this.myAlpha = random(0, 255);

  this.move = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    if (this.x > windowWidth-edge){
		this.x = windowWidth-edge;
		this.speedX *= -1;
	}
	if (this.y > windowHeight-edge){
		this.y = windowHeight-edge;
		this.speedY *= -1;
	}
	if (this.x < 0){
		this.x = 0;
		this.speedX *= -1;
	}
	if (this.y < 0){
		this.y = 0;
		this.speedY *= -1;
	}
  }

  this.display = function() {
    noStroke();
    fill(this.myRed, this.myGreen, this.myBlue, this.myAlpha);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
  
  this.fade = function() {
		if (this.myAlpha > 0){
			this.myAlpha -= 2;
		}
		else{
			this.myAlpha = 0;
		}
  }
  
}