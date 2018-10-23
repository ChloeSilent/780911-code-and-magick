'use strict';
/* -----------------------module3-task1----------------------------------*/
/* модуль отрисовывает сгенерированных магов*/
var NUMBER_OF_WIZARDS = 4;
var wizarNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSecondnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userProfil = document.querySelector('.setup');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

/* возвращает рандомное число */
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/* перемешивает массив рандомно*/
function shuffle(a) {
  var j;
  var x;
  var i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
/* возвращает рандомно из массива значение*/
var getFromArray = function (array) {
  return array[getRandom(0, array.length)];
};

/* функция создает массив из 2х перемешанных массивов */
var createFullNameOfUser = function (list1, list2) {
  var fullNameList = [];
  var listOne = shuffle(list1);
  var ListTwo = shuffle(list2);
  for (var i = 0; i < list1.length; i++) {
    fullNameList[i] = listOne[i] + ' ' + ListTwo[i];
    // console.log(fullNameList[i]);
  }
  var name = getFromArray(fullNameList);
  return name;
};

/* функция создающая объект-маг  похожих персонажей */
var createWizard = function (firstName, secondName, coats, eyes) {
  var wizard = {
    'name': createFullNameOfUser(firstName, secondName),
    'coatColor': getFromArray(coats),
    'eyesColor': getFromArray(eyes)
  };
  return wizard;
};

/* функция отрисовывает одного мага, дает ему имя и цвет пальто из массива */
var drawWizard = function (wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.namesArray;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
/* функция добавляет магов, сгенерированных в drawWizard в профиль пользователя*/
var putWizardsinProfil = function (number, listNmes, listSecondNames, listCoats, ListEyes) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < number; i++) {
    fragment.appendChild(drawWizard(createWizard(listNmes, listSecondNames, listCoats, ListEyes)));
  }
  similarListElement.appendChild(fragment);
};

/* вызовы функций */
userProfil.querySelector('.setup-similar').classList.remove('hidden');
userProfil.classList.remove('hidden');
putWizardsinProfil(NUMBER_OF_WIZARDS, wizarNames, wizardSecondnames, coatColor, eyesColor);

