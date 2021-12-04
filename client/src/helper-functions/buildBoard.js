import monsterLocations from "./monsterLocations.js"
import checkSurroundingMonsters from "./checkSurroundingMonsters.js"

export default function buildBoard(height, width, character) {
  // default matrix 25 by 50
  height ? null : height = 25
  width ? null : width = 50

  // run function to determine monster locations with height and width
  var gameBoard = monsterLocations(height, width)
  var startPositions = [];

  // iterate through height
  for (var row = 1; row <= height; row ++) {
    // iterate through width
    for (var col = 1; col <= width; col ++) {
      // if row, col is not a monster
      if (!gameBoard[row][col]) {
        // run it through checkSurroundingMonsters
        var count = checkSurroundingMonsters(gameBoard, row, col, height, width);
        // if value is 0, input null at row and column
        if (count === 0) {
          gameBoard[row] = { ...gameBoard[row], [col]: `${0}`}
          if (character === 0) {startPositions.push([row,col])}
        } else {
          if (character !== 0) {
            count === 1 ? startPositions.push([row,col]) : null;
          }
          gameBoard[row] = { ...gameBoard[row], [col]: `${count}`}
        }
        // else input value at row and column
      }
    }
  }

  // determine random starting location based on values in start array
  const startPosition = startPositions[Math.ceil(Math.random()*startPositions.length)]
  /**
   * output is an object containing:
   * the game board
   * the starting position for single cell
   * the starting position for open area
   */
  return { gameBoard, startPosition }
}