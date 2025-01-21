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
      this.x += this.speed;
    }
    else if (this.direction === 2) {
      this.x -= this.speed;
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
  constructor(x, y, width, length, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.speed = speed;
  }
  display() {
    fill("brown");
    rect(this.x, this.y, this.width, this.length, this.speed);
  }
  handleKeys() {
    if (keyIsDown(87)) {
      this.y -= this.speed;
    }
  }
  winGame() {
    if (this.y <= 0) {
      
      gameState = "menu";
      outCome = "win";
    }
  }
  
  checkCollision() {
    if (collideRectRect(this.x, this.y, this.width, this.height, theVehichle.x, theVehichle.y, theVehichle.width, theVehichle.length)) {
      hit = !hit;
    }
    if (hit === true) {
      gameState = "menu";
      outCome = "lose";
      console.log("I've been hit");
      hit = !hit;
    }
  }
  returnChicken() {
    if(this.y <= 0) {
      this.y = windowHeight - 50;
    }
  }
}

class Log {
  constructor(x, y, width, length, speed, direction) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.length = length;
    this.speed = speed;
    this.direction = direction;
  }
  display() {
    fill("brown");
    rect(this.x, this.y, this.width, this.length, this.speed, this.direction);
  }

  movement(){
    if (this.direction === 1) {
      this.x += this.speed;
    }
    else if (this.direction === 2) {
      this.x -= this.speed;
    }
  }
}
class log1 extends Log {
  constructor(x, y, width, length, speed, direction) {
    super(x, y, width, length, speed, direction);
  }
  display() {
    super.display();
    rect(this.x, this.y, this.width, this.length, this.speed, this.direction);
  }
  movement() {
    super.movement();
  }
}

let theVehichle = [];
let theChicken = [];
let theLog = [];
let gameState = "menu";
let outCome;
let hit = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function startGame() {
  textSize(25);
  text("PRESS SPACE KEY TO BEGIN", windowWidth/2-200, windowHeight/2);
  if (keyIsDown(32)) {
    spawnVechicle();
    spawnLog();
    spawnChicken();
    setInterval(spawnVechicle, 2000);
    setInterval(spawnLog, 2000);
    gameState = "playing";
  }
}

function spawnVechicle() {
  if (random (100) > 50) {
    let someCar = new Car1(0, random(height), 100, 30, 10, random(255), 1);
    theVehichle.push(someCar);
  }
  else if (random(100) > 50) {
    let someCar2 = new Car2(windowWidth, random(height), 100, 30, 10, random(255), 2);
    theVehichle.push(someCar2);
  }
  else if (random(100) > 50) {
    let someBus = new Bus1(0, random(height), 200, 30, 8, random(255), 1);
    theVehichle.push(someBus);
  }
  else if (random(100) > 50) {
    let someBus2 = new Bus2(windowWidth, random(height), 200, 30, 8, random(255), 2);
    theVehichle.push(someBus2);
  }
  else if (random(100) > 50) {
    let someBike = new Bike1(0, random(height), 10, 5, 3, random(255), 1);
    theVehichle.push(someBike);
  }
  else {
    let someBike2 = new Bike2(windowWidth, random(height), 10, 5, 3, random(255), 2);
    theVehichle.push(someBike2);
  }
}

function spawnLog() {
  if (random(100) > 50) {
    let someLog = new Log(0, random(height), 50, 20, 2, 1);
    theLog.push(someLog);
  }
  else {
    let someLog1 = new log1(windowWidth, random(height), 50, 20, 2, 2);
    theLog.push(someLog1);
  }
}

function spawnChicken() {
  let someChicken = new Chicken(width/2, windowHeight-50, 10, 5, 5);
  theChicken.push(someChicken);
}

function draw() {
  background("green");
  if (gameState === "menu") {
    startGame();
  }
  else if (gameState === "playing") {
    for(let aVehichle of theVehichle) {
      aVehichle.move();
      aVehichle.display();
      theChicken[0].checkCollision(theChicken.x, theChicken.y, theChicken.width, theChicken.length, theVehichle.x, theVehichle.y, theVehichle.width, theVehichle.length);
    }
    for (let aLog of theLog) {
      aLog.movement();
      aLog.display();
    }
    for (let aChicken of theChicken) {
      aChicken.handleKeys();
      aChicken.display();
      aChicken.winGame();
      // aChicken.loseGame();
    }
  }

  if(gameState === "playing" && outCome === "win") {
    for(let aChicken of theChicken) {
      aChicken.returnChicken();
    }
  } 
  else if(gameState === "playing" && outCome === "lose") {
    for (let aChicken of theChicken) {
      aChicken.returnChicken();
    }
  }
}