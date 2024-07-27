document.addEventListener("DOMContentLoaded", () => {
  const diceImages = ["./image/dice-1.jpeg", "./image/dice-2.jpeg", "./image/dice-3.webp", "./image/dice-4.jpeg", "./image/dice-5.jpeg", "./image/dice-6.png"];

  let img1 = document.querySelector('.img1');
  let img2 = document.querySelector('.img2');
  const messageButton = document.getElementById("messageButton");
  const message = document.getElementById("message");
  let playButton = document.getElementById("playButton");
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  const player1ScoreElement = document.getElementById("player1Score");
  const player2ScoreElement = document.getElementById("player2Score");

  playButton.addEventListener('click', function() {
    let player1Roll = rollDie();
    let player2Roll = rollDie();

    img1.src = diceImages[player1Roll - 1];
    img2.src = diceImages[player2Roll - 1];
});

  messageButton.addEventListener("click", () => {
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
    } else {
      message.classList.add("hidden");
    }
  });
});

// Function to roll a die and return a number between 1 and 6.
  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
rollDie();

// Function to start the game.
  function startGame() {
    let playerTurn = 1;

    while (true) {
      console.log(`Player ${playerTurn}'s turn`);
      let die1 = rollDie();
      let die2 = rollDie();
      let sum = die1 + die2;

      console.log(
        `Player ${playerTurn} rolled: ${die1} and ${die2} (Sum: ${sum})`
      );

      if (sum === 5) {
        console.log(`Player ${playerTurn} starts the game!`);
        break;
      } else {
        console.log(`Sum is not 5. Passing turn to the next player.`);
        playerTurn = playerTurn === 1 ? 2 : 1;
      }
    }
  }