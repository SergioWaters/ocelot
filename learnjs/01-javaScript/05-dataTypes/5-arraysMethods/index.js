'use strict'

/**
 * Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

Открыть песочницу с тестами для задачи.

>>>>>>>>> решение
*/

function camelCase(str){
  const stringArr = str.split('-');
  const camelStr = stringArr.map(w => {
    return w[0].toUpperCase() + w.slice(1);
  });
  console.log(camelStr.join(''));
}


/**
Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

Например:


let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)
Открыть песочницу с тестами для задачи.

>>>>>>>>>> решение
*/
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
  const inRangeArr = arr.filter(i => {
    if (i < a || i > b) return;
    return i
  })
  console.log(inRangeArr)
}


/**
Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
Открыть песочницу с тестами для задачи.

>>>>>>>>>>  решение
*/
let arrInPlace = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
  arr.forEach((i, indx, array) => {
    if (i < a || i > b)  array.splice(indx, 1);
  })
}


/**
Сортировать в порядке по убыванию
важность: 4
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
>>>>>>>>>>> решение
*/
arr.sort((a, b) => b - a)


/**
Скопировать и отсортировать массив
важность: 5
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arrToSort = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrToSort);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
>>>>>>> решение
*/

function copySorted(arr){
  return [...arr].sort()
}


/**
Создать расширяемый калькулятор
важность: 5
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
Открыть песочницу с тестами для задачи.

>>>>>>> решение
*/
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    const split = str.split(' ');
    const a = +split[0];
    const b = +split[2];
    const op = split[1];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}


/**
Трансформировать в массив имён
важность: 5
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];
let names = getArrOfValues(users, 'name')


console.log( names ); // Вася, Петя, Маша
// >>>>>>> решение
*/
function getArrOfValues(arr, key){
  return  arr.map( i => i[key] )
}


/**
Трансформировать в объекты
важность: 5
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

Например:

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = ... ваш код ... 

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин
Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

>>>>>>>>> решение
*/
function mapUsers(arr){
  return arr.map(u => {
    return {
      fullName: u.name + u.surname,
      id: u.id
    }
  })
}


/**
Отсортировать пользователей по возрасту
важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arrUsers = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

// >>>>>>>> решение
*/
function sortByAge(arr){
  arr.sort((a, b) => a.age - b.age )
};


/**
Перемешайте массив
важность: 3
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

 >>>>>>>>>> решение
*/
function shuffle(arr){
  arr.forEach((i, indx, array) => {
    let j = Math.floor(Math.random() * (indx + 1)); 
    [array[indx], array[j]] = [array[j], array[indx]];
  })
}


/**
Получить средний возраст
важность: 4
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arrAge = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// >>>>>>>>> решение
*/
 function getAverageAge(arr){
  let ageSum = 0;
  arr.forEach(i => ageSum += i.age);
  return (+ageSum / arr.length)
}

/**
 Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  /* ваш код 
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
Открыть песочницу с тестами для задачи.

 >>>>>>>> решение
*/
function uniqueSet(arr){
 return [...new Set(arr)]
}
function unique(arr){
  const uniqueArr = [];
  arr.forEach(i => {
    if (uniqueArr.includes(i)) return;
    uniqueArr.push(i)
  })
}

/**
Создайте объект с ключами из массива
важность: 4
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

Например:


let usersById = groupById(users);

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Такая функция очень удобна при работе с данными, которые приходят с сервера.

В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.

Используйте метод .reduce в решении.

Открыть песочницу с тестами для задачи.
*/

// >>>>>>>>> решение
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


function groupById(arr) {
  const obj = {};
  arr.forEach( i => obj[i.id] = i );
  return obj;
}

function groupByIdReduce(arr) {
  return arr.reduce( (acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {});
}
console.log(groupByIdReduce(users))