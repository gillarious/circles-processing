function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	smooth();

	Circle = [] 
	theCircles = new Circle[100];

	var maxCircles = 1000;
	var numCircles = 0;
	var currentCircles = 0; 
}

function draw() {
	background(255);
	if (mouseIsPressed) {
		theCircles[currentCircles] = new Circle(this, mouseX, mouseY);
		currentCircles++;
		if (numCircles < theCircles.length){
			numCircles++;
		}
		if (currentCircles >= theCircles.length){
			currentCircles = 0;
		}
	}
	for (var i = 0; i < numCircles; i++) {
		theCircles[i].fade();
		theCircles[i].move();
		theCircles[i].display();
	}
}

function Circle() {
	var x;
	var y;
	var size;
	var myRed;
	var myGreen;
	var myBlue;
	var myAlpha;
	var speedX;
	var speedY;

	var canvas;

	Circle(canvas, var x, var y){
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
	}

	function move() {
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

	function display() {
		this.canvas.noStroke();
		this.canvas.fill(myRed, myGreen, myBlue, myAlpha);
		this.canvas.ellipse(x, y, size, size);
	}

	function fade() {
		if (myAlpha > 0) {
			myAlpha -= 3;
		}
		else {
			myAlpha = 0;
		}
	}
}