var circles = [];

function setup() {
	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent('canvas-wrap');
	smooth();
}

function mousePressed() {
	circles.push(new Circle(mouseX, mouseY));
}

function draw() {
	background(255,255,255);
	for (var i = 0; i < circles.length; i++) {
		circles[i].update();
		circles[i].show();
	}
}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;  
	canvas.size(w,h);
	width = w;
	height = h;
};