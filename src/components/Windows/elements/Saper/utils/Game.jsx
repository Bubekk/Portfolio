import Cell from "../components/Cell";

export default function Game(rows, cols, bombs) {
  // creating 2d table for rendering cells on board
  let board = [];

  for (let x = 0; x < rows; x++) {
    let columns = [];
    for (let y = 0; y < cols; y++) {
      const id = x * cols + y + 1;
      columns.push({
        id: id,
        flag: false,
        bomb: false,
        value: 0,
      });
    }
    board.push(columns);
  }

  // randomizing bombs location
  let b = 0;

  while (b < bombs) {
    let xPos = Math.floor(Math.random() * rows);
    let yPos = Math.floor(Math.random() * cols);

    if (!board[xPos][yPos].bomb) {
      board[xPos][yPos].bomb = true;
      b++;
    }
  }

  //   checking how many bomb is around the cell
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let bombCount = 0;

      //   loop for every cell around board[i][j] cell
      for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let yOffset = -1; yOffset <= 1; yOffset++) {
          const newRow = i + xOffset;
          const newCol = j + yOffset;

          //   setting edges for check function
          if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[i].length) {
            if (board[newRow][newCol].bomb) {
              bombCount++;
            }
          }
        }
      }
      if (board[i][j].bomb) {
        board[i][j].value = 0;
      } else {
        board[i][j].value = bombCount;
      }
    }
  }

  const renderedBoard = board.map((row, rowIndex) => (
    <div key={rowIndex} className="row">
      {row.map((cell) => (
        <Cell key={cell.id} id={cell.id} flag={cell.flag} bomb={cell.bomb} value={cell.value} />
      ))}
    </div>
  ));

  return renderedBoard;
}
