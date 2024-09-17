const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {
        //the map here is called for each nested array
        board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {
                //outputing the values inside the arrays
                row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquare(rowIndex, colIndex)}
                      disabled={playerSymbol !== null} //disabling the button when it has the value X or O(is clciked once)
                    >
                      {playerSymbol}
                    </button>
                  </li>
                ))
              }
            </ol>
          </li>
        ))
      }
    </ol>
  );
}
