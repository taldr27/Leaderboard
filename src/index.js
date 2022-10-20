import add from './modules/add.js';
import refresh from './modules/refresh.js';
import './index.css';

document.querySelector('#score-form').addEventListener('submit', add);
document.querySelector('#refreshBtn').addEventListener('click', refresh);
window.onload = refresh();

const data = { name: 'game' };

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
