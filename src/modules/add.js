import refresh from './refresh.js';

const add = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const scoreV = document.querySelector('#input-score').value;

  if (name === '' || scoreV === '') {
    const section = document.getElementById('score-container');
    const message = document.createElement('p');
    message.className = 'p';
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5eoEV0NiLVr80SAmBVHb/scores/', {
      method: 'POST',
      body: JSON.stringify({ user: name, score: scoreV }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    e.target.reset();
    refresh();
  }
};

export default add;
