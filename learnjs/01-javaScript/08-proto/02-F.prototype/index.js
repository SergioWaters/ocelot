'use strict'
/**
 * Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?
…А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?
Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?
Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?
решение
*/



/**
Создайте новый объект с помощью уже существующего
важность: 5
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

>>>>>>>>>>>>> решение
*/

function Obj(prop){
  this.property = prop;
}

const obj = new Obj('property');
const inhObj = new obj.constructor('property2');

console.log(obj.property, inhObj.property);
// так всё работает

function NotWork(prop){
  this.property = prop;
}
NotWork.prototype = {}

const notWork = new NotWork('property');
const inhNotWork = new notWork.constructor('property2');

console.log(notWork.property, inhNotWork.property); 
// а здесь конструктор notWork === Object
// потому что у NotWork прототип - нативный Object