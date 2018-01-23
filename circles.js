function Circle(canvas, x, y){
	var size;
	var myRed;
	var myGreen;
	var myBlue;
	var speedX;
	var speedY;

	this.canvas = canvas;
	size = random(15, 35);
	myRed = 255;
	myGreen = random(154, 229);
	myBlue = 235;
	speedX = random(-5, 5);
	speedY = random(-5, 5);

	this.history = [];

	this.update = function() {
		this.x += speedX; 
		this.y += speedY;

		for (var i = 0; i < this.history.length; i++) {
			this.history[i].x += speedX;
			this.history[i].y += speedY;
		}

		var v = createVector(this.x, this.y);
		this.history.push(v);
		if (this.history.length > 100) {
			this.history.splice(0, 1);
		}
	}

	this.show = function() {
		noStroke();
		fill(myRed, myGreen, myBlue);
		ellipse(this.x, this.y, size, size);

		beginShape();
		for (var i = 0; i < this.history.length; i++) {
			var pos = this.history[i];
			vertex(pos.x, pos.y);
		}
		endShape();
	}
}