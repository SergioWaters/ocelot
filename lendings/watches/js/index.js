// get favourites icon
document
  .querySelectorAll('.heart')
  .forEach(i => i.addEventListener(
    'click', () => i.classList.toggle('heart-checked')
  ));

//get dropdown
document
  .querySelectorAll('.dropdown')
  .forEach(i => i.addEventListener(
    'click', dropdownClickHandler));

//dropdown clickhandler
function dropdownClickHandler(e) {
  const t = e.target;
  const parent = e.target.parentNode;
  if (t.className === 'dropdown-selected') {
    const icon = document.createElement('i');
    parent.querySelector('ul').classList.toggle('hidden');
    parent.querySelectorAll('li')
      .forEach(item => {
        item.querySelector('i')?.remove();
        if (item.textContent === t.textContent) {
          item.appendChild(icon)
        }
      })
  };
  if (t.className === 'dropdown-list-item') {
    parent.classList.add('hidden');
    const selected = parent.parentNode.querySelector('.dropdown-selected');
    selected.textContent = t.textContent;
  }
}

//burger
const burger = document.querySelector('.burgerbtn');
burger.addEventListener('click', burgerClickHandler);

function burgerClickHandler() {
  const nav = document.querySelector('.nav_menu');
  burger.querySelector(".bars").classList.toggle('open');
  nav.classList.toggle('open');
}