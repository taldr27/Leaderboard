export default class Store {
  static getScores() {
    let scores;
    if (localStorage.getItem('scores') === null) {
      scores = [];
    } else {
      scores = JSON.parse(localStorage.getItem('scores'));
    }
    return scores;
  }

  static addScore(score) {
    const scores = Store.getScores();
    scores.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}