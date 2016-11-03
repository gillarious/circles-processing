var theCircles = [];


function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
	for (var i = 0; i < 100; i++) {
		theCircles[i] = new Circle(this, mouseX, mouseY);
	}
	smooth();
}

function mousePressed() {
	theCircles.push(new Circle(this, mouseX, mouseY));
}

function draw() {
	background(255,255,255);
	for (var i = 0; i < theCircles.length; i++) {
		theCircles[i].fade();
		theCircles[i].move();
		theCircles[i].display();
	}
}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);
	width = w;
	height = h;
};

function Circle(canvas, x, y){
	var x;
	var y;
	var size;
	var myRed;
	var myGreen;
	var myBlue;
	var myAlpha;
	var speedX;
	var speedY;

	this.canvas = canvas;
	this.x = x;
	this.y = y;
	size = this.canvas.random(15, 35);
	myRed = 255;
	myGreen = this.canvas.random(154, 229);
	myBlue = 235;
	myAlpha = this.canvas.random(0, 255);
	speedX = this.canvas.random(-5, 5);
	speedY = this.canvas.random(-5, 5);

	Circle.prototype.move = function() {
		x += speedX;
		y += speedY;

	  	if (x > width) {
			x = width;
			speedX *= -1;
	    }
		if (y > height) {
			y = height;
			speedY *= -1;
		}
		if (x < 0) {
			x =0;
			speedX *= -1;
		}
		if (y < 0) {
			y = 0;
			speedY *= -1;
		}
	}

	Circle.prototype.display = function() {
		this.canvas.noStroke();
		this.canvas.fill(myRed, myGreen, myBlue, myAlpha);
		this.canvas.ellipse(x, y, size, size);
	}

	Circle.prototype.fade = function() {
		if (myAlpha > 0) {
			myAlpha -= 3;
		}
		else {
			myAlpha = 0;
		}
	}
}

	