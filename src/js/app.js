import data from "./data";

const table = document.querySelector('.films').querySelector('tbody');
const tr_array = [];

data.forEach((item) => {
  const str = document.createElement('tr');
  Object.entries(item).forEach(([key,value]) => {
    str.setAttribute(`data-${key}`,value);
    str.innerHTML += `<td>${value}</td>`;
  });
  tr_array.push(str);
})


tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
tr_array.forEach((item) => {
  table.appendChild(item);
})


function getSortedArray(k) {
  switch (k) {
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
    case 1:
      tr_array.sort((a,b) => a.dataset.id - b.dataset.id);
      break;
                        
  
    default:
      break;
  }
}


