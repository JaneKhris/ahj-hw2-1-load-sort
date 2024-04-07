import data from './data';

const table = document.querySelector('.films').querySelector('tbody');
const trArray = [];
const sortArray = document.querySelectorAll('.sort');
let i = 0;

data.forEach((item) => {
  const str = document.createElement('tr');
  Object.entries(item).forEach(([key, value]) => {
    str.setAttribute(`data-${key}`, value);
    if (key === 'year') {
      str.innerHTML += `<td>(${value})</td>`;
    } else if (key === 'imdb') {
      str.innerHTML += `<td>imdb:${value.toFixed(2)}</td>`;
    } else {
      str.innerHTML += `<td>${value}</td>`;
    }
  });
  trArray.push(str);
});

trArray.forEach((item) => {
  table.appendChild(item);
});

function sortNumberUp(array, param) {
  array.sort((a, b) => b.dataset[param] - a.dataset[param]);
  document.querySelector(`.head_${param}`).querySelector('.sort').textContent = '↑';
}

function sortNumberDown(array, param) {
  array.sort((a, b) => a.dataset[param] - b.dataset[param]);
  document.querySelector(`.head_${param}`).querySelector('.sort').textContent = '↓';
}

function getSortedArray(k) {
  switch (k) {
    case 0:
      sortNumberDown(trArray, 'id');
      break;

    case 1:
      sortNumberUp(trArray, 'id');
      break;

    case 2:
      trArray.sort((a, b) => (a.dataset.title > b.dataset.title ? 1 : -1));
      document.querySelector('.head_title').querySelector('.sort').textContent = '↓';
      break;

    case 3:
      trArray.sort((a, b) => (a.dataset.title < b.dataset.title ? 1 : -1));
      document.querySelector('.head_title').querySelector('.sort').textContent = '↑';
      break;

    case 4:
      sortNumberDown(trArray, 'imdb');
      break;

    case 5:
      sortNumberUp(trArray, 'imdb');
      break;

    case 6:
      sortNumberDown(trArray, 'year');
      break;

    case 7:
      sortNumberUp(trArray, 'year');
      break;

    default:
      break;
  }
}

setInterval(() => {
  table.innerHTML = '';
  sortArray.forEach((item) => {
    const symb = item;
    symb.textContent = '';
  });
  getSortedArray(i);
  trArray.forEach((item) => {
    table.appendChild(item);
  });
  if (i < 7) {
    i += 1;
  } else {
    i = 0;
  }
}, 2000);
