import interfaces from './modules/interface.js';
import add from './modules/add.js';
import './style.css';

document.querySelector('#score-form').addEventListener('submit', add);
document.addEventListener('DOMContentLoaded', interfaces.displayScores);
