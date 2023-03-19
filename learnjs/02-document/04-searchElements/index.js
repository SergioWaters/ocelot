'use strict'
/**
 * Поиск элементов
важность: 4
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.

   >>>>>>>>>  решение
**/

// 1. Таблица с `id="age-table"`.
const table = document.getElementById('age-table')
const anothertable = document.querySelector('table#age-table')

// 2. Все label в этой таблице
table.getElementsByTagName('label')
document.querySelectorAll('#age-table label')
table.querySelectorAll('label')

// 3. Первый td в этой таблице
table.rows[0].cells[0]
table.getElementsByTagName('td')[0]
table.querySelector('td')

// 4. Форма с name="search"
const form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')
const searchForm = document.forms.search
console.log(searchForm)

// 5. Первый input в этой форме
form.getElementsByTagName('input')[0]
form.querySelector('input')
form.elements[0]

// 6. Последний input в этой форме
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]
