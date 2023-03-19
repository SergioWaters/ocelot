'use strict'
/**
 * Скопирован ли массив?
Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?
*/
// решение <<<<
// fruits.length = 4;



/**
 * Операции с массивами
Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
 */

// решение <<<<
function stylesWrapper(){

let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push("Rock'n'Roll");
console.log(styles);

styles[Math.ceil(styles.length / 2) - 1] = 'Classics';
console.log(styles);

const first = styles.shift(0);
console.log(first, styles);

styles = ['Rap', 'Reggie', ...styles];
console.log(styles);
}


/**
 * Вызов в контексте массива
Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
 */

// решение <<<<
'a,b,function(){alert( this );}'


/**
 * Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 */

// решение <<<<
function sumInput(){
  const arr = [];
  let val;

  while( val !== null && val !== ''){

    val = prompt('put number');
    
    if( parseInt(val) ) arr.push(+val);

  }

  arr.length ?
  console.log(arr.reduce((acc, item) => acc + item)) :
  console.log('no values')
}



/**
 * Подмассив наибольшей суммы
важность: 2
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
 */

// решение <<<<
function getMaxSubSum(arr){
  let max = null;
  let curr = null;

  arr.forEach(i => {
    curr = +curr + +i;
    max = max > curr ? max : curr;
    curr = curr > 0 ? curr : 0;
  })

  console.log(max)
}