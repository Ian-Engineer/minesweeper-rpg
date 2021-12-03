export default function checkSurroundingMonsters(gameBoard, row, col, height, width) {
  // define monsterLevelSum as 0
  var monsterLevelSum = 0;
  // iterate from -1 to 1 relative rows
  for (var i = -1; i <= 1; i ++) {
    // iterate from -1 to 1 relative columns
    for (var j = -1; j <= 1; j ++) {
      // skip row 0 col 0
      if (i === 0 && j === 0) {

      } else {
        // check if the cell is at the top of the board
        // check if the cell is at the edge of the board
        if (row + i > 0 && row + i <= height && col + j > 0 && col + j <= width) {
          // if cell is a number, add it to monster level sum
          if (typeof(gameBoard[row + i][col + j]) === 'number') {
            monsterLevelSum += gameBoard[row + i][col + j];
          }
        }
      }
    }
  }

  // return monsterLevelSum
  return monsterLevelSum
}