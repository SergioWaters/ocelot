'use strict'
/**
 * Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.
решение
*/
function printNumbers(from, to) {
  let current = from;

  let timerId = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}

function printNumbersRec(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}


/**
Что покажет setTimeout?
важность: 5
В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
>>>>>>> решение
Любой вызов setTimeout будет выполнен только после того, как текущий код завершится.

Последним значением i будет: 100000000.
*/

let i = 0;

setTimeout(() => alert(i), 100); // 100000000

for (let j = 0; j < 100000000; j++) {
  i++;
}