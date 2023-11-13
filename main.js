// EVENT HANDLERS
var body = document.querySelector('body');
var headerLinks = document.querySelector('.links');
var landingPage = document.querySelector('.landing-page');
var game = document.querySelector('.game');
var header = document.querySelector('header');
var howToPlayModal = document.querySelector('.how-to-play-modal');
var optionsSection = document.querySelector('.options');
var rockChoice = document.querySelector('.rock');
var paperChoice = document.querySelector('.paper');
var scissorsChoice = document.querySelector('.scissors');
var fireChoice = document.querySelector('.fire');
var waterChoice = document.querySelector('.water');
var whiteSVG = document.querySelectorAll('.white-svg');
var gradientSVG = document.querySelectorAll('.gradient-svg');
var playBtn = document.querySelector('.play-btn');
var easyModeBtn = document.querySelector('.easy-mode-button');
var hardModeBtn = document.querySelector('.hard-mode-button');
var howToPlayBtn = document.querySelector('.how-to-play');
var homeBtn = document.querySelector('.home-button');
var gameResultMessage = document.querySelector('.game-result');
var humanScore = document.querySelector('.human-score');
var computerScore = document.querySelector('.computer-score');
var body = document.querySelector('body');

// GLOBAL VARIABLES
var easyModeChoices = ['rock', 'paper', 'scissors'];
var hardModeChoices = ['rock', 'paper', 'scissors', 'fire', 'water'];
var computer = createPlayer('computer');
var human = createPlayer('human');
var isEasyMode = true;


// DATA MODEL
function createPlayer(name) {
  return {
    name: name,
    easyWins: 0,
    hardWins: 0,
    choice: ''
  };
}

// EVENT LISTENERS
// Click event listeners
document.addEventListener('click', function (event) {
  hideHowToPlayModal(event);
});

landingPage.addEventListener('click', function (event) {
  displayEasyMode(event);
  displayHardMode(event);
});

header.addEventListener('click', function (event) {
  hideHeader(event);
  displayEasyMode(event);
  displayHardMode(event);
  displayHowToPlayModal(event);
});

game.addEventListener('click', function (event) {
  displaySelectedChoice(event);
  removeAllChoices(event);
});

playBtn.addEventListener('click', function (event) {
  takeTurn();
  updateScores(humanScore, human);
  updateScores(computerScore, computer);
  showComputerChoice();
  newGame();
});

// Hover event listeners
rockChoice.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(whiteSVG[0]);
    showElement(gradientSVG[0]);
  }
});

rockChoice.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(whiteSVG[0]);
    hideElement(gradientSVG[0]);
  }
});

paperChoice.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(whiteSVG[1]);
    showElement(gradientSVG[1]);
  }
});

paperChoice.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(whiteSVG[1]);
    hideElement(gradientSVG[1]);
  }
});

scissorsChoice.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(whiteSVG[2]);
    showElement(gradientSVG[2]);
  }
});

scissorsChoice.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(whiteSVG[2]);
    hideElement(gradientSVG[2]);
  }
});

fireChoice.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(whiteSVG[3]);
    showElement(gradientSVG[3]);
  }
});

fireChoice.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(whiteSVG[3]);
    hideElement(gradientSVG[3]);
  }
});

waterChoice.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(whiteSVG[4]);
    showElement(gradientSVG[4]);
  }
});

waterChoice.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(whiteSVG[4]);
    hideElement(gradientSVG[4]);
  }
});

// FUNCTIONS
// Helper functions
function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function generateRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
}

// Game functions
function generateChoice() {
  if (isEasyMode) {
    var choice = easyModeChoices[generateRandomNumber(easyModeChoices)];
  } else {
    var choice = hardModeChoices[generateRandomNumber(hardModeChoices)];
  }

  computer.choice = choice;
  return computer;
}

function determineHumanChoice() {
  var allChoices = Array.from(optionsSection.children);
  var humanChoice = '';

  for (i = 0; i < allChoices.length; i++) {
    if (allChoices[i].classList.contains('choice-selected'))
      humanChoice = allChoices[i].classList.item(0);
  }

  human.choice = humanChoice;
  return human;
}

function takeTurn() {
  determineHumanChoice();
  generateChoice();

  if (human.choice === computer.choice) displayGameOutcome();
  if (
    (human.choice === 'rock' && computer.choice === 'scissors') ||
    (human.choice === 'rock' && computer.choice === 'water') ||
    (human.choice === 'paper' && computer.choice === 'rock') ||
    (human.choice === 'paper' && computer.choice === 'water') ||
    (human.choice === 'scissors' && computer.choice === 'paper') ||
    (human.choice === 'scissors' && computer.choice === 'water') ||
    (human.choice === 'fire' && computer.choice === 'paper') ||
    (human.choice === 'fire' && computer.choice === 'rock') ||
    (human.choice === 'fire' && computer.choice === 'scissors') ||
    (human.choice === 'water' && computer.choice === 'fire')
  )
    displayGameOutcome(computer.choice, 'Player'), addToScore(human);
  if (
    (human.choice === 'rock' && computer.choice === 'paper') ||
    (human.choice === 'rock' && computer.choice === 'fire') ||
    (human.choice === 'paper' && computer.choice === 'scissors') ||
    (human.choice === 'paper' && computer.choice === 'fire') ||
    (human.choice === 'scissors' && computer.choice === 'rock') ||
    (human.choice === 'scissors' && computer.choice === 'fire') ||
    (human.choice === 'fire' && computer.choice === 'water') ||
    (human.choice === 'water' && computer.choice === 'rock') ||
    (human.choice === 'water' && computer.choice === 'paper') ||
    (human.choice === 'water' && computer.choice === 'scissors')
  )
    displayGameOutcome(computer.choice, 'Computer'), addToScore(computer);

  showComputerChoice(computer.choice, human.choice);
}

function addToScore(winner) {
  if (isEasyMode) {
    winner.easyWins += 1;
  } else {
    winner.hardWins += 1;
  }
  return winner;
}

function updateScores(userScore, user) {
  userScore.innerText = '';
  if (isEasyMode) {
    userScore.innerText = `${user.easyWins}`;
  } else {
    userScore.innerText = `${user.hardWins}`;
  }
  return userScore;
}

function displayGameOutcome(computerChoice, winner) {
  if (!winner)
    return (gameResultMessage.innerText = `Nobody wins! It's a tie!`);
  return (gameResultMessage.innerText = `Computer chose ${computerChoice}! ${winner} wins!`);
}

function newGame() {
  setTimeout(function () {
    clearGameOutcome();
    resetOptions();
  }, 2000);
}

// Dom manipulation functions
function displayEasyMode(event) {
  if (event.target.classList.contains('easy-mode-button')) {
    showElement(game);
    showElement(header);
    showElement(hardModeBtn);
    hideElement(landingPage);
    hideElement(easyModeBtn);
    hideElement(fireChoice);
    hideElement(waterChoice);
    hideElement(howToPlayBtn);
    isEasyMode = true;
    optionsSection.classList.remove('hard-mode');
    humanScore.innerText = `${human.easyWins}`;
    computerScore.innerText = `${computer.easyWins}`;
  }
}

function displayHardMode(event) {
  if (event.target.classList.contains('hard-mode-button')) {
    showElement(game);
    showElement(header);
    showElement(easyModeBtn);
    showElement(fireChoice);
    showElement(waterChoice);
    showElement(howToPlayBtn);
    hideElement(landingPage);
    hideElement(hardModeBtn);
    isEasyMode = false;
    optionsSection.classList.add('hard-mode');
    humanScore.innerText = `${human.hardWins}`;
    computerScore.innerText = `${computer.hardWins}`;
  }
}

function hideHeader(event) {
  if (event.target.classList.contains('home-button')) {
    showElement(landingPage);
    hideElement(header);
    hideElement(game);
  }
}

function displayHowToPlayModal(event) {
  if (event.target.classList.contains('how-to-play')) {
    showElement(howToPlayModal);
    hideElement(game);
    header.classList.add('blur');
  }
}

function hideHowToPlayModal(event) {
  if (event.target === headerLinks || event.target === body) {
    showElement(game);
    hideElement(howToPlayModal);
    header.classList.remove('blur');
  }
}

function showComputerChoice(computerChoice, humanChoice) {
  var allChoices = document.querySelectorAll('.choice');

  if (computerChoice !== humanChoice) {
    for (i = 0; i < allChoices.length; i++) {
      if (
        !allChoices[i].classList.contains(computerChoice) &&
        !allChoices[i].classList.contains(humanChoice)
      )
        hideElement(allChoices[i]);
    }
  }
}

function clearGameOutcome() {
  return (gameResultMessage.innerText = ``);
}

// Highlighting choices functions
function displaySelectedChoice(event) {
  if (event.target.closest('section').classList.contains('choice')) {
    var isChoiceElement = event.target.closest('.choice');
    var allChoices = document.querySelectorAll('.choice');

    if (isChoiceElement) {
      for (let i = 0; i < allChoices.length; i++) {
        allChoices[i].classList.remove('choice-selected');
      }

      if (isChoiceElement.classList.contains('rock')) {
        showElement(gradientSVG[0]);
        showElement(whiteSVG[1]);
        showElement(whiteSVG[2]);
        showElement(whiteSVG[3]);
        showElement(whiteSVG[4]);
        hideElement(whiteSVG[0]);
        hideElement(gradientSVG[1]);
        hideElement(gradientSVG[2]);
        hideElement(gradientSVG[3]);
        hideElement(gradientSVG[4]);
      } else if (isChoiceElement.classList.contains('paper')) {
        showElement(gradientSVG[1]);
        showElement(whiteSVG[0]);
        showElement(whiteSVG[2]);
        showElement(whiteSVG[3]);
        showElement(whiteSVG[4]);
        hideElement(whiteSVG[1]);
        hideElement(gradientSVG[0]);
        hideElement(gradientSVG[2]);
        hideElement(gradientSVG[3]);
        hideElement(gradientSVG[4]);
      } else if (isChoiceElement.classList.contains('scissors')) {
        showElement(gradientSVG[2]);
        showElement(whiteSVG[0]);
        showElement(whiteSVG[1]);
        showElement(whiteSVG[3]);
        showElement(whiteSVG[4]);
        hideElement(whiteSVG[2]);
        hideElement(gradientSVG[0]);
        hideElement(gradientSVG[1]);
        hideElement(gradientSVG[3]);
        hideElement(gradientSVG[4]);
      } else if (isChoiceElement.classList.contains('fire')) {
        showElement(gradientSVG[3]);
        showElement(whiteSVG[0]);
        showElement(whiteSVG[1]);
        showElement(whiteSVG[2]);
        showElement(whiteSVG[4]);
        hideElement(whiteSVG[3]);
        hideElement(gradientSVG[0]);
        hideElement(gradientSVG[1]);
        hideElement(gradientSVG[2]);
        hideElement(gradientSVG[4]);
      } else {
        showElement(gradientSVG[4]);
        showElement(whiteSVG[0]);
        showElement(whiteSVG[1]);
        showElement(whiteSVG[2]);
        showElement(whiteSVG[3]);
        hideElement(whiteSVG[4]);
        hideElement(gradientSVG[0]);
        hideElement(gradientSVG[1]);
        hideElement(gradientSVG[2]);
        hideElement(gradientSVG[3]);
      }

      isChoiceElement.classList.add('choice-selected');
    }
  }
}

function removeAllChoices(event) {
  if (
    !event.target.closest('section').classList.contains('choice') &&
    !event.target.classList.contains('play-btn')
  ) {
    resetOptions();
  }
}

function resetOptions() {
  var allChoices = document.querySelectorAll('.choice');

  for (i = 0; i < allChoices.length; i++) {
    allChoices[i].classList.remove('choice-selected');
  }

  for (j = 0; j < 5; j++) {
    hideElement(gradientSVG[j]);
    showElement(whiteSVG[j]);
  }

  if (!isEasyMode) {
    var length = 5;
  } else {
    var length = 3;
  }

  for (k = 0; k < length; k++) {
    showElement(allChoices[k]);
  }
}
