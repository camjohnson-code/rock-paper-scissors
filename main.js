// EVENT HANDLERS
var landingPage = document.querySelector('.landing-page');
var easyModePage = document.querySelector('.easy-mode');
var hardModePage = document.querySelector('.hard-mode');
var header = document.querySelector('header');
var main = document.querySelector('main');
var optionsSection = document.querySelector('.options');
var easyModeRock = document.querySelector('#easy-mode-rock');
var easyModePaper = document.querySelector('#easy-mode-paper');
var easyModeScissors = document.querySelector('#easy-mode-scissors');
var hardModeRock = document.querySelector('#hard-mode-rock');
var hardModePaper = document.querySelector('#hard-mode-paper');
var hardModeScissors = document.querySelector('#hard-mode-scissors');
var hardModeFire = document.querySelector('#hard-mode-fire');
var hardModeWater = document.querySelector('#hard-mode-water');
var easyRockIcons = easyModeRock.querySelectorAll('svg');
var easyPaperIcons = easyModePaper.querySelectorAll('svg');
var easyScissorsIcons = easyModeScissors.querySelectorAll('svg');
var hardRockIcons = hardModeRock.querySelectorAll('svg');
var hardPaperIcons = hardModePaper.querySelectorAll('svg');
var hardScissorsIcons = hardModeScissors.querySelectorAll('svg');
var hardFireIcons = hardModeFire.querySelectorAll('svg');
var hardWaterIcons = hardModeWater.querySelectorAll('svg');
var button = document.querySelector('.btn');

// GLOBAL VARIABLES
var toggleComplete = false;

// EVENT LISTENERS
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
