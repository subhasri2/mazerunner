// Maze Runner with 20 levels
// 0 = path, 1 = wall, "S" = start, "G" = goal

const levels = [
  // Level 1 – very open, straight path
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 2 – a bit more walls
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,1],
    [1,0,1,0,0,0,1,0,0,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,0,1,0,0,1],
    [1,0,0,0,0,0,1,0,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 3 – small zig-zag
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,0,0,1],
    [1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,0,0,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 4 – more corridors
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,1,0,0,0,1],
    [1,1,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 5 – original-style maze (moderate)
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,1,0,0,0,0,1],
    [1,1,1,0,1,0,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,1],
    [1,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 6 – more dead ends
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,1,0,1],
    [1,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 7 – narrow path, some backtracking
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,0,1,0,0,1],
    [1,1,1,1,1,0,1,0,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 8 – more twists
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,1,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,1,0,1],
    [1,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 9 – snake-like corridor
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,1,1,1,0,1,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 10 – moderate maze with several turns
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,0,1,0,0,1],
    [1,1,1,1,1,0,1,0,1,1],
    [1,0,0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 11 – tighter maze
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,1,0,0,0,0,1],
    [1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 12 – more dead-ends and side paths
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,1,0,1],
    [1,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 13 – forced long path
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,1,0,0,0,1],
    [1,1,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 14 – more cramped
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,1,0,0,0,0,1],
    [1,0,0,0,1,0,1,1,0,1],
    [1,1,1,0,1,0,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 15 – narrow labyrinth
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,1,0,1],
    [1,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 16 – very tight maze, little open space
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,1,0,1,0,0,1],
    [1,1,1,0,1,0,1,0,1,1],
    [1,0,0,0,0,0,1,0,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 17 – long winding route with side branches
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,0,0,1],
    [1,0,0,1,0,1,1,1,0,1],
    [1,1,0,1,0,0,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 18 – lots of fake paths
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,0,0,1,0,0,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,1,0,0,0,1,0,1],
    [1,1,0,1,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 19 – very constrained route
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,0,1,0,1],
    [1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ],

  // Level 20 – hardest: tight, twisty, few open tiles
  [
    [1,1,1,1,1,1,1,1,1,1],
    [1,"S",0,1,0,0,0,1,0,1],
    [1,0,0,1,0,1,0,1,0,1],
    [1,0,1,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,"G",1],
    [1,1,1,1,1,1,1,1,1,1]
  ]
];

const mazeContainer = document.getElementById("maze");
const statusText = document.getElementById("status");

let currentLevelIndex = 0;
let mazeLayout = levels[currentLevelIndex];

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

      if (row === playerPosition.row && col === playerPosition.col) {
        cellDiv.classList.add("player");
      }

      mazeContainer.appendChild(cellDiv);
    }
  }
}

// Find start and goal in the current maze
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

function loadLevel(index) {
  currentLevelIndex = index;
  mazeLayout = levels[currentLevelIndex];
  findSpecialPositions();
  renderMaze();
  statusText.textContent =
    `Level ${currentLevelIndex + 1} – use arrow keys / WASD. Reach the green goal!`;
}

// Handle keyboard input
function handleKeyDown(event) {
  if (statusText.textContent.includes("All levels complete")) return;

  const key = event.key;

  // Block movement if finished level but not moved on
  if (statusText.textContent.includes("You reached the goal")) {
    if (key === "n" || key === "N") {
      goToNextLevel();
    }
    return;
  }

  let newRow = playerPosition.row;
  let newCol = playerPosition.col;

  if (key === "ArrowUp" || key === "w" || key === "W") newRow--;
  if (key === "ArrowDown" || key === "s" || key === "S") newRow++;
  if (key === "ArrowLeft" || key === "a" || key === "A") newCol--;
  if (key === "ArrowRight" || key === "d" || key === "D") newCol++;

  if (newRow < 0 || newRow >= mazeLayout.length) return;
  if (newCol < 0 || newCol >= mazeLayout[newRow].length) return;

  const cellValue = mazeLayout[newRow][newCol];
  if (cellValue === 1) {
    statusText.textContent =
      `Level ${currentLevelIndex + 1}: You bumped into a wall! Try another way.`;
    return;
  }

  playerPosition = { row: newRow, col: newCol };
  statusText.textContent = `Level ${currentLevelIndex + 1}`;

  if (newRow === goalPosition.row && newCol === goalPosition.col) {
    if (currentLevelIndex === levels.length - 1) {
      statusText.textContent =
        "🎉 You reached the goal on Level 20 – All levels complete!";
    } else {
      statusText.textContent =
        `🎉 You reached the goal on Level ${currentLevelIndex + 1}! Press N for next level or R to replay.`;
    }
  }

  renderMaze();
}

// Restart current level
function resetGame() {
  loadLevel(currentLevelIndex);
}

// Go to next level
function goToNextLevel() {
  if (currentLevelIndex < levels.length - 1) {
    loadLevel(currentLevelIndex + 1);
  } else {
    statusText.textContent =
      "🎉 You finished Level 20 – there are no more levels!";
  }
}

// Listen for key presses
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    resetGame();
  } else if (event.key === "n" || event.key === "N") {
    goToNextLevel();
  } else {
    handleKeyDown(event);
  }
});

// Initialize first level
loadLevel(0);
