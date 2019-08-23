//Creating the Rover Object
let rover = {
  x: 0,
  y: 0,
  direction: "N",
  path: [{ x: 0, y: 0, direction: "N" }]
};
//Declaring the newPosition object, that will be pushed to the path key in the Rover object
let newPosition = {};
//Creating a transformator for the directions.
function direction(dir) {
  switch (dir) {
    case "N":
      return "North";
      break;
    case "E":
      return "East";
      break;
    case "S":
      return "South";
      break;
    case "W":
      return "West";
      break;
  }
}
//turnLeft function for the Rover
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  newPosition = { x: rover.x, y: rover.y, direction: rover.direction };
  rover.path.push(newPosition);
}
//turnRight function for the Rover
function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  newPosition = { x: rover.x, y: rover.y, direction: rover.direction };
  rover.path.push(newPosition);
}
//Function that makes the Rover move forward.
function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "E":
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "S":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "W":
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
  }
  newPosition = { x: rover.x, y: rover.y, direction: rover.direction };
  rover.path.push(newPosition);
}
//Function that moves the Rover backwards.
function moveBackwards(rover) {
  console.log("moveBackwards was called");
  switch (rover.direction) {
    case "N":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "E":
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "S":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
    case "W":
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("Error: Wall here!");
        break;
      }
      break;
  }
  newPosition = { x: rover.x, y: rover.y, direction: rover.direction };
  rover.path.push(newPosition);
}
//Optimized command function for faster/easier UserInput.
function command(rover, cmd) {
  for (let i = 0; i < cmd.length; i++) {
    console.log(
      `The Rover is located at X:${rover.path[rover.path.length - 1].x} , Y:${
        rover.path[rover.path.length - 1].y
      } and is heading towards: ${direction(
        rover.path[rover.path.length - 1].direction
      )}`
    );
    if (cmd[i] === "f" || cmd[i] === "b" || cmd[i] === "l" || cmd[i] === "r") {
      switch (cmd[i]) {
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackwards(rover);
          break;
      }
    } else {
      console.log(
        "This command was not found! Please make sure your inputs are f,b,r or l!"
      );
    }
  }
  console.log(
    `The Rover is located at X:${rover.path[rover.path.length - 1].x} , Y:${
      rover.path[rover.path.length - 1].y
    } and is heading towards: ${direction(
      rover.path[rover.path.length - 1].direction
    )}`
  );
}

command(rover, "rfffrffffffffff");
