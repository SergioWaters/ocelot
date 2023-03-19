'use strict'
/**
 * Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:


alert( sumSalaries(salaries) ); // 650
Открыть песочницу с тестами для задачи.

>>>>>>>>> решение
*/
const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const emptySal = {};

const sumSalaries = (obj) => Object.values(obj).reduce((acc, curr)=> acc + curr, 0);

function sumSalWithForOf(obj) {
  let sum = 0;
  let arr = Object.values(obj)

  for (let salary of arr) {
    sum += salary;
  }

  return sum;
}

console.log('sum of salaries = ', sumSalaries(salaries));
console.log('sum of emtpty = ', sumSalaries(emptySal));


/**
 * Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

Открыть песочницу с тестами для задачи.

>>>>>>>>>> решение
 */
const countKeys = (obj) => Object.keys(obj).length;
console.log('number of keys = ', countKeys(salaries));
