// EVENT HANDLERS
var landingPage = document.querySelector('.landing-page');
var easyModePage = document.querySelector('.easy-mode');
var hardModePage = document.querySelector('.hard-mode');
var header = document.querySelector('header');
var main = document.querySelector('main');
var easyModeSection = document.querySelector('.easy-mode');
var optionsSection = document.querySelector('.options');
var easyModeRock = document.querySelector('.easy-mode-rock');
var easyModePaper = document.querySelector('.easy-mode-paper');
var easyModeScissors = document.querySelector('.easy-mode-scissors');
var hardModeRock = document.querySelector('.hard-mode-rock');
var hardModePaper = document.querySelector('.hard-mode-paper');
var hardModeScissors = document.querySelector('.hard-mode-scissors');
var hardModeFire = document.querySelector('.hard-mode-fire');
var hardModeWater = document.querySelector('.hard-mode-water');
var easyRockWhiteIcon = easyModeRock.querySelector('.white-svg');
var easyRockSVGIcon = easyModeRock.querySelector('.gradient-svg');
var easyPaperWhiteIcon = easyModePaper.querySelector('.white-svg');
var easyPaperSVGIcon = easyModePaper.querySelector('.gradient-svg');
var easyScissorsWhiteIcon = easyModeScissors.querySelector('.white-svg');
var easyScissorsSVGIcon = easyModeScissors.querySelector('.gradient-svg');
var hardRockIcons = hardModeRock.querySelectorAll('svg');
var hardPaperIcons = hardModePaper.querySelectorAll('svg');
var hardScissorsIcons = hardModeScissors.querySelectorAll('svg');
var hardFireIcons = hardModeFire.querySelectorAll('svg');
var hardWaterIcons = hardModeWater.querySelectorAll('svg');
var button = document.querySelector('.btn');
var easyModeBtn = document.querySelector('.easy-mode-button');
var hardModeBtn = document.querySelector('.hard-mode-button');
var homeBtn = document.querySelector('.home-button');
var easyModeHeader = document.querySelector('.easy-mode-page');
var hardModeHeader = document.querySelector('.hard-mode-page');

// EVENT LISTENERS
// Click event listeners
landingPage.addEventListener('click', function (event) {
  showEasyMode(event);
  showHardMode(event);
  displayEasyModePage(event);
  displayHardModePage(event);
});

header.addEventListener('click', function (event) {
  hideHeader(event);
  displayEasyModePage(event);
  displayHardModePage(event);
});

easyModeSection.addEventListener('click', function (event) {
  selectChoice(event);
});

// Hover event listeners
easyModeRock.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(easyRockWhiteIcon);
    showElement(easyRockSVGIcon);
  }
});
easyModeRock.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(easyRockWhiteIcon);
    hideElement(easyRockSVGIcon);
  }
});

easyModePaper.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(easyPaperWhiteIcon);
    showElement(easyPaperSVGIcon);
  }
});
easyModePaper.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(easyPaperWhiteIcon);
    hideElement(easyPaperSVGIcon);
  }
});

easyModeScissors.addEventListener('mouseenter', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    hideElement(easyScissorsWhiteIcon);
    showElement(easyScissorsSVGIcon);
  }
});
easyModeScissors.addEventListener('mouseleave', function (event) {
  if (!event.target.classList.contains('choice-selected')) {
    showElement(easyScissorsWhiteIcon);
    hideElement(easyScissorsSVGIcon);
  }
});

// hardModeRock.addEventListener('mouseenter', function () {});
// hardModeRock.addEventListener('mouseleave', function () {});

// hardModePaper.addEventListener('mouseenter', function () {});
// hardModePaper.addEventListener('mouseleave', function () {});

// hardModeScissors.addEventListener('mouseenter', function () {});
// hardModeScissors.addEventListener('mouseleave', function () {});

// hardModeFire.addEventListener('mouseenter', function () {});
// hardModeFire.addEventListener('mouseleave', function () {});

// hardModeWater.addEventListener('mouseenter', function () {});
// hardModeWater.addEventListener('mouseleave', function () {});

// FUNCTIONS
// Helper functions
function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

// Dom manipulation functions
function displayEasyModePage(event) {
  if (event.target.classList.contains('easy-mode-button')) {
    showElement(easyModePage);
    showElement(header);
    showElement(hardModeBtn);
    hideElement(landingPage);
    hideElement(easyModeBtn);
  }
}

function displayHardModePage(event) {
  if (event.target.classList.contains('hard-mode-button')) {
    showElement(hardModePage);
    showElement(header);
    showElement(easyModeHeader);
    hideElement(landingPage);
    hideElement(hardModeHeader);
    hideElement(easyModePage);
  }
}

function hideHeader(event) {
  if (event.target.classList.contains('home-button')) {
    showElement(landingPage);
    hideElement(header);
    hideElement(hardModePage);
    hideElement(easyModePage);
  }
}

// Styling functions
function selectChoice(event) {
  displaySelectedChoice(event);
  removeAllChoices(event);
}

function displaySelectedChoice(event) {
  if (event.target.closest('section').classList.contains('choice')) {
    var isChoiceElement = event.target.closest('.choice');
    var allChoices = document.querySelectorAll('.choice');

    if (isChoiceElement) {
      for (let i = 0; i < allChoices.length; i++) {
        allChoices[i].classList.remove('choice-selected');
      }

      if (isChoiceElement.classList.contains('rock')) {
        showElement(easyRockSVGIcon);
        showElement(easyPaperWhiteIcon);
        showElement(easyScissorsWhiteIcon);
        hideElement(easyPaperSVGIcon);
        hideElement(easyScissorsSVGIcon);
      } else if (isChoiceElement.classList.contains('paper')) {
        showElement(easyPaperSVGIcon);
        showElement(easyRockWhiteIcon);
        showElement(easyScissorsWhiteIcon);
        hideElement(easyRockSVGIcon);
        hideElement(easyScissorsSVGIcon);
      } else {
        showElement(easyScissorsSVGIcon);
        showElement(easyRockWhiteIcon);
        showElement(easyPaperWhiteIcon);
        hideElement(easyRockSVGIcon);
        hideElement(easyPaperSVGIcon);
      }

      isChoiceElement.classList.add('choice-selected');
    }
  }
}

function removeAllChoices(event) {
  if (
    !event.target.classList.contains('choice') &&
    !event.target.classList.contains('options') &&
    !event.target.classList.contains('play-btn')
  )
    resetOptions(event);
}

function resetOptions(event) {
  var isChoiceElement = event.target.closest('.choice');
  var allChoices = document.querySelectorAll('.choice');

  for (let j = 0; j < allChoices.length; j++) {
    allChoices[j].classList.remove('choice-selected');
  }

  hideElement(easyRockSVGIcon);
  hideElement(easyPaperSVGIcon);
  hideElement(easyScissorsSVGIcon);
  showElement(easyRockWhiteIcon);
  showElement(easyPaperWhiteIcon);
  showElement(easyScissorsWhiteIcon);
}
