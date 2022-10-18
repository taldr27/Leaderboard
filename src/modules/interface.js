import Store from './store.js';

export default class Interface {
  static displayScores() {
    const scores = Store.getScores();
    scores.forEach((score) => Interface.addScoreToList(score));
  }

  static addScoreToList(score) {
    const list = document.querySelector('#score-container');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${score.name}:  ${score.score}</td>`;
    list.appendChild(row);
  }
}