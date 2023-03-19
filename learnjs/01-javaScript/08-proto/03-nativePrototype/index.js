'use strict'
/**
 * Добавить функциям метод "f.defer(ms)"
важность: 5
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
  alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
>>>>>>>>>> решение
*/
Function.prototype.defer = function(ms){
  let counter = setTimeout(() => {
    this()
    clearTimeout(counter)
  }, ms)
}

function f() {
  alert("Hello!");
}

/**
Добавьте функциям декорирующий метод "defer()"
важность: 4
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

>>>>>>>>>>>> решение
 */
Function.prototype.deferDecor = function(ms) {
  let t = this;
  return function(...args) {
    let counter = setTimeout(() => {
      t.apply(this, args)
      clearTimeout(counter)
    }, ms);
  }
};

// check it
function sum(a, b) {
  alert( a + b );
}