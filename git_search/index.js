/**
 * 5. (для выполнения сделайте сперва задание из п3 текущего дз) Написать блок с поиском репозиториев github по подстроке
Документация по работе с API здесь:
https://docs.github.com/en/rest/search?apiVersion=2022-11-28
- поле ввода (для подстроки поиска)
-- если символов недостаточно, то сообщение об ошибке
- форма срабатывает по кнопке или по enter
- список с результатами (достаточно выводить только первые 10 найденных репозиториев)
-- внешний вид
--- выводить название и еще пару полей на ваше усмотрение
--- название по совместительству должно быть ссылкой на соответвующий git репозиторий
--- ссылка должна открываться в новой вкладке браузера
--- требований по классности внешнего вида нет - просто аккуратно
-- дополнительно
--- изначально пустой список
--- если по запросу ничего не найдено, то вместо списка сообщение "Ничего не найдено"
 */

// get main el
const mainEl = document.querySelector('#wrapper');
mainEl.classList.add('container', 'wrapper');

// create form
const formEl = document.createElement('form');
formEl.classList.add('search-form');
formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('keydown', (e) => {
  if(e.key === 'enter') handleFormSubmit(e)
})
formEl.addEventListener('input', handleChange);
mainEl.appendChild(formEl);

// create input
const inputEl = document.createElement('input');
inputEl.setAttribute('name', 'searchline')
inputEl.classList.add('search-input');
formEl.appendChild(inputEl);

// create submit button
const submitBtnEl = document.createElement('button');
submitBtnEl.setAttribute('type', 'submit');
submitBtnEl.classList.add('search-button');
submitBtnEl.innerText = 'Search';
formEl.appendChild(submitBtnEl);

// create error block
const errorEl = document.createElement('div');
errorEl.classList.add('form-error');
formEl.appendChild(errorEl);

// create results list
const listEl = document.createElement('ul');
listEl.classList.add('results-list');
mainEl.appendChild(listEl)

// handle form submit
async function handleFormSubmit(e){
  e.preventDefault(); //prevent reload
  renderError('Connecting...')
  const formData = Object.fromEntries(new FormData(e.target));
  if(!formData.searchline) return renderError('Write a search line first...')
  await fetch(`https://api.github.com/search/repositories?q=${formData.searchline}&sort=stars&per_page=10`)
    .then(r =>r.json())
    .then(r => renderResults(r))
    .catch(e => renderError('got error - ' + e.message))
}

function renderResults(results){
  listEl.innerHTML = '';
  renderError('');
  if(!results.items.length) return renderError('Nothing is found...');
  results.items.forEach(item => {
    listEl.insertAdjacentHTML('afterbegin', createResultMarkup(item))
  });
}

function createResultMarkup(res){
  return `
          <li class="list__item">
            <a href="${res?.html_url}" class="item_link" target="_blanc" rel="noreferrer">${res?.name}</a>
            <p class="item_language">language: ${res.language ?? 'is unknown'}</p>
            <p class="item_description">${res.description ?? 'no description'}</p>
          </li>`
}

function renderError(error){
  errorEl.innerText = error;
}

function handleChange(e){
  e.preventDefault();
  renderError('');
}