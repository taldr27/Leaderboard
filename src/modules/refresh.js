const refresh = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gKe5ATGrB9p5WJ4187N5/scores/');
  const json = await response.json();
  const convert = json.result.sort((a, b) => b.score - a.score);
  const list = document.querySelector('#score-container');
  // Searching for the highest value
  const max = [];
  let high = 0;
  convert.forEach((game) => max.push(game.score));
  for (let i = 0; i < max.length; i += 1) {
    if (high === 0) {
      if (high <= max[i]) {
        high = max[i];
      }
    }
  }
  // Generating a new td for the table for each score
  list.innerHTML = '';
  convert.forEach((game) => {
    const row = document.createElement('tr');
    if (game.score === high) {
      row.innerHTML = `<td class="best">${game.user}:  ${game.score} You are the best one! 🥇🏆</td>`;
    } else {
      row.innerHTML = `<td>${game.user}:  ${game.score} 🎖️</td>`;
    }
    list.appendChild(row);
  });
};

export default refresh;
