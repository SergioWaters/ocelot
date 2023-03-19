'use strict'

/**
 * Получите атрибут
важность: 5
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

</body>
</html>

>>>>>>>  решение
*/
const div = document.querySelector('div[data-widget-name]')
const attr = div.dataset.widgetName;
const attr2 = div.getAttribute('data-widget-name');
console.log(attr, attr2)


/**
  Сделайте внешние ссылки оранжевыми
  важность: 3
  Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.
  
  Ссылка является внешней, если:
  
  Её href содержит ://
  Но не начинается с http://internal.com.
  Пример:
  
  <a name="list">the list</a>
  <ul>
    <li><a href="http://google.com">http://google.com</a></li>
    <li><a href="/tutorial">/tutorial.html</a></li>
    <li><a href="local/path">local/path</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="http://nodejs.org">http://nodejs.org</a></li>
    <li><a href="http://internal.com/test">http://internal.com/test</a></li>
  </ul>
  
  <script>
    // добавление стиля для одной ссылки
    let link = document.querySelector('a');
    link.style.color = 'orange';
  </script>
  
  >>>>>>>>> решение
 */

  const links = document.querySelectorAll('a');

  links.forEach( link => {

    const href = link.href;

    console.log(href)

    if (!href && !href.includes('://')) return;
    
    if (href.startsWith('http://internal.com') || 
        href.startsWith('http://127.0.0') ||
        href.startsWith('localhost')) return;

    link.style.color = 'orange';  
  })