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

  moveOneWay() {
    this.speed = random(0, 10);
    if (random(100) > 50) {
      this.x += this.speed;
    }
  }

  // moveOtherWay() {
  //   if (random(100) > 50) {
  //     this.x -= this.speed;
  //   }
  // }
}

class Car1 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

class Car2 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

class Bus1 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

class Bus2 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

class Bike1 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect (this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

class Bike2 extends Vehichle {
  constructor(x, y, speed, color, width, length) {
    super(x, y, speed, color, width, length);
  }
  display() {
    super.display();
    rect (this.x, this.y, this.speed, this.color, this.width, this.length);
  }
}

let theVehichle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    if (random(100) > 33) {
      let someCar = new Car1(random(width), random(height), random(0, 10), random(255), random(255), random(255), 10, 30);
      theVehichle.push(someCar);
    }
    else if (random(100) > 33) {
      let someBus = new Bus1(random(width), random(height), random(0, 10), random(255), random(255), random(255), 10, 100);
      theVehichle.push(someBus);
    }
    else {
      let someBike = new Bike1(random(width), random(height), random(0, 10), random(255), random(255), random(255), 5, 7);
      theVehichle.push(someBike);
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