const refresh = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gKe5ATGrB9p5WJ4187N5/scores/');
  const json = await response.json();
  const convert = json.result.sort((a, b) => b.score - a.score);
  const list = document.querySelector('#score-container');
  list.innerHTML = '';
  convert.forEach((game) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${game.user}:  ${game.score} 🏆</td>`;
    list.appendChild(row);
  });
};

export default refresh;
