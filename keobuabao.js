const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./hands icon/${this.textContent}.png`;
          computerHand.src = `./hands icon/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Hoàaa !!!";
      //document.querySelector(".game").style.backgroundColor = "#483D8B";
      return;
    };

    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Người Thắng !!!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Máy Thắng !!!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "Máy Thắng !!!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Người Thắng !!!";
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        winner.textContent = "Máy Thắng !!!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Người Thắng !!!";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Lizard
    if (playerChoice === "lizard") {
      if (computerChoice === "paper" || computerChoice === "spock") {
        winner.textContent = "Người Thắng !!!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Máy Thắng !!!";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Spock
    if (playerChoice === "spock") {
      if (computerChoice === "scissors" || computerChoice === "rock") {
        winner.textContent = "Người Thắng !!!";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Máy Thắng !!!";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
