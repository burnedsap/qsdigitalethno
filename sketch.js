// color background = color(#C2C1C1);
//function setup() {
//  createCanvas(400, 400);
//}
//
//function draw() {
//  background('#C2C1C1');
//}
//


//var r = 40;

// Complicated Knob
// Daniel Shiffman <http://www.shiffman.net>

let timer = 0;
let bigtimer = 0;
let img;
let back;
let white;
let red;
let bg = 255;
let angsy = 0;
function preload() {
	img = loadImage('dial-n.png');
	back = loadImage('background-c.png');
	white = loadImage('white.png');
	red = loadImage('red.png');
}

var dragging = false; // Is the slider being dragged?
var rollover = false; // Is the mouse over the slider?

// Circle variables for knob


// Knob angle
var angle = 0;
var count = 0;
var calcAngle;
var degree;
var stop;
var dt = 100;
// Offset angle for turning knob
var offsetAngle = 0;
function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('sketch-holder');
	imageMode(CENTER);
	rectMode(CENTER);
}

function redButton() {
	image(red, windowWidth / 2, windowHeight / 2, 1201 / 2, 1201 / 2);
}

function draw() {
	background('#C2C1C1');
	
	//White Backlight
	push();
	translate(windowWidth / 2, windowHeight / 2);
	fill(0);
	rect(0, 0, 1001 / 2, 1001 / 2);
	//	console.log(degree);
		if ((degree < 280) && (degree > 80)) {
		rotate(angle);
		stop = angle;
	} else {
		rotate(stop);
	}
	
//	if ((degree < 200) && (degree > 185)) {
//		delay(dt);
//	}
//	
//	if ((degree < 280) && (degree > 262)) {
//		delay(dt);
//	}
//	
//	if ((degree < 164) && (degree > 150)) {
//		delay(dt);
//	}
//	
//	if ((degree < 129) && (degree > 116)) {
//		delay(dt);
//	}
//	
//	if ((degree < 96) && (degree > 80)) {
//		delay(dt);
//	}
	
	stroke(255);
	//	} else {
	//		stroke(0);
	//	}
		strokeWeight(50);
	line(0, 0, 180, 0);
	pop();
		
		
	if (millis() >= 10000 + timer) {
		tint(255, bg);
		image(red, windowWidth / 2, windowHeight / 2, 1201 / 2, 1201 / 2);
		bg = map(sin(angsy),  -1, 1, 0, 255);
		angsy = angsy + 0.8;
	}
	
	if (millis() >= 15000 + timer) {
		tint(255, 255);
		image(white, windowWidth / 2, windowHeight / 2, 1201 / 2, 1201 / 2);
	}
	
	//Background
	tint(255, 255);
	image(back, windowWidth / 2, windowHeight / 2, 1201 / 2, 1201 / 2);
	
	//Rotate Dial
	if (count === 0) {
				
		  // Is it being dragged?
		  if (dragging) {
			var dx = mouseX - windowWidth / 2;
			var dy = mouseY - windowHeight / 2;
			var mouseAngle = atan2(dy, dx);
			angle = mouseAngle - offsetAngle;
		}
		
		  // Fill according to state
		  if (dragging) {
			fill (175);
		} else {
			fill(255);
		}
		  // Draw ellipse for knob
		  push();
		translate(windowWidth / 2, windowHeight / 2);
		rotate(angle);
		image(img, 0, 0, 411 / 2, 410 / 2);
				//  ellipse(0, 0, r*2, r*2);
		//		  strokeWeight(1);
		//		  line(0, 0, 90, 0);
				  
				pop();
		fill(0);
		
		
		  // Map is an amazing function that will map one range to another!
		  // Here we take the slider's range and map it to a value between 0 and 255
		  // Our angle is either between
		if (angle < 0) {
			calcAngle = map(angle,  - PI, 0, PI, 0);
		} else if (angle > 0) {
			calcAngle = map(angle, 0, PI, TWO_PI, PI);
		}
		
		degree = int(degrees(calcAngle));
		textAlign(CENTER);
		//		text(int(degrees(calcAngle)), windowWidth / 2 , windowHeight / 2 + 40 + 20);
				if (dragging && degree < 10) {
			count == 2;
		}
	}
	
	if (count === 2) {
		var b = map(calcAngle, 0, TWO_PI, 0, 255);
		fill(b);
		rect(320, 90, 160, 180);
	}
}

function mousePressed() {
	  // Did I click on slider?
	  if (dist(mouseX, mouseY, windowWidth / 2, windowHeight / 2) < 410) {
		dragging = true;
	    // If so, keep track of relative location of click to corner of rectangle
	    var dx = mouseX - windowWidth / 2;
		var dy = mouseY - windowHeight / 2;
		offsetAngle = atan2(dy, dx) - angle;
	}
}

function mouseReleased() {
	  // Stop dragging
	  dragging = false;
}

function delay(ms) {
	var cur_d = new Date();
	var cur_ticks = cur_d.getTime();
	var ms_passed = 0;
	while (ms_passed < ms) {
		var d = new Date(); // Possible memory leak?
		var ticks = d.getTime();
		ms_passed = ticks - cur_ticks;
		// d = null; // Prevent memory leak?
	}
}