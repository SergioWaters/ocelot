'use strict'
// 4. (для выполнения сделайте сперва задание из п2 текущего дз) Реализовать блок с комментариями. В качестве "макета" можете использовать любой сайт, с комментариями, который вам нравится. Требований по внешнему виду нет. Ключевое, чтобы более менее аккуратно смотрелось (не было "слипшегося текста" или наоборот космических отступов)
// Блок содержит:
// - форму добавления комменатрия
// -- имя
// -- текст
// -- возможность указать дату или отсавить ее пустой
// --- если не задано, то дата текущая
// --- время задавать не надо
// --- формат можете выбрать любой
// -- кнопка отправки
// - форма должна срабатывать в том чсиле при нажатии на кнопку enter
// - добавить валидацию (какие именно ограничения - на свое усмотрение). Если форма заполнена некорректно (например, имя пустое), то рядом с полем сообщение об ошибке
// -- когда в поле начинаем печатать, то ошибка исчезает
// Список комментариев. У каждого комментария
// - имя
// - текст
// - дата, время добавления
// -- если текущая дата, пишем "сегодня, 16:23" (ключевое - слово сегодня, время подставляется)
// -- если вчерашняя дата, пишем "вчера, 18:39"
// - кнопка удаления комментария (иконка корзины) - при нажатии комментарий удаляется
// - сердечко лайка - при нажатии выставляется или убирается лайк

// get main el
const mainEl = document.querySelector('#wrapper');
mainEl.classList.add('container', 'wrapper');

// create form
const formEl = document.createElement('form');
formEl.classList.add('send-form');
formEl.addEventListener('submit', handleFormSubmit);
formEl.addEventListener('keydown', (e) => {
  if(e.key === 'enter') handleFormSubmit(e)
})
formEl.addEventListener('input', handleChange);
mainEl.appendChild(formEl);

const textDiv = document.createElement('div');
formEl.appendChild(textDiv);

// create inputs
const textInputEl = document.createElement('input');
textInputEl.setAttribute('name', 'text');
textInputEl.setAttribute('type', 'text-area');
textInputEl.classList.add('text-input');
textInputEl.placeholder = 'Your message';
textDiv.appendChild(textInputEl);

// create submit button
const submitBtnEl = document.createElement('button');
submitBtnEl.setAttribute('type', 'submit');
submitBtnEl.classList.add('send-button');
submitBtnEl.innerText = 'Send';
textDiv.appendChild(submitBtnEl);

// options
const optionsDiv = document.createElement('div');
formEl.appendChild(optionsDiv);

const nameInputEl = document.createElement('input');
nameInputEl.setAttribute('name', 'author');
nameInputEl.setAttribute('type', 'text');
nameInputEl.classList.add('name-input');
nameInputEl.placeholder = 'Put your name here';
optionsDiv.appendChild(nameInputEl);

const dateInputEl = document.createElement('input');
dateInputEl.setAttribute('name', 'date');
dateInputEl.setAttribute('type', 'date');
dateInputEl.classList.add('date-input');
dateInputEl.placeholder = 'Your message';
optionsDiv.appendChild(dateInputEl);


// create error block
const errorEl = document.createElement('div');
errorEl.classList.add('form-error');
formEl.appendChild(errorEl);

// create results list
const listEl = document.createElement('ul');
listEl.classList.add('comments-list');
mainEl.prepend(listEl);

//storage for messages
const messages = {
  1: {
    author: "Author",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, esse",
    date: 1678384172520,
    id: 1
  },
  2: {
    author: "Another author",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi aliquam ratione quasi, esse ex enim ad aperiam dolores. Ducimus, unde.",
    date: 1678384172500,
    id: 2
  }   
};

// handle form submit
function handleFormSubmit(e){
  e.preventDefault(); //prevent reload
  const formData = Object.fromEntries(new FormData(e.target));

  if(!formData.author) return renderError('Author required...');
  if(!formData.text) return renderError('Message text is empty...');

  const mess = {
    author: formData.author,
    text: formData.text,
    date: formData.date || Date.now(),
    id: Math.ceil(Date.now() * Math.random()),
    isLiked: false
  }

  messages[mess.id] = mess;
  renderMessages(Object.values(messages));
  formEl.reset()
  
}

/**
 * 
 * @param {array <Object>} messagesArr 
 * @returns 
 */
function renderMessages(messagesArr){
  renderError('');
  listEl.innerHTML = '';

  if(!messagesArr.length) return renderError('No messages right now...');

  messagesArr.forEach(async (mess) => {
    const messMarkup = createMessMarkup(mess);
    const messEl = document.createElement('li');
    messEl.classList.add('list__item');
    messEl.id = mess.id;
    messEl.innerHTML = messMarkup;
    messEl.addEventListener('click', (e) => handleMessClick(e, mess.id))
    listEl.prepend(messEl);
  });
}

function createMessMarkup(mess){
  return `
          <p class="item_author">${mess.author}</p>
          <p class="item_text">${mess.text}</p>
          <p class="item_date">${getDate(mess.date)}</p>
          <button class="item_delete" data-id="${mess.id}"> 
          <svg width="21" height="18" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M0 281.296l0 -68.355q1.953 -37.107 29.295 -62.496t64.449 -25.389l93.744 0l0 -31.248q0 -39.06 27.342 -66.402t66.402 -27.342l312.48 0q39.06 0 66.402 27.342t27.342 66.402l0 31.248l93.744 0q37.107 0 64.449 25.389t29.295 62.496l0 68.355q0 25.389 -18.553 43.943t-43.943 18.553l0 531.216q0 52.731 -36.13 88.862t-88.862 36.13l-499.968 0q-52.731 0 -88.862 -36.13t-36.13 -88.862l0 -531.216q-25.389 0 -43.943 -18.553t-18.553 -43.943zm62.496 0l749.952 0l0 -62.496q0 -13.671 -8.789 -22.46t-22.46 -8.789l-687.456 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 62.496zm62.496 593.712q0 25.389 18.553 43.943t43.943 18.553l499.968 0q25.389 0 43.943 -18.553t18.553 -43.943l0 -531.216l-624.96 0l0 531.216zm62.496 -31.248l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm31.248 -718.704l374.976 0l0 -31.248q0 -13.671 -8.789 -22.46t-22.46 -8.789l-312.48 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 31.248zm124.992 718.704l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm156.24 0l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224z"/></svg>
          </button>
          <button class="item_like ${!!mess.isLiked ? 'liked' : ''}" data-id="${mess.id}"> 
            <svg width="21" height="18" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9686 5.77107C19.6912 3.00626 17.5306 1.00033 14.8266 1.00033C13.0251 1.00033 11.3757 1.87836 10.4475 3.28559C9.5278 1.86016 7.94595 1 6.17336 1C3.4697 1 1.30868 3.00593 1.0317 5.77074C1.00978 5.89286 0.919889 6.53558 1.19321 7.58372C1.58712 9.09552 2.49699 10.4706 3.82378 11.5595L10.4431 17.0001L17.1761 11.5598C18.5029 10.4706 19.4128 9.09586 19.8067 7.58372C20.08 6.53591 19.9902 5.89319 19.9686 5.77107ZM19.0953 7.43214C18.7357 8.81289 17.9022 10.0709 16.6872 11.0677L10.4475 16.1098L4.31489 11.069C3.09772 10.0702 2.26459 8.81256 1.90466 7.43181C1.64595 6.43993 1.75229 5.87962 1.75265 5.87598L1.75813 5.84255C1.99565 3.42028 3.85229 1.66191 6.17336 1.66191C7.88602 1.66191 9.39369 2.61507 10.1092 4.14905L10.4457 4.87153L10.7822 4.14905C11.4864 2.63857 13.0737 1.66224 14.8269 1.66224C17.1476 1.66224 19.0046 3.42062 19.2469 5.87433C19.2476 5.87962 19.354 6.44026 19.0953 7.43214Z" stroke-width="0.75"/>
            </svg>
          </button>
          `
}

function handleMessClick(e, id){
  const cl = e.target.classList;
  console.log(cl, id, e)
  if(e.target.classList.contains('item_delete')) {
    console.log('delete emited - ')
    deleteMessage(id);
  }
  if(e.target.classList.contains('item_like')) likeMessage(id);
}

function likeMessage(id){
  messages[id].isLiked = !messages[id].isLiked;
  renderMessages(Object.values(messages));
}

function deleteMessage(id){
  delete messages[id];
  renderMessages(Object.values(messages));
}

function renderError(error){
  errorEl.innerText = error;
}

function getDate(dateString){

  const today = new Date();
  const d = new Date(dateString);
  const addZero = (str) => ('0' + str).slice(-2);

  const date = d.getDate();
  const month = d.getMonth() + 1;
  const hours = d.getHours();
  const minutes = d.getMinutes();

  const hhmm = `${addZero(hours)}:${addZero(minutes)}`
  const ddmm = `${addZero(date)}.${addZero(month)}, `;
  
  if(month !== (today.getMonth() + 1)) return ddmm + hhmm;

  const diff = d.getDate() - today.getDate();
  switch(diff) {
    case 0: return "today, " + hhmm;
    case -1: return "yesterday, " + hhmm;
    case -2: return "two days ago, " + hhmm;
    default: return ddmm + hhmm;
  }
}

function handleChange(e){
  e.preventDefault();
  renderError('');
}

renderMessages(Object.values(messages))