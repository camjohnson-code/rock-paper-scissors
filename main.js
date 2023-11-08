// EVENT HANDLERS
var landingPage = document.querySelector('.landing-page');
var easyModePage = document.querySelector('.easy-mode');
var hardModePage = document.querySelector('.hard-mode');
var header = document.querySelector('header');
var main = document.querySelector('main');
var optionsSection = document.querySelector('.options');
var easyModeRock = document.querySelector('.easy-mode-rock');
var easyModePaper = document.querySelector('.easy-mode-paper');
var easyModeScissors = document.querySelector('.easy-mode-scissors');
var hardModeRock = document.querySelector('.hard-mode-rock');
var hardModePaper = document.querySelector('.hard-mode-paper');
var hardModeScissors = document.querySelector('.hard-mode-scissors');
var hardModeFire = document.querySelector('.hard-mode-fire');
var hardModeWater = document.querySelector('.hard-mode-water');
var easyRockIcons = easyModeRock.querySelectorAll('svg');
var easyPaperIcons = easyModePaper.querySelectorAll('svg');
var easyScissorsIcons = easyModeScissors.querySelectorAll('svg');
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

// GLOBAL VARIABLES
var toggleComplete = false;

// EVENT LISTENERS
// Click event listeners
landingPage.addEventListener('click', function (event) {
  displayEasyModePage(event);
  displayHardModePage(event);
});

header.addEventListener('click', function (event) {
  hideHeader(event);
  displayEasyModePage(event);
  displayHardModePage(event);
});

// Hover event listeners
easyModeRock.addEventListener('mouseenter', function () {
  showGradientSVG(easyRockIcons);
});
easyModeRock.addEventListener('mouseleave', function () {
  hideGradientSVG(easyRockIcons);
});

easyModePaper.addEventListener('mouseenter', function () {
  showGradientSVG(easyPaperIcons);
});
easyModePaper.addEventListener('mouseleave', function () {
  hideGradientSVG(easyPaperIcons);
});

easyModeScissors.addEventListener('mouseenter', function () {
  showGradientSVG(easyScissorsIcons);
});
easyModeScissors.addEventListener('mouseleave', function () {
  hideGradientSVG(easyScissorsIcons);
});

hardModeRock.addEventListener('mouseenter', function () {
  showGradientSVG(hardRockIcons);
});
hardModeRock.addEventListener('mouseleave', function () {
  hideGradientSVG(hardRockIcons);
});

hardModePaper.addEventListener('mouseenter', function () {
  showGradientSVG(hardPaperIcons);
});
hardModePaper.addEventListener('mouseleave', function () {
  hideGradientSVG(hardPaperIcons);
});

hardModeScissors.addEventListener('mouseenter', function () {
  showGradientSVG(hardScissorsIcons);
});
hardModeScissors.addEventListener('mouseleave', function () {
  hideGradientSVG(hardScissorsIcons);
});

hardModeFire.addEventListener('mouseenter', function () {
  showGradientSVG(hardFireIcons);
});
hardModeFire.addEventListener('mouseleave', function () {
  hideGradientSVG(hardFireIcons);
});

hardModeWater.addEventListener('mouseenter', function () {
  showGradientSVG(hardWaterIcons);
});
hardModeWater.addEventListener('mouseleave', function () {
  hideGradientSVG(hardWaterIcons);
});

landingPage.addEventListener('click', function (event) {
  showEasyMode(event);
  showHardMode(event);
});

// FUNCTIONS
// Helper functions
function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

// Dom Manipulation
function displayEasyModePage(event) {
  if (event.target.classList.contains('easy-mode-button')) {
    showElement(easyModePage);
    showElement(header);
    showElement(hardModeBtn)
    hideElement(landingPage);
    hideElement(easyModeBtn)
  }
}

function displayHardModePage(event) {
  if (event.target.classList.contains('hard-mode-button')) {
    showElement(hardModePage);
    showElement(header);
    showElement(easyModeHeader);
    hideElement(landingPage);
    hideElement(hardModeHeader);
    hideElement(easyModePage)
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

// Styling elements
function showGradientSVG(icons) {
  if (!toggleComplete) {
    for (var i = 0; i < icons.length; i++) {
      if (icons[i].classList.contains('hidden')) {
        icons[i].classList.remove('hidden');
      } else {
        icons[i].classList.add('hidden');
      }
    }

    toggleComplete = true;
  }
}

function hideGradientSVG(icons) {
  if (toggleComplete) {
    for (var i = 0; i < icons.length; i++) {
      if (icons[i].classList.contains('hidden')) {
        icons[i].classList.remove('hidden');
      } else {
        icons[i].classList.add('hidden');
      }
    }

    toggleComplete = false;
  }
}
