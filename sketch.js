// Road Runner
// Winston George
// Monday, December 2nd, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.width = width;
    this.length = length;
    this.direction = direction;
  }

  display () {
    fill(this.color);
  }
  move() {
    if(this.direction === 1) {
      this.speed += this.speed;
    }
    else if (this.direction === 2) {
      this.speed -= this.speed;
    }
  }
}

class Car1 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Car2 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }

  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Bus1 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Bus2 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Bike1 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Bike2 extends Vehichle {
  constructor(x, y, width, length, speed, color, direction) {
    super(x, y, width, length, speed, color, direction);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.color, this.direction);
  }
  move() {
    super.move();
  }
}

class Chicken {
  constructor(x, y, width, length, speed, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.speed = speed;
    this.color = color;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.length, this.speed, this.color);
  }
  movement() {
    if (keyIsDown("w")) {
      this.y -= this.speed;
    }
  }
}

let theVehichle = [];
let theChicken = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    if (random(100) > 16) {
      let someCar = new Car1(random(width), random(height), 100, 30, random(0, 10), random(255), 1);
      theVehichle.push(someCar);
    }
    else if (random(100) > 16) {
      let someCar2 = new Car2(random(width), random(height), 100, 30, random(0, 10), random(255), 2);
      theVehichle.push(someCar2);
    }
    else if (random(100) > 16) {
      let someBus = new Bus1(random(width), random(height), 200, 30, random(0, 10), random(255), 1);
      theVehichle.push(someBus);
    }
    else if (random(100) > 16) {
      let someBus2 = new Bus2(random(width), random(height), 200, 30, random(0, 10), random(255), 2);
      theVehichle.push(someBus2);
    }
    else if (random(100) > 16) {
      let someBike = new Bike1(random(width), random(height), 10, 5, random(0, 10), random(255), 1);
      theVehichle.push(someBike);
    }
    else {
      let someBike2 = new Bike2(random(width), random(height), 10, 5, random(0, 10), random(255), 2);
      theVehichle.push(someBike2);
    }
  }
  let someChicken = new Chicken(width/2, windowHeight-50, 10, 5, 5, random(255));
  theChicken.push(someChicken);
}

function draw() {
  background(220);
  for(let aVehichle of theVehichle) {
    aVehichle.move();
    aVehichle.display();
  }
  for (let aChicken of theChicken) {
    aChicken.movement();
    aChicken.display();
  }
}