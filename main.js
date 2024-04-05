const board = document.querySelector('#board');
let boardSize = 7;

for(let i = 0; i < boardSize; i++) {
  const tr = document.createElement('tr');
  board.appendChild(tr);
}