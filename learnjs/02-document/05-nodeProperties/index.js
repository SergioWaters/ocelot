'use strict'
/**
 * Считаем потомков
важность: 5
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
Демо в новом окне

 >>>>>>>>> решение
*/
const ulChilds = [];
document.querySelectorAll('li').forEach(li => {

   const text = li.firstChild.data.trim()
   const childs = li.getElementsByTagName('li').length

   ulChilds.push( { [text]: childs} )
})


/**
Что содержит свойство nodeType?
важность: 5
Что выведет этот код?

<html>

<body>
  <script>
    alert(document.body.lastChild.nodeType);
  </script>
</body>

</html>
 >>>>>>>>>> решение

 >>>>>>>  1  <<<<<<<<
*/



/**
Тег в комментарии
важность: 3
Что выведет этот код?

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>
  >>>>>>>>>> решение

  Происходящее по шагам:

 - Заменяем содержимое <body> на комментарий. Он будет иметь вид <!--BODY-->, т.к. body.tagName == "BODY". Как мы помним, свойство tagName в HTML всегда находится в верхнем регистре.
 - Этот комментарий теперь является первым и единственным потомком body.firstChild.
 - Значение свойства data для элемента-комментария – это его содержимое (внутри <!--...-->): "BODY".

 alert выведет 'BODY'
*/



/**
Где в DOM-иерархии "document"?
важность: 4
Объектом какого класса является document?

Какое место он занимает в DOM-иерархии?

Наследует ли он от Node или от Element, или может от HTMLElement?

решение

document - HTMLDocument

HTMLDocument <- Document <- Node
*/

