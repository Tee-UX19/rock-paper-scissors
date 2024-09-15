function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// console.log(humanScore, computerScore);

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const scores = document.querySelector(".scoreboard");
const rounds = document.querySelector(".round");
const end = document.querySelector(".end");
const reset = document.querySelector(".reset");
// console.log(humanScore, computerScore
function playGame() {
  let round = 1;
  let humanScore = (computerScore = 0);
  rounds.innerHTML = "ROUND:" + round;
  scores.innerHTML =
    "Human score: " + humanScore + "," + " Computer score: " + computerScore;
  result.innerHTML = "Play Something!";

  //
  rock.addEventListener("click", () => playGround("rock", getComputerChoice()));
  paper.addEventListener("click", () =>
    playGround("paper", getComputerChoice())
  );
  scissors.addEventListener("click", () =>
    playGround("scissors", getComputerChoice())
  );
  reset.addEventListener("click", () => {
    humanScore = computerScore = 0;
    round = 1;
    scores.innerHTML =
      "Human score: " + humanScore + "," + " Computer score: " + computerScore;
    rounds.innerHTML = "ROUND:" + round;
    result.innerHTML = "Play Something!";
    end.innerHTML = "";
  });

  function playGround(humanChoice, computerChoice) {
    end.innerHTML = "";
    rounds.innerHTML = "ROUND:" + round;
    let msg =
      "You chose: " + humanChoice + ", " + "Computer chose: " + computerChoice;

    console.log(result.innerHTML);

    if (humanChoice === computerChoice) {
      result.innerHTML = msg + " || " + "It's a tie, both said " + humanChoice;
      round++;
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++, round++;
        result.innerHTML = msg + " || " + "Computer wins!, paper beats rock";
      } else {
        humanScore++, round++;
        result.innerHTML = msg + " || " + "Human wins!, rock beats scissors";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        computerScore++, round++;
        result.innerHTML =
          msg + " || " + "Computer wins!, scissors beats paper";
      } else {
        humanScore++, round++;
        result.innerHTML = msg + " || " + "Human wins!, paper beats rock";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore++, round++;
        result.innerHTML = msg + " || " + "Computer wins!, rock beats scissors";
      } else {
        humanScore++, round++;
        result.innerHTML = msg + " || " + "Human wins!, scissors beats paper";
      }
    }
    scores.innerHTML =
      "Human score: " + humanScore + "," + " Computer score: " + computerScore;
    console.log(scores.innerHTML);

    if (humanScore == 5 || computerScore == 5) {
      end.innerHTML =
        humanScore > computerScore
          ? " You got 5 points,You win!"
          : "Computer got 5 points, Computer wins!";
      humanScore = computerScore = 0;
      round = 1;
    }
  }
}
playGame();
