'use strict'
/**
 * Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
Открыть песочницу с тестами для задачи.
*/
// решение <<<<<

function upperCaseStr(str) {
  return !str ? str :
  str[0].toUpperCase() + str.slice(1)
}


/**
Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
Открыть песочницу с тестами для задачи.
*/
// решение <<<<<

function checkSpam(str) {
  if (!str) return 'enter text first'
  let newStr = str.toLowerCase();;

  return newStr.includes('viagra') || newStr.includes('xxx');
}



/**
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

truncate("Всем привет!", 20) = "Всем привет!"
Открыть песочницу с тестами для задачи.
*/
// решение <<<<<

function truncate(str, len) {
  return (str.length < maxlength) ? str :
    str.slice(0, len - 1) + '…';
}

/**
Выделить число
важность: 4
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
*/
// решение <<<<<
const extractCurrencyValue = (str) => +str.slice(1);