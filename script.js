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

  // Level 2
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

  // Level 3
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

  // Level 4
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

  // Level 6
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

  // Level 7
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

  // Level 8
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

  // Level 10
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

  // Level 11
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

  // Level 12
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

  // Level 13
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

  // Level 14
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

  // Level 15
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

  // Level 16
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

  // Level 17
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

  // Level 18
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

  // Level 19
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

  // Level 20 – hardest
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

// Sweet & funny completion notes per level (index 0 = Level 1, etc.)
const levelCompletionMessages = [
  "Nice job! That was just the warm-up. 🌱",
  "Smooth moves! The walls are starting to respect you. 😎",
  "You navigated that like a GPS with no bugs. 🛰️",
  "You’re basically a maze whisperer now. 🧠",
  "That one was twisty, but you were twistier. 🌀",
  "You dodged those walls like a pro ninja. 🥷",
  "Your brain pinged every right turn there. 🧩",
  "You and these mazes? It’s getting serious. 💘",
  "That path was confusing. You weren’t. 💪",
  "Halfway there! The maze union has filed a complaint. 📢",
  "Level 11 crushed. Double digits, double skills. 🔥",
  "You untangled that like a spaghetti-code refactor. 🍝",
  "Unlucky 13? Not for you. 😏",
  "These walls are starting to panic. 😱",
  "You’re speedrunning life choices at this point. ⚡",
  "That was evil. You were eviler. 😈",
  "You just styled that maze with pure logic. 🎨",
  "The maze tried to gaslight you. You said nope. 🚫",
  "Only one left. The walls are shaking. 🌋",
  "Legendary! You conquered all 20 levels. 👑"
];

const mazeContainer = document.getElementById("maze");
const statusText = document.getElementById("status");
const levelLabel = document.getElementById("level-label");

let currentLevelIndex = 0;
let mazeLayout = levels[currentLevelIndex];

let playerPosition = { row: 0, col: 0 };
let goalPosition = { row: 0, col: 0 };
let levelCompleted = false;

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
  levelCompleted = false;
  findSpecialPositions();
  renderMaze();
  levelLabel.textContent = `Level ${currentLevelIndex + 1} of ${levels.length}`;
  statusText.textContent =
    `Level ${currentLevelIndex + 1}: Use Arrow keys or W/A/S/D to move. ` +
    `Press R to restart this level. After you finish, press N to go to the next level.`;
}

// Handle movement
function handleKeyDown(event) {
  if (levelCompleted) return; // don't move after completion until R or N

  const key = event.key;

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
  statusText.textContent = `Level ${currentLevelIndex + 1}: Keep going!`;

  // Check if goal reached
  if (newRow === goalPosition.row && newCol === goalPosition.col) {
    levelCompleted = true;
    const niceMessage = levelCompletionMessages[currentLevelIndex] || "";
    let msg =
      `🎉 Level ${currentLevelIndex + 1} complete! ` +
      niceMessage;

    if (currentLevelIndex < levels.length - 1) {
      msg += ` Press N to go to Level ${currentLevelIndex + 2} or R to replay Level ${currentLevelIndex + 1}.`;
    } else {
      msg += ` Press R to replay Level 20. Refresh the page to start from Level 1 again.`;
    }

    statusText.textContent = msg;
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
      "🎉 You finished Level 20 – there are no more levels! Press R to replay Level 20 or refresh to start over.";
  }
}

// Listen for key presses
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "r" || key === "R") {
    resetGame();
  } else if (key === "n" || key === "N") {
    if (levelCompleted) {
      goToNextLevel();
    } else {
      statusText.textContent =
        `You haven't finished Level ${currentLevelIndex + 1} yet. Reach the green goal first, then press N.`;
    }
  } else {
    handleKeyDown(event);
  }
});

// Initialize first level
loadLevel(0);
