const board = document.querySelector('#board');

function tableau() {
  let boardSize = 7;

  for(let i = 0; i < boardSize; i++) {
    const tr = document.createElement('tr');
    board.appendChild(tr);

    for(let j = 0; j < boardSize; j++) {
      const td = document.createElement('td');

      if((i + j) % 2 === 0) {
        td.classList.add('black');
      }

      tr.appendChild(td);
    }
  }
}
tableau()