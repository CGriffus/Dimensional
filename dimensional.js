let position = 0;
let direction = "right";

function moveForward(steps) {
  if (direction === "right") {
    position = position + steps;
  } else {
    position = position - steps;
  }
}

function moveBackward(steps) {
  if (direction === "right") {
    position = position - steps;
  } else {
    position = position + steps;
  }
}

function turnAround() {
  direction = "left";
}

function printLocation() {
  console.log(position);
}

moveForward(5);
moveBackward(3);
printLocation();
turnAround();
moveForward(10);
moveBackward(5);
printLocation();
