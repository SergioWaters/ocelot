'use strict'

/**
 * Дочерние элементы в DOM
важность: 5
Для страницы:

<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>
Напишите код, как получить…

элемент <div>?
<ul>?
второй <li> (с именем Пит)?
>>>>>>>>   решение
*/
const markup = '<div>Пользователи:</div><ul><li>Джон</li><li>Пит</li></ul>';
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', markup);

const div = document.body.firstElementChild;
const ul = document.body.childNodes[1];
const liPit = ul.lastElementChild;


/**
Вопрос о соседях
важность: 5
Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ?

  >>>>>>>  решение

1 - Да. Верно. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
2 - Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
*/


/**
Выделите ячейки по диагонали
важность: 5
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
Должно получиться так:


Открыть песочницу для задачи.

решение
 */
const tableMK = `<table>
                  <tr>
                    <td>1:1</td>
                    <td>2:1</td>
                    <td>3:1</td>
                    <td>4:1</td>
                    <td>5:1</td>
                  </tr>
                  <tr>
                    <td>1:2</td>
                    <td>2:2</td>
                    <td>3:2</td>
                    <td>4:2</td>
                    <td>5:2</td>
                  </tr>
                  <tr>
                    <td>1:3</td>
                    <td>2:3</td>
                    <td>3:3</td>
                    <td>4:3</td>
                    <td>5:3</td>
                  </tr>
                  <tr>
                    <td>1:4</td>
                    <td>2:4</td>
                    <td>3:4</td>
                    <td>4:4</td>
                    <td>5:4</td>
                  </tr>
                  <tr>
                    <td>1:5</td>
                    <td>2:5</td>
                    <td>3:5</td>
                    <td>4:5</td>
                    <td>5:5</td>
                  </tr>
                  </table>`

ul.insertAdjacentHTML('afterend', tableMK);
const table = document.body.childNodes[2];

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}