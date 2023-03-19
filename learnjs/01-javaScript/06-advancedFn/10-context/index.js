'use strict'
/**
 * Связанная функция как метод
Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
>>>>>>>>решение
*/
function f() {
  alert( this );
}

let user1 = {
  g: f.bind(null)
};

user1.g(); 
/**
 * функция запустит alert с сообщением null
 * null в роли this привязан к функции при создании объекта user1
 */

/**
Повторный bind
важность: 5
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
>>>>>>>>> решение
*/
function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f();
/**
 * функция запустит alert с сообщением Вася
 * использовать цепочку вызовов .bind() нет смысла
 * применится только первая привязка
*/


/**
Свойство функции после bind
важность: 5
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?
>>>>>>> решение
*/
/**
 * sayHi и bound - разные объекты и у bound нет свойства test
 * результат будет - undefined
 */



/**
Исправьте функцию, теряющую "this"
важность: 5
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
>>>>>>>> решение
*/
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));
/**
 * мы передали изначально только методы объекта,
 * потеряв при этом контекст самого объекта.
 * использовав .bind(), мы вернули объект user2 как контекст
 */



/**
Использование частично применённой функции для логина
важность: 5
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?



askPassword(?, ?); // ?
Ваши изменения должны затрагивать только выделенный фрагмент кода.

>>>>>>> решение
*/
let user3 = {
  name: 'John',
  
  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

askPassword(user3.login.bind(user3, true), user3.login.bind(user3, false));
/**
 * можно использовать тот же .bind() для метода user3.login
 * и передавать в качестве аргумента true и false для ok и fail соответственно
 */
