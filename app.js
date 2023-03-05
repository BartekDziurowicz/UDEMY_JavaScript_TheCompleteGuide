const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT = ROCK;

let gamseIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase;
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT} for you!`);
    return DEFAULT;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gamseIsRunning) {
    return;
  }
  gamseIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
});
