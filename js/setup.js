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
/* снятие hidden для .setup-similar закомментировано, тк оно ниже в модуле module4-task1 снимается обработчиком */
userProfil.querySelector('.setup-similar').classList.remove('hidden');
userProfil.classList.remove('hidden');
putWizardsinProfil(NUMBER_OF_WIZARDS, wizarNames, wizardSecondnames, coatColor, eyesColor);

/* -----------------------module4-task1----------------------------------*/
/* Открытие/закрытие окна настройки персонажа, Изменение цвета мантии персонажа по нажатию,
Изменение цвета фаерболов по нажатию */
// var setupOpenElement = document.querySelector('.setup-open');
// var setupElement = document.querySelector('.setup');
// var setupCloseElement = setupElement.querySelector('.setup-close');
// var userNameInputElement = setupElement.querySelector('.setup-user-name');
// var userWizardElement = document.querySelector('.setup-wizard');
// var userWizardCoatElement = userWizardElement.querySelector('.wizard-coat');
// var inputColorCoatElement = document.querySelector('input[name="coat-color"]');
// var userWizardEyesElement = userWizardElement.querySelector('.wizard-eyes');
// var inputColorEyesElement = document.querySelector('input[name="eyes-color"]');
// var userWizardFireballElement = userWizardElement.querySelector('.setup-fireball-wrap');
// var inputColorFireballElement = document.querySelector('input[name="fireball-color"]');
// var wizardCoatsColor = ['rgb(101, 137, 164)',
//   'rgb(241, 43, 107)',
//   'rgb(146, 100, 161)',
//   'rgb(56, 159, 117)',
//   'rgb(215, 210, 55)',
//   'rgb(0, 0, 0)'
// ];

// var wizardEyesColor = [
//   'black',
//   'red',
//   'blue',
//   'yellow',
//   'green'
// ];

// var wizardfireballColor = [
//   '#ee4830',
//   '#30a8ee',
//   '#5ce6c0',
//   '#e848d5',
//   '#e6e848'
// ];

// /* Открытие окна настройки персонажа при клике на аватарку*/
// var onUserImageClick = function () {
//   setupElement.classList.remove('hidden');
// };
// /* Открытие окна настройки персонажа при клике enter на аватарку*/
// var onUserImageEnterDown = function (evt) {
//   if (evt.keyCode === 13) {
//     setupElement.classList.remove('hidden');
//   }
// };
// /* закрытие окна настройки персонажа при клике на крестик в окне настройки персонажа*/
// var onButtonCloseClick = function () {
//   setupElement.classList.add('hidden');
// };
// /* если поле ввода имени в фокусе и при этом нажат esc, то окно не закроется*/
// var onNameInputEscDown = function (evt) {
//   evt.preventDefault(); // останавливает всплытие события
//   evt.stopPropagation(); // останавливает всплытие события
//   if (userNameInputElement.focus && evt.keyCode === 27) {
//     setupElement.classList.remove('hidden');
//     // alert('Esc not allowed');
//   }
// };
// /* Если окно настроек открыто, нажатие клавиши ESC приводит к закрытию диалога */
// var onUserDialogEscDown = function (evt) {
//   if (evt.keyCode === 27) {
//     setupElement.classList.add('hidden');
//     // alert('ESCAPE ALLOWED!!!!!!!!!!!!');
//   }
// };


// /* закрытие окна настройки персонажа при нажатии enter на крестике*/
// var onCloseButtonEnterDown = function (evt) {
//   if (evt.keyCode === 13) {
//     setupElement.classList.add('hidden');
//   }
// };

// /* Изменение цвета мантии мага по нажатию*/
// var onWizardCoatClick = function () {
//   var color = getFromArray(wizardCoatsColor);
//   userWizardCoatElement.style.fill = color;
//   inputColorCoatElement.value = color;
// };
// /* Изменение цвета глаз мага по нажатию*/
// var onWizardEyesClick = function () {
//   var color = getFromArray(wizardEyesColor);
//   userWizardEyesElement.style.fill = color;
//   inputColorEyesElement.value = color;
// };
// /* Изменение цвета фаерболов по нажатию*/
// var onWizardFireballClick = function () {
//   var color = getFromArray(wizardfireballColor);
//   userWizardFireballElement.style.background = color;
//   inputColorFireballElement.value = color;
// };
// /* вызовы функций в порядке появления в коде выше*/
// setupOpenElement.addEventListener('click', onUserImageClick);
// setupOpenElement.addEventListener('keydown', onUserImageEnterDown);
// setupCloseElement.addEventListener('click', onButtonCloseClick);
// userNameInputElement.addEventListener('keydown', onNameInputEscDown);
// document.addEventListener('keydown', onUserDialogEscDown);
// setupCloseElement.addEventListener('keydown', onCloseButtonEnterDown);
// userWizardCoatElement.addEventListener('click', onWizardCoatClick);
// userWizardEyesElement.addEventListener('click', onWizardEyesClick);
// userWizardFireballElement.addEventListener('click', onWizardFireballClick);

