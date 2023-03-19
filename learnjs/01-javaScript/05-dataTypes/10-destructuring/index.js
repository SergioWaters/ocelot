'use strict'
/**
 Деструктурирующее присваивание
важность: 5
У нас есть объект:

let user = {
  name: "John",
  years: 30
};
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания:


// ваш код должен быть с левой стороны:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false
>>>>>>>>> решение
*/
let user = { name: "John", years: 30 };

const {name, years: age, isAdmin = false} = user;

/**
Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

Открыть песочницу с тестами для задачи.

>>>>>>>>> решение
*/
function topSalary(obj) {
  let topSalary = 0;
  let topEmpl = null;
  const arrOfEntries = Object.entries(obj)

  for(const [name, salary] of arrOfEntries) {
    if (topSalary < salary) {
      max = salary;
      topEmpl = name;
    }
  }

  return topEmpl;
}