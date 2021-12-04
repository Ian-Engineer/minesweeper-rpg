export default function fight(monster, character) {
  var output = {
    health: character.health,
    exp: 0
  }

  var experience = {
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 16,
    6: 32,
    7: 64,
    8: 128,
    9: 0
  }

  // if monster level is less than or equal to character level
  if (monster <= character.level) {
    // give exp
    output.exp = experience[monster]
  } else {
    var monsterHealth = monster
    do {
      monsterHealth -= character.level
      character.health -= monster
    } while (character.health > 0 && monsterHealth > 0)
    if (monsterHealth <= 0) {
      output.exp = experience[monster]
      output.health = character.health
    } else {
      output.health = 0
    }
  }
  return output;
}