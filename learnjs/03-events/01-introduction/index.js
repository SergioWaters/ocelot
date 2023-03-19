'use strict'
const wrapper = document.querySelector('.wrapper')
const tasks = wrapper.querySelectorAll('div.task');

tasks.forEach((task, indx)=>  {
  task.insertAdjacentHTML('afterBegin', `<h2> Задание ${indx + 1}</h2>`);
  task.style.minHeight = 200 + 'px';
})


/**
 * Скрыть элемент по нажатию кнопки
важность: 5
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

решение
*/
const textDiv = document.createElement('div');
textDiv.textContent = 'text'

const button = document.createElement('button');
button.textContent = 'hide';
button.addEventListener('click', () => textDiv.hidden = !textDiv.hidden)

tasks[0].append(button, textDiv)

/**
Спрятать себя
важность: 5
Создайте кнопку, которая будет скрывать себя по нажатию.

Например: 

решение
*/
const button2 = document.createElement('button');
button2.textContent = 'hide';
button2.addEventListener('click', () => button2.hidden = true)

tasks[1].append(button2)


/**
Какой обработчик запустится?
важность: 5
В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);
решение
*/
const solutionDiv = document.createElement('div');
solutionDiv.textContent = 'сработают первый и третий обработчики - 1 и 2'
tasks[2].append(solutionDiv)

// 1 & 2


/**
Передвиньте мяч по полю
важность: 5
Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:


Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
Открыть песочницу для задачи.

решение
*/
const fieldDiv = document.createElement('div');
const ball = document.createElement('div');

fieldDiv.id = 'field';
ball.id = 'ball';

tasks[3].append(fieldDiv)
fieldDiv.append(ball)

fieldDiv.addEventListener('click', (e) => {
  const fieldXY = fieldDiv.getBoundingClientRect();
  const ballCenter = {
    x: ball.offsetWidth / 2, 
    y: ball.offsetHeight / 2
  };
  ball.style.left = Math.round(e.clientX - fieldXY.left - ballCenter.x) + 'px';
  ball.style.top = Math.round(e.clientY - fieldXY.top - ballCenter.y) + 'px';
})

/**
Создать раскрывающееся меню
важность: 5
Создать меню, которое по нажатию открывается либо закрывается:

>>>>>>>>> решение
*/
const menu = document.createElement('div');
menu.innerHTML = `<li>Пирожное</li><li>Пончик</li><li>Мёд</li>`;
menu.hidden = true;

const menuBtn = document.createElement('button');
menuBtn.textContent = '▶ Сладости (нажми меня)!';

menuBtn.addEventListener('click', () => {
  menu.hidden = !menu.hidden;
  menu.hidden ? 
  menuBtn.textContent = '▶ Сладости (нажми меня)!' :
  menuBtn.textContent = '▼ Сладости (нажми меня)!'
})

tasks[4].append(menuBtn, menu);

/**
Добавить кнопку закрытия
Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
Результат должен выглядеть, как показано здесь:

решение
*/

const closeBtn = document.createElement('button');
closeBtn.classList.add("remove-button");
closeBtn.textContent = '[x]'

tasks[5].insertAdjacentHTML('beforeend', `<div class="pane">
                                            <h3>Лошадь</h3>
                                            <p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
                                          </div>
                                          <div class="pane">
                                            <h3>Осёл</h3>
                                            <p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
                                          </div>
                                          <div class="pane">
                                            <h3>Кошка</h3>
                                            <p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
                                          </div>`)

const messArr = tasks[5].querySelectorAll('.pane');
messArr.forEach(m => {
  m.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>')
  m.firstChild.addEventListener('click', () => m.remove())
});


/**
Карусель
важность: 4
Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.

P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.

решение
*/
/* конфигурация */
const width = 130; // ширина картинки
const count = 3; // видимое количество изображений

const list = carousel.querySelector('ul');
const listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};