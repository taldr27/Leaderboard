export default async function refresh() {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/T14uVhRrwlVGFtBvKPwB/scores/');
  const json = await response.json();
  const convert = json.result;
  const list = document.querySelector('#score-container');
  list.innerHTML = '';
  console.log(convert);
  convert.forEach((game) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${game.user}:  ${game.score}</td>`;
    list.appendChild(row);
  });
}