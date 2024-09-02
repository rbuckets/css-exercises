let humanScore = 0
let computerScore = 0

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

function getHumanChoice() {
  let humanInput = prompt("Please enter your choice:")

  return humanInput.toLowerCase().trim()
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log("You lose! Paper beats Rock");
    } else if (computerChoice == "scissors") {
      humanScore++;
      console.log("You win! Rock beats Scissors");
    } else {
      console.log("It's a tie!")
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissors") {
      computerScore++;
      console.log("You lose! Scissors beats Paper");
    } else if (computerChoice == "rock") {
      humanScore++;
      console.log("You win! Paper beats Rock");
    } else {
      console.log("It's a tie!")
    }
  } else if (humanChoice == "scissors") {
    if (computerChoice == "rock") {
      computerScore++;
      console.log("You lose! Rock beats Scissors");
    } else if (computerChoice == "paper") {
      humanScore++;
      console.log("You win! Scissors beats Paper");
    } else {
      console.log("It's a tie!")
    }
  }
}

function playGame() {

  for(let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
  }

  if (humanScore > computerScore) {
    console.log("You won the game!")
  } else if (humanScore < computerScore) {
    console.log("You lost the game!")
  } else {
    console.log("It's a tie!")
  }
}

playGame()