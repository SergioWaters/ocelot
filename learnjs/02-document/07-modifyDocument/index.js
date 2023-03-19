'use strict'
/**
 * createTextNode vs innerHTML vs textContent
важность: 5
У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text


  >>>>>>>> решение
// 1, 3.
*/


/**
Очистите элемент
важность: 5
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

<ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol>

<script>
  function clear(elem) { }

  clear(elem); // очищает список
</script>


  >>>>>>>>> решение
*/
function clear(elem) {
  elem.innerHTML = '';
}

  
  /**
  Почему остаётся "aaa"?
  важность: 1
  В примере ниже вызов table.remove() удаляет таблицу из документа.
  
  Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
  
  Почему так происходит?
  
  <table id="table">
    aaa
    <tr>
      <td>Тест</td>
    </tr>
  </table>
  
  <script>
    alert(table); // таблица, как и должно быть
  
    table.remove();
    // почему в документе остался текст "ааа"?
  </script>


  >>>>>>>> решение
  // HTML  код в примере - не верный.
  // <table> не может содержать внитри ничего кроме tr и td
  // при скрининге, браузер просто вынес текст за пределы table
  */


  /**  
  Создайте список
  важность: 4
  Напишите интерфейс для создания списка.
  
  Для каждого пункта:
  
  Запрашивайте содержимое пункта у пользователя с помощью prompt.
  Создавайте элемент <li> и добавляйте его к <ul>.
  Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
  Все элементы должны создаваться динамически.
  
  Если пользователь вводит HTML-теги, они должны обрабатываться как текст.
  
>>>>>>>>>>>  решение
*/
function listItemGenerator(){

  const ul = document.createElement('ul')
  document.body.appendChild(ul)

  let pr = prompt('create list item', '')

  while(!!pr){
    const li = document.createElement('li');
    li.textContent = pr;

    ul.appendChild(li)

    pr = prompt('create list item', '')
  }
}
  
  
/**
Создайте дерево из объекта
  важность: 5
  Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
  
  Например:
  
  let data = {
    "Рыбы": {
      "форель": {},
      "лосось": {}
    },
  
    "Деревья": {
      "Огромные": {
        "секвойя": {},
        "дуб": {}
      },
      "Цветковые": {
        "яблоня": {},
        "магнолия": {}
      }
    }
  };
  Синтаксис:
  
  let container = document.getElementById('container');
  createTree(container, data); // создаёт дерево в контейнере
  
  решение
  */
  function createTree(obj) {
    document.append(createTreeDom(obj));
  }

  function createTreeDom(obj) {
    if (!Object.keys(obj).length) return;

    const ul = document.createElement('ul');

    for (let key in obj) {
      const li = document.createElement('li');
      li.innerHTML = key;

      const childrenUl = createTreeDom(obj[key]);
      if (!!childrenUl) {
        li.append(childrenUl);
      }

      ul.append(li);
    }

    return ul;
  }


  /**
  Выведите список потомков в дереве
  важность: 5
  Есть дерево, организованное в виде вложенных списков ul/li.
  
  Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
  
  Результат:
  
  
  Открыть песочницу для задачи.
  
  >>>>>>>>> решение
  */

  function listChilds(){
    const liArr = document.getElementsByTagName('li');

    liArr.forEach(li => {
      const amount = li.getElementsByTagName('li').length;
      if (!amount) return;

      li.firstChild.data += ' [' + amount + ']';
  })
  }


  /**
  Создайте календарь в виде таблицы
  важность: 4
  Напишите функцию createCalendar(elem, year, month).
  
  Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.
  
  Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.
  
  Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:
  
  P.S. В этой задаче достаточно сгенерировать календарь, кликабельным его делать не нужно.
  
  Открыть песочницу для задачи.
  
   >>>>>>>>  решение
*/
function createCalendar(elem, year, month) {

  const mon = month - 1; 
  const d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + ('00'+ d.getDate()).slice(-2) + '</td>';

    if (getDay(d) % 7 == 6) { 
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { 
  const day = date.getDay()
  return day === 0 
         ? 7
         : day
}

const calendar = document.createElement('div');
document.body.appendChild(calendar);

createCalendar(calendar, 2012, 9);


/**
  Цветные часы с использованием setInterval
  важность: 4
  Создайте цветные часы как в примере ниже:
  
  
  Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.
  
  Открыть песочницу для задачи.
  
  решение
*/
document.querySelector('.start').addEventListener('click', refClocks)

function getTime(){
  const d = new Date();
  return  {
    hh: ('00' + d.getHours()).slice(-2),
    mm: ('00' + d.getMinutes()).slice(-2),
    ss: ('00' + d.getSeconds()).slice(-2)
  }
}

function refClocks(){
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  const interval = setInterval(() => {
    const time = getTime()
    hours.textContent = time.hh;
    minutes.textContent = time.mm;
    seconds.textContent = time.ss;
  }, 1000)

  document.querySelector('.stop').addEventListener('click', () => clearInterval(interval))

}


  /**
  Вставьте HTML в список
  важность: 5
  Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
  
>>>>>>>>  решение
  */
const ul = `<ul id="ul">
              <li id="one">1</li>
              <li id="four">4</li>
            </ul>`
document.body.insertAdjacentHTML('afterbegin', ul);
document.querySelector('#one').insertAdjacentHTML("afterend", '<li id="two">2</li><li id="three">3</li>');


  /**
  Сортировка таблицы
  важность: 5
  Вот таблица:
  
  <table>
  <thead>
    <tr>
      <th>Name</th><th>Surname</th><th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td><td>Smith</td><td>10</td>
    </tr>
    <tr>
      <td>Pete</td><td>Brown</td><td>15</td>
    </tr>
    <tr>
      <td>Ann</td><td>Lee</td><td>5</td>
    </tr>
    <tr>
      <td>...</td><td>...</td><td>...</td>
    </tr>
  </tbody>
  </table>
  В ней может быть больше строк.
  
  Напишите код для сортировки по столбцу "name".
  
  Открыть песочницу для задачи.
  
>>>>>>>>> решение
 */
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

table.tBodies[0].append(...sortedRows);