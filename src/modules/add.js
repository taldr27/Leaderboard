import refresh from './refresh.js';

// Button add new Score
const add = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#input-name').value;
  const scoreV = document.querySelector('#input-score').value;

  // Validation of inputs
  if (name === '' || scoreV === '') {
    const section = document.getElementById('score-container');
    const message = document.createElement('p');
    message.className = 'p';
    message.innerHTML = 'Please put something into the fields';
    section.insertAdjacentElement('afterend', message);
    setTimeout(() => { message.remove(); }, 2000);
  } else {
    // Calling the API to add
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gKe5ATGrB9p5WJ4187N5/scores/', {
      method: 'POST',
      body: JSON.stringify({ user: name, score: scoreV }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    e.target.reset();
    refresh();
    // gKe5ATGrB9p5WJ4187N5
  }
};

export default add;
