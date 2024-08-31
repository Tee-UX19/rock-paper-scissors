function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      console.log("Computer chose: rock");
      return "rock";

    case 1:
      console.log("Computer chose: paper");
      return "paper";
    case 2:
      console.log("Computer chose: scissors");
      return "scissors";
  }
}

function getHumanChoice(round) {
  let choice = prompt(
    "ROUND " + round + " || Enter your choice: rock, paper, or scissors"
  );
  choice = choice.toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Invalid choice, please enter rock, paper, or scissors!");
    return prompt("Invalid choice, please enter rock, paper, or scissors!");
  }
  return choice;
}

// console.log(humanScore, computerScore);

function playGame() {
  let humanScore = (computerScore = 0);
  let round = 1;
  function playGround(humanChoice, computerChoice) {
    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + humanChoice);
    if (humanChoice === computerChoice) {
      return "It's a tie, both said " + humanChoice;
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++;
        return "Computer wins!";
      } else {
        humanScore++;
        return "Human wins!";
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        computerScore++;
        return "Computer wins!";
      } else {
        humanScore++;
        return "Human wins!";
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        computerScore++;
        return "Computer wins!";
      } else {
        humanScore++;
        return "Human wins!";
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    
    console.log(playGround(getHumanChoice(round), getComputerChoice));
    round++;
  }
  console.log(
    "Human score: " + humanScore + " Computer score: " + computerScore
  );
  if (humanScore > computerScore) {
    return "Human wins the game!";
  } else if (humanScore < computerScore) {
    return "Computer wins the game!";
  } else {
    return "It's a tie!";
  }
}

console.log(playGame());
