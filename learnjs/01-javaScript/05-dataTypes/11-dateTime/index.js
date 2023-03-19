'use strict'
/**
 * Создайте дату
важность: 5
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.

решение
Конструктор new Date стандартно использует местную временную зону. Единственная важная вещь, которую нужно запомнить – это то, что месяцы начинаются с нуля.

Поэтому февраль обозначается числом 1.

let d = new Date(2012, 1, 20, 3, 12);
alert( d );

Покажите день недели
важность: 5
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

Например:

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"

>>>>>>> решение
*/
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}


/**
День недели в европейской нумерации
важность: 5
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

решение
*/
function getLocalDay(date) {
  let day = date.getDay();

  return day ? day : 7
}


/**
Какой день месяца был много дней назад?
важность: 4
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:


alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.

Открыть песочницу с тестами для задачи.

>>>>>>>>>> решение
*/
const d = new Date(2015, 0, 2);
const ago = 365;

function getDateAgo(date = d, days = ago) {
  let start = new Date(date);

  start.setDate(date.getDate() - days);
  return start;
}


/**
Последнее число месяца?
важность: 5
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

Открыть песочницу с тестами для задачи.

>>>>>>>>> решение
**/
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

/**
Сколько сегодня прошло секунд?
важность: 5
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

>>>>>>>>>>>> решение
*/
function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000); 
}


/**
Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

решение
*/
function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now; 
  return Math.round(diff / 1000); 
}


/**
Форматирование относительной даты
важность: 4
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
Открыть песочницу с тестами для задачи.

>>>>>>>>>> решение
*/
const addZero = (date) => ('00' + date).slice(-2);

function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) return 'прямо сейчас';
  if (diff < 60 * 1000) return Math.floor(diff / 1000) + ' сек. назад';
  if (diff < 60 * 60 * 1000) return Math.floor(diff / 60000) + ' мин. назад';
  const d = {
    dd: addZero(date.getDate()),
    mm: addZero((date.getMonth() + 1)),
    year: date.getFullYear(),
    hours: addZero(date.getHours()),
    minutes: addZero(date.getMinutes())
  }
  return `${d.dd}.${d.mm}.${d.year}  ${d.hours}:${d.minutes}`
}
console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата