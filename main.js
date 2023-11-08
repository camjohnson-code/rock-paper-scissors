// EVENT HANDLERS
var landingPage = document.querySelector('.landing-page');
var easyModePage = document.querySelector('.easy-mode');
var hardModePage = document.querySelector('.hard-mode');
var header = document.querySelector('header');
var main = document.querySelector('main');
var optionsSection = document.querySelector('.options');
var rockSection = document.querySelector('.rock');
var paperSection = document.querySelector('.paper');
var scissorsSection = document.querySelector('.scissors');
var rockIcons = rockSection.querySelectorAll('svg');
var paperIcons = paperSection.querySelectorAll('svg');
var scissorsIcons = scissorsSection.querySelectorAll('svg');
var button = document.querySelector('.btn');

// GLOBAL VARIABLES
var toggleComplete = false;

// EVENT LISTENERS
rockSection.addEventListener('mouseenter', function () {
  showGradientSVG(rockIcons);
});
rockSection.addEventListener('mouseleave', function () {
  hideGradientSVG(rockIcons);
});

paperSection.addEventListener('mouseenter', function () {
  showGradientSVG(paperIcons);
});
paperSection.addEventListener('mouseleave', function () {
  hideGradientSVG(paperIcons);
});

scissorsSection.addEventListener('mouseenter', function () {
  showGradientSVG(scissorsIcons);
});
scissorsSection.addEventListener('mouseleave', function () {
  hideGradientSVG(scissorsIcons);
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
