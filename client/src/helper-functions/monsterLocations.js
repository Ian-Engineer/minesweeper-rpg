export default function monsterLocations(height, width, difficulty = 'normal' ) {
  // define number of monsters array
  const monsters = {
    beginner: {
      1: 10,
      2: 8,
      3: 6,
      4: 4,
      5: 2
    },
    easy: {
      1: 33,
      2: 27,
      3: 20,
      4: 13,
      5: 6
    },
    normal: {
      1: 52,
      2: 46,
      3: 40,
      4: 36,
      5: 30,
      6: 24,
      7: 18,
      8: 13,
      9: 1
    },
    hard: {
      1: 25,
      2: 25,
      3: 25,
      4: 25,
      5: 25
    },
    legendary: {
      1: 36,
      2: 36,
      3: 36,
      4: 36,
      5: 36,
      6: 36,
      7: 36,
      8: 36,
      9: 36
    }
  }

  // determine monster locations

  // define output object - each key will be the row and the value will be an object key is the column value is the level {row: {col: level}}
  var monsterLocations = {};

  // iterate through monster levels
  const monsterLevels = Object.keys(monsters[difficulty]);
  for (var i = 0; i < monsterLevels.length; i ++){
    // iterate through number of monsters for that level
    for (var j = 0; j < monsters[difficulty][monsterLevels[i]]; j ++) {
      // define emptyCell as true
      var emptyCell = true;
      // do while loop determining the monster location without overlap
      do {
        // determine row location of current monster
        var row = Math.ceil(Math.random() * height);
        // determine column location of current monster
        var column = Math.ceil(Math.random() * width);
        // check if that row is in use
        if (monsterLocations[row]) {
          // check if that row and column is filled
          if (monsterLocations[row][column]) {
            // define emptyCell as false
            emptyCell = false;
          } else {
            emptyCell = true;
          }
        } else {
          emptyCell = true;
        }
      } while (!emptyCell);

      // add monster level, row and column to output object
      monsterLocations[row] = { ...monsterLocations[row], [column]:Number(monsterLevels[i])}
    }
  }
  console.log(monsterLocations)
  // return monsterLocations
  return monsterLocations

}