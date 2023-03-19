'use strict'
/**
 * Найдите координаты точек относительно окна браузера
важность: 5
В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.


Ваш код должен при помощи DOM получить четыре пары координат:

верхний левый, внешний угол (это просто).
нижний правый, внешний угол (тоже просто).
верхний левый, внутренний угол (чуть сложнее).
нижний правый, внутренний угол (есть несколько способов, выберите один).
Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.

P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.

Открыть песочницу для задачи.

решение
*/
let coords = elem.getBoundingClientRect();

// верхний левый, внешний угол (это просто).
const upLeftOuter = [coords.left, coords.top];

// нижний правый, внешний угол (тоже просто).
const lowRightOuter = [coords.right, coords.bottom];

// верхний левый, внутренний угол (чуть сложнее).
const upLeftInner = [coords.left + field.clientLeft, coords.top + field.clientTop];

// нижний правый, внутренний угол (есть несколько способов, выберите один).
const lowRightInner = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight
];


/**
Покажите заметку рядом с элементом
важность: 5
Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

Демо заметки:


Открыть песочницу для задачи.

решение
*/
function positionAt(anchor, position, elem) {

  let anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }

}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}


/**
Покажите заметку около элемента (абсолютное позиционирование)
важность: 5
Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.

решение
*/
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + scrollY,
    left: box.left + scrollX
  };
}

function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }

}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}


/**
Расположите заметку внутри элемента (абсолютное позиционирование)
важность: 5
Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.
Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);
Результат:


Для начала возьмите решение задания Покажите заметку около элемента (абсолютное позиционирование).

решение
 */
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + scrollY,
    left: box.left + scrollX
  };
}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }

}


let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");