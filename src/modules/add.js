import Scores from './const.js';
import Interface from './interface.js';
import Store from './store.js';

const add = (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const scoreV = document.querySelector('#input-score').value;

  if (name === '' || scoreV === '') {
    const section = document.getElementById('score-container');
    const message = document.createElement('p');
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    // const score = new Scores(name, scoreV);

    // Interface.addScoreToList(score);
    // Store.addScore(score);
    const data = { user: name, score: scoreV }; //gameID: ERLioRAyRDENKi33Awku;

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ERLioRAyRDENKi33Awku/scores/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      });
  }

};

export default add;