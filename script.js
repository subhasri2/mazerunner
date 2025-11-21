// Simple maze representation:
// 0 = path, 1 = wall, 'S' = start, 'G' = goal

const mazeLayout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, "S", 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, "G", 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const mazeContainer = document.getElementById("maze");
const statusText = document.getElementById("status");

let playerPosition = { row: 0, col: 0 };
let goalPosition = { row: 0, col: 0 };

// Build the maze UI
function renderMaze() {
  mazeContainer.innerHTML = "";

  for (let row = 0; row < mazeLayout.length; row++) {
    for (let col = 0; col < mazeLayout[row].length; col++) {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");

      const cellValue = mazeLayout[row][col];

      if (cellValue === 1) {
        cellDiv.classList.add("wall");
      } else if (cellValue === 0) {
        cellDiv.classList.add("path");
      } else if (cellValue === "S") {
        cellDiv.classList.add("start");
      } else if (cellValue === "G") {
        cellDiv.classList.add("goal");
      }

      // Add the player class if this is the player's current position
      if (row === playerPosition.row && col === playerPosition.col) {
        cellDiv.classList.add("player");
      }

      mazeContainer.appendChild(cellDiv);
    }
  }
}

// Find the start and goal positions from the maze layout
function findSpecialPositions() {
  for (let row = 0; row < mazeLayout.length; row++) {
    for (let col = 0; col < mazeLayout[row].length; col++) {
      if (mazeLayout[row][col] === "S") {
        playerPosition = { row, col };
      }
      if (mazeLayout[row][col] === "G") {
        goalPosition = { row, col };
      }
    }
  }
}

// Handle keyboard input
function handleKeyDown(event) {
  // Block movement if already won
  if (statusText.textContent.includes("You reached the goal")) return;

  const key = event.key;

  let newRow = playerPosition.row;
  let newCol = playerPosition.col;

  // Arrow keys
  if (key === "ArrowUp" || key === "w" || key === "W") newRow--;
  if (key === "ArrowDown" || key === "s" || key === "S") newRow++;
  if (key === "ArrowLeft" || key === "a" || key === "A") newCol--;
  if (key === "ArrowRight" || key === "d" || key === "D") newCol++;

  // Check boundaries
  if (newRow < 0 || newRow >= mazeLayout.length) return;
  if (newCol < 0 || newCol >= mazeLayout[newRow].length) return;

  // Check if new position is a wall
  const cellValue = mazeLayout[newRow][newCol];
  if (cellValue === 1) {
    statusText.textContent = "You bumped into a wall! Try another way.";
    return;
  }

  // Move player
  playerPosition = { row: newRow, col: newCol };
  statusText.textContent = "";

  // Check if goal reached
  if (newRow === goalPosition.row && newCol === goalPosition.col) {
    statusText.textContent = "🎉 You reached the goal! Press R to restart.";
  }

  renderMaze();
}

// Restart the game
function resetGame() {
  statusText.textContent = "";
  findSpecialPositions();
  renderMaze();
}

// Listen for key presses
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    resetGame();
  } else {
    handleKeyDown(event);
  }
});

// Initialize
findSpecialPositions();
renderMaze();
statusText.textContent = "Use arrow keys or WASD to move. Reach the green goal!";
