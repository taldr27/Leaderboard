import refresh from './refresh.js';

// Button add new Score
const add = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const scoreV = document.querySelector('#input-score').value;

  // Validation of inputs
  if (name === '' || scoreV === '') {
    const section = document.getElementById('score-form');
    const message = document.createElement('p');
    message.className = 'p';
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else if (name.length > 20 || scoreV.length > 7) {
    const section = document.getElementById('score-form');
    const message = document.createElement('p');
    message.className = 'p';
    message.innerHTML = 'Name should not exceed 20 characters and Score should not exceed 7 characters!';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 3000);
  } else {
    // Calling the API to add
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0VkmMjM3V99zc8hBRUji/scores/', {
      method: 'POST',
      body: JSON.stringify({ user: name, score: scoreV }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    e.target.reset();
    refresh();
    // 0VkmMjM3V99zc8hBRUji
  }
};

export default add;
