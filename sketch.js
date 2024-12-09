// Road Runner
// Winston George
// Monday, December 2nd, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Vehichle {
  constructor(x, y, width, length, speed, color, ) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.width = width;
    this.length = length;
  }

  display () {
    noStroke();
    fill(this.color);
  }

  moveOneWay() {
    this.speed = random(0, 10);
    this.x += this.speed;
  }

  moveOtherWay() {
    this.speed = random(0, 10);
    this.x -= this.speed;
  }
}

class Car1 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    super.moveOneWay;
  }
}

class Car2 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    super.moveOtherWay;
  }
}

class Bus1 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    super.moveOneWay;
  }
}

class Bus2 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    super.moveOtherWay;
  }
}

class Bike1 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }
  display() {
    super.display();
    rect (this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    super.moveOneWay;
  }
}

class Bike2 extends Vehichle {
  constructor(x, y, width, length, speed, color) {
    super(x, y, width, length, speed, color);
  }
  display() {
    super.display();
    rect (this.x, this.y, this.speed, this.color, this.width, this.length);
  }
  move() {
    this.moveOtherWay;
  }
}

let theVehichle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    if (random(100) > 16) {
      let someCar = new Car1(random(width), random(height), 100, 30, random(0, 10), random(255));
      theVehichle.push(someCar);
    }
    else if (random(100) > 16) {
      let someCar2 = new Car2(random(width), random(height), 100, 30, random(0, 10), random(255));
      theVehichle.push(someCar2);
    }
    else if (random(100) > 16) {
      let someBus = new Bus1(random(width), random(height), 200, 30, random(0, 10), random(255));
      theVehichle.push(someBus);
    }
    else if (random(100) > 16) {
      let someBus2 = new Bus2(random(width), random(height), 200, 30, random(0, 10), random(255));
      theVehichle.push(someBus2);
    }
    else if (random(100) > 16) {
      let someBike = new Bike1(random(width), random(height), 10, 5, random(0, 10), random(255));
      theVehichle.push(someBike);
    }
    else {
      let someBike2 = new Bike2(random(width), random(height), 10, 5, random(0, 10), random(255));
      theVehichle.push(someBike2);
    }
  }
}

function draw() {
  background(220);
  for(let aVehichle of theVehichle) {
    aVehichle.moveOneWay();
    aVehichle.moveOtherWay();
    aVehichle.display();
  }
}