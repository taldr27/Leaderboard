import add from './modules/add.js';
import refresh from './modules/refresh.js';
import './style.css';

document.querySelector('#score-form').addEventListener('submit', add);
document.querySelector('#refreshBtn').addEventListener('click', refresh);

//* Code to create a new game with the API
// const data = {name: 'newGame'};
// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));