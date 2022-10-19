import add from './modules/add.js';
import refresh from './modules/refresh.js';
import './style.css';

document.querySelector('#score-form').addEventListener('submit', add);
document.querySelector('#refreshBtn').addEventListener('click', refresh);
