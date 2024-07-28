//images
document.addEventListener("DOMContentLoaded", () => {
  let diceImages = [
    "./image/dice-1.jpeg",
    "./image/dice-2.jpeg",
    "./image/dice-3.jpeg",
    "./image/dice-4.jpeg",
    "./image/dice-5.jpeg",
    "./image/dice-6.jpeg",
  ];

  // Selecting elements

  let img1 = document.querySelector(".img1");
  let img2 = document.querySelector(".img2");
  let messageButton = document.getElementById("messageButton");
  let message = document.getElementById("message");
  let playButton = document.getElementById("playButton");
  let player1ScoreElement = document.getElementById("player1Score");
  let player2ScoreElement = document.getElementById("player2Score");

  let player1Score = 0;
  let player2Score = 0;

  playButton.addEventListener("click", function () {
    try {
    let player1Roll = rollDie();
    let player2Roll = rollDie();

    img1.src = diceImages[player1Roll - 1];
    img2.src = diceImages[player2Roll - 1];

    // Updates scores
    if (player1Roll !== 1 && player2Roll !== 1) {
      player1Score += player1Roll;
      player2Score += player2Roll;
    }

    // Display the updated scores
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;

    // A condition to check if any player has reached 50 points
    if (player1Score >= 50) {
      alert("Player 1 wins!");
      resetGame();
    } else if (player2Score >= 50) {
      alert("Player 2 wins!");
      resetGame();
    }
  } catch {
    console.log("An error occured while pressing the play button:", error);
    alert("An error occured while playing the game.Let's try again one more time.");
  } 
  });

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
});

  messageButton.addEventListener("click", () => {
    try {
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
    } else {
      message.classList.add("hidden");
    }
  } catch {
    console.log("An error occured while trying to display the message:", error);
    alert("An error occured while displaying the instructions. Please try again.");
  }
  });

  // Function to roll a die and return a number between 1 and 6.
  function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Function to reset the game
  function resetGame() {
    player1Score = 0;
    player2Score = 0;
    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    img1.src = diceImages[0];
    img2.src = diceImages[1];
}