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

  keyIsDown() {
    if (key === "w") {
      this.y -= this.speed;
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
// let grid;
// const GRID_SIZE = 10;
// let cellSize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    if (random (100) > 50) {
      let someCar = new Car1(random(width), random(height), 100, 30, 10, random(255), 1);
      theVehichle.push(someCar);
    }
    else if (random(100) > 50) {
      let someCar2 = new Car2(random(width), random(height), 100, 30, 10, random(255), 2);
      theVehichle.push(someCar2);
    }
    else if (random(100) > 50) {
      let someBus = new Bus1(random(width), random(height), 200, 30, 8, random(255), 1);
      theVehichle.push(someBus);
    }
    else if (random(100) > 50) {
      let someBus2 = new Bus2(random(width), random(height), 200, 30, 8, random(255), 2);
      theVehichle.push(someBus2);
    }
    else if (random(100) > 50) {
      let someBike = new Bike1(random(width), random(height), 10, 5, 3, random(255), 1);
      theVehichle.push(someBike);
    }
    else {
      let someBike2 = new Bike2(random(width), random(height), 10, 5, 3, random(255), 2);
      theVehichle.push(someBike2);
    }
  }
  let someChicken = new Chicken(width/2, windowHeight-50, 10, 5, 1);
  theChicken.push(someChicken);
  for (let i = 0; i < 50; i++) {
    if (random(100) > 50){
      let someLog = new Log(random(width), random(height), 50, 20, 2, 1);
      theLog.push(someLog);
    }
    else {
      let someLog1 = new log1(random(width), random(height), 50, 20, 2, 2);
      theLog.push(someLog1);
    }
  }
  setInterval(spawnVechicle, 500);
  // cellSize = height/GRID_SIZE;
  // grid = createGrid(GRID_SIZE, GRID_SIZE);
}

function spawnVechicle() {
  let someVehicle = new Vehichle(x, y, width, length, speed, color, direction);
  theVehichle.push(someVehicle);
}

function spawnLog() {
  let someLog = new Log(x, y, width, length, speed, direction);
  theLog.push(someLog);
}

function draw() {
  background("green");
  for(let aVehichle of theVehichle) {
    aVehichle.move();
    aVehichle.display();
  }
  for (let aChicken of theChicken) {
    aChicken.keyIsDown();
    aChicken.display();
  }
  for (let aLog of theLog) {
    aLog.movement();
    aLog.display();
  }
  // displayGrid();
}

// function displayGrid() {
//   for (let y = 0; y < 30; y++) {
//     for (let x = 0; x < width; x++) {
//       if (grid[y][x] === 1 || grid[y][x] === 0){
//         fill("green");
//         square(x*cellSize, y*cellSize, cellSize);
//       }
//     }
//   }
// }

// function createGrid(cols, rows) {
//   let newGrid = [];
//   for (let y = 0; y < rows; y++) {
//     newGrid.push([]);
//     for (let x = 0; x < cols; x++) {
//       if (random(100) < 50) {
//         newGrid[y].push(0);
//       }
//       else {
//         newGrid[y].push(1);
//       }
//     }
//   }
//   return newGrid;
// }