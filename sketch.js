// Road Runner
// Winston George
// Monday, December 2nd, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Vehichle {
  constructor(x, y, speed, color, width, length) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.width;
    this.length;
  }

  display () {
    noStroke();
    fill(this.color);
  }

  move() {
    speed = random(0, 10);
    this.x += speed;
  }
}

class Car extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length);
  }
}

class Bus extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length);
  }
}

class Bike extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect (this.x, this.y, this.width, this.length);
  }
}

let theVehichle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}