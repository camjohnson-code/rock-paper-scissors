// EVENT HANDLERS
var body = document.querySelector('body');
var headerLinks = document.querySelector('.links');
var landingPage = document.querySelector('.landing-page');
var game = document.querySelector('.game');
var header = document.querySelector('header');
var howToPlayModal = document.querySelector('.how-to-play-modal');
var optionsSection = document.querySelector('.options');
var allChoices = document.querySelectorAll('.choice');
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
    choice: '',
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
  playBtn.disabled = true;

  if (!localStorage.getItem('human')) {
    addToLocalStorage();
  }

  takeTurn();
  updateScores(humanScore, 'human');
  updateScores(computerScore, 'computer');
  showChoices(computer.choice, human.choice);
  newGame();
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

function showGradients(element) {
  for (i = 0; i < 5; i++) {
    showElement(element[i]);
  }
}

function hideGradients(element) {
  for (i = 0; i < 5; i++) {
    hideElement(element[i]);
  }
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

function addToLocalStorage() {
  localStorage.setItem('human', JSON.stringify(human));
  localStorage.setItem('computer', JSON.stringify(computer));
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
    displayGameOutcome(computer.choice, 'Player'), addToScore('human');
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
    displayGameOutcome(computer.choice, 'Computer'), addToScore('computer');
}

function addToScore(winner) {
  var userData = JSON.parse(localStorage.getItem(winner));

  if (isEasyMode) {
    userData.easyWins += 1;
  } else {
    userData.hardWins += 1;
  }

  localStorage.setItem(winner, JSON.stringify(userData));
  return winner;
}

function updateScores(userScore, user) {
  userScore.innerText = '';
  var userData = JSON.parse(localStorage.getItem(user));

  if (isEasyMode) {
    userScore.innerText = `${userData.easyWins}`;
  } else {
    userScore.innerText = `${userData.hardWins}`;
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
    playBtn.disabled = true;
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
    humanScore.innerText = `${
      JSON.parse(localStorage.getItem('human')).easyWins
    }`;
    computerScore.innerText = `${
      JSON.parse(localStorage.getItem('computer')).easyWins
    }`;
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
    humanScore.innerText = `${
      JSON.parse(localStorage.getItem('human')).hardWins
    }`;
    computerScore.innerText = `${
      JSON.parse(localStorage.getItem('computer')).hardWins
    }`;
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

function showChoices(computerChoice, humanChoice) {
  if (computerChoice !== humanChoice) {
    optionsSection.innerHTML = '';

    for (i = 0; i < allChoices.length; i++) {
      allChoices[i].classList.contains(humanChoice) ? optionsSection.appendChild(allChoices[i]) : {};
    }

    for (i = 0; i < allChoices.length; i++) {
      allChoices[i].classList.contains(computerChoice) ? optionsSection.appendChild(allChoices[i]) : {};
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

    playBtn.disabled = false;

    for (let i = 0; i < allChoices.length; i++) {
      allChoices[i].classList.remove('choice-selected');
    }

    if (isChoiceElement.classList.contains('rock')) {
      hideGradients(gradientSVG);
      showGradients(whiteSVG);
      hideElement(whiteSVG[0]);
      showElement(gradientSVG[0]);
    } else if (isChoiceElement.classList.contains('paper')) {
      hideGradients(gradientSVG);
      showGradients(whiteSVG);
      showElement(gradientSVG[1]);
      hideElement(whiteSVG[1]);
    } else if (isChoiceElement.classList.contains('scissors')) {
      hideGradients(gradientSVG);
      showGradients(whiteSVG);
      showElement(gradientSVG[2]);
      hideElement(whiteSVG[2]);
    } else if (isChoiceElement.classList.contains('fire')) {
      hideGradients(gradientSVG);
      showGradients(whiteSVG);
      showElement(gradientSVG[3]);
      hideElement(whiteSVG[3]);
    } else {
      hideGradients(gradientSVG);
      showGradients(whiteSVG);
      showElement(gradientSVG[4]);
      hideElement(whiteSVG[4]);
    }

    isChoiceElement.classList.add('choice-selected');
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
  for (i = 0; i < allChoices.length; i++) {
    optionsSection.appendChild(allChoices[i]);
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
