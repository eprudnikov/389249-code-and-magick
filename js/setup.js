'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
  'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

window.showElement = function (selector) {
  var element = document.querySelector(selector);
  element.classList.remove('hidden');
};

window.getRandomAttribute = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

window.generateRandomWizards = function () {
  var result = [];
  var maxSimilarWizard = 4;
  for (var i = 0; i < maxSimilarWizard; i++) {
    result[i] = {
      name: window.getRandomAttribute(NAMES) + ' ' + window.getRandomAttribute(SURNAMES),
      coatColor: window.getRandomAttribute(COAT_COLORS),
      eyesColor: window.getRandomAttribute(EYES_COLORS)
    };
  }
  return result;
};

window.renderWizard = function (template, wizard) {
  var result = template.cloneNode(true);
  result.querySelector('.setup-similar-label').textContent = wizard.name;
  result.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  result.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return result;
};

window.renderWizards = function (wizards) {
  var template = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(window.renderWizard(template, wizards[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
};


window.showElement('.setup');

var wizards = window.generateRandomWizards();
window.renderWizards(wizards);
window.showElement('.setup-similar');

