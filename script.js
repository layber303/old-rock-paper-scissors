const getUserChoice = userChoice => {
  userChoice = prompt('Pick rock, paper or scissors!')
  userChoice = userChoice.toLowerCase()
  
  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors' ) {
    return userChoice;
  } else {
    
    while (userChoice == null || userChoice !== ("rock" || "paper" || "scissors")) {
      prompt("Please pick rock, paper or scissors!");
      return userChoice;
    }
    
  }
  
  
}


function getComputerChoice () {
  let computerNumber = Math.floor(Math.random() * 3);
  switch (computerNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  default:
    return 'error bitch';
  }
};

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'It\'s a draw';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  } else if ( userChoice === 'scissors' ) {
    if (computerChoice === 'rock') {
      return 'The computer won!'
    } else {
      return 'You won!'
    }
  }
}



const playGame = () => {
const userChoice = getUserChoice('scissors');
const computerChoice = getComputerChoice('');
let computerScore = 0
let playerScore = 0
console.log(`You threw ${userChoice}`)
console.log(`The computer threw ${computerChoice}`)
console.log(determineWinner(userChoice, computerChoice));

}




playGame()
