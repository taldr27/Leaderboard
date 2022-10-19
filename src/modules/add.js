// import Scores from './const.js';
// import Interface from './interface.js';
// import Store from './store.js';

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

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T14uVhRrwlVGFtBvKPwB/scores/', {
      method: 'POST',
      body: JSON.stringify({ user: name, score: scoreV }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
};

export default add;