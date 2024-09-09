let humanRoundScore = 0
let computerRoundScore = 0

const humanScore = document.querySelector(".score-human span")
humanScore.textContent = humanRoundScore
const computerScore = document.querySelector(".score-computer span")
computerScore.textContent = computerRoundScore

const roundResult = document.querySelector(".round-result")
const selections = document.querySelector(".selections")
const restart = document.querySelector("#restart")
const score = document.querySelector(".score")

function getHumanChoice(event) {
  if (humanRoundScore < 5 && computerRoundScore < 5) {
    let target = event.target;
    let humanChoice;

    switch (target.id) {
      case 'rock':
        humanChoice = "rock";
        break;
      case 'paper':
        humanChoice = "paper";
        break;
      case 'scissors':
        humanChoice = "scissors";
        break;
    }

    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
}

function getComputerChoice() {
  const num = Math.random()

  if (num < 0.333) {
    return "rock";
  } else if (num >= 0.333 && num < 0.667) {
    return "paper";
  } else {
    return "scissors";
  }
}

function incrementComputerScore(humanChoice, computerChoice) {
  computerRoundScore++;
  computerScore.textContent = computerRoundScore;
  if (computerRoundScore == 5) {
    computerScore.style.color = "blue";
    return `${computerChoice} beats ${humanChoice}. You lose the game!`;
  } else {
    return `${computerChoice} beats ${humanChoice}. You lose the round.`;
  }
}

function incrementHumanScore(humanChoice, computerChoice) {
  humanRoundScore++;
  humanScore.textContent = humanRoundScore;
  if (humanRoundScore == 5) {
    humanScore.style.color = "blue";
    return `${humanChoice} beats ${computerChoice}. You win the game!`;
  } else {
    return `${humanChoice} beats ${computerChoice}. You win the round.`;
  }
}

function playRound(humanChoice, computerChoice) {
  let result;
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      result = incrementComputerScore("Rock", "Paper");
    } else if (computerChoice == "scissors") {
      result = incrementHumanScore("Rock", "Scissors");
    } else {
      result = "It's a tie!";
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      result = incrementComputerScore("Paper", "Scissors");
    } else if (computerChoice == "rock") {
      result = incrementHumanScore("Paper", "Rock");
    } else {
      result = "It's a tie!";
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      result = incrementComputerScore("Scissors", "Rock");
    } else if (computerChoice == "paper") {
      result = incrementHumanScore("Scissors", "Paper");
    } else {
      result = "It's a tie!";
    }
  }

  roundResult.textContent = result;
}

function reset() {
  humanRoundScore = 0;
  computerRoundScore = 0;
  humanScore.style.color = "black";
  computerScore.style.color = "black";
  humanScore.textContent = humanRoundScore;
  computerScore.textContent = computerRoundScore;
  roundResult.textContent = "";
}

selections.addEventListener("click", getHumanChoice);
restart.addEventListener("click", reset);
reset();

