'use strict'
/**
 * Задачи
Привет, object
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

// решение <<<<<
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

/**
Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
Открыть песочницу с тестами для задачи.
*/
// решение <<<<<<
function isEmpty(obj) {
  for (let key in obj) return !key;
  return true;
}

/**
Объекты-константы?
важность: 5
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
*/
// решение <<<<
// >> да, свойства объектов, объявленных с помощью ключевого слова const - можно переопределять.
// >> нельзя назначить другое значение самой переменной

/**
Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды:
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/
// решение <<<<<<<<
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function salariesSum(s = salaries) {
  let sum = null;
  for (let k in s) sum += s[k];
  return sum;
}

/**
Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции

multiplyNumeric(menu);

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
// решение <<<<<<<<
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multObjKeyByTwo(m = menu){
  for(let k in m){
    if(typeof m[k] == 'number') m[k] *= 2;
  }
};