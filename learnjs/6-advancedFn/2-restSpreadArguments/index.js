'use strict'
/**
 * Независимы ли счётчики?
важность: 5
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
>>>>> решение
*/
counter2(); // 0
counter2(); // 1
/** контекст или лексические окружение у функций 
* каунтер1 и каунтер2 - разные,
* поэтому и переменная count у каждой начинается с 0
*/


/**
 * Объект счётчика
важность: 5
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
>>>>>>> решение
 */
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

const counter = new Counter();

counter.up();     // 1
counter.up();     // 2
counter.down();   // 3


/**
 * Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
решение
 */

// sayHi is not defined
// функция объявлена внутри блока if и снаружи не доступна