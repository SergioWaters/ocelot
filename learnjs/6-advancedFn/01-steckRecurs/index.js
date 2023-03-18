'use strict'
/**
 * Вычислить сумму чисел до данного
важность: 5
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

Например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
Пример работы вашей функции:

function sumTo(n) { /*... ваш код ...  }

alert( sumTo(100) ); // 5050
P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

// решение <<<<
*/
//cycle
function sumToCycle(n) { 
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log('cycle - ', sumToCycle(100) );

//recursion
function sumToRecur(n) { 
  if (n == 1) return 1;
  return n + sumToRecur(n - 1);
}
console.log('recursion - ', sumToRecur(100) );

//form
function sumToForm(n) { 
  return n * (n + 1) / 2;
}
console.log('formula - ', sumToForm(100) );

// решение по формуле работает быстрее всех

// sumTo(100000) будет ошибка: максимальный размер стека превышен

/**
 * Вычислить факториал
важность: 4
Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

Определение факториала можно записать как:

n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

решение
 */
function factorial(n) {
  return !!n ? n * factorial(n - 1) : 1;
}


/**
 * Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы:

function fib(n) { /* ваш код }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

решение
 */
function fibRec(n) {
  return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
}

function fibCycle(n){
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log('fibonacci cycle', fibCycle(77) );


/**
 * Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без?

>>>>>>>>> решение
 */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// cycle
function printList(list) {
  let val = list;

  while (!!val) {
    console.log('cycle - ', val.value);
    val = val.next;
  }

}
printList(list);

// recursion
function printListRec(list) {
  console.log('recursion - ', list.value);

  if (list.next) {
    printListRec(list.next); 
  }

}
printListRec(list);


/**
 * Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию.
 */
function printReverseListRec(list) {

  if (list.next) {
    printReverseListRec(list.next);
  }

  console.log('rec reverse - ', list.value);
}

printReverseListRec(list);

// cycle
function printReverseList(list) {
  const arr = [];
  let val = list;

  while (val) {
    arr.push(val.value);
    val = val.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log('cycle reverse - ', arr[i] );
  }
}

printReverseList(list);