/* eslint-disable max-len */
/* eslint-disable comma-spacing */
/* eslint-disable prefer-const */

const battleShipArray = [[1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0, 1, 1, 0, 0, 1]];

function validateBattlefield(field) {
  let vertical = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
  for (let i = 0;i < field.length;i++) {
    field[i].unshift(2);
    field[i].push(2);
    field[i].push(2);
    field[i].push(2);
    field[i].push(2);
  }
  field.unshift(vertical);
  field.push(vertical);
  field.push(vertical);
  field.push(vertical);
  field.push(vertical);
  let counter = 0;
  let counterTwo = 0;
  let counterThree = 0;
  for (let y = 1;y < 11;y++) {
    for (let x = 1;x < 11;x++) {
      /*###########
        #1x1 ships#
        ###########*/
      if (field[y][x] === 1 && field[y][x + 1] !== 1 && field[y][x - 1] !== 1 &&  field[y - 1][x - 1] !== 1 && field[y - 1][x] !== 1 && field[y - 1][x + 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 1][x] !== 1 && field[y + 1][x + 1] !== 1 ) {
        counter++;
      }
      /*####################
        #2x2 vertical ships#
        ####################*/
      if (field[y][x] === 1 && field[y + 1][x] === 1 && field[y + 2][x] !== 1 && field[y - 1][x] !== 1 && field[y][x - 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 2][x - 1] !== 1 && field[y - 1][x - 1] !== 1 && field[y][x + 1] !== 1 && field[y + 1][x + 1] !== 1 && field[y + 2][x + 1] !== 1 && field[y - 1][x + 1] !== 1) {
        counterTwo++;
      }
      /*####################
        #2x2 vertical ships#
        ####################*/
      if (field[y][x] === 1 && field[y][x + 1] === 1 && field[y][x - 1] !== 1 && field[y][x + 2] !== 1 &&  field[y - 1][x] !== 1 && field[y - 1][x + 1] !== 1 && field[y - 1][x - 1] !== 1 && field[y - 1][x + 2] !== 1 && field[y + 1][x] !== 1 && field[y + 1][x + 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 1][x + 2] !== 1) {
        counterTwo++;
      }
      /*####################
        #3x3 vertical ships#
        ####################*/
      if(field[y][x] === 1 && field[y+1][x] ===1 && field[y+2][x]  ===1 && field[y-1][x] !==1 &&field[y+3][x] !==1 && field[y][x+1] !== 1 && field[y+1][x+1] !==1 && field[y+2][x+1]  !==1 && field[y-1][x+1] !==1 &&field[y+3][x+1] !==1 && field[y][x-1] !== 1 && field[y+1][x-1] !==1 && field[y+2][x-1]  !==1 && field[y-1][x-1] !==1 &&field[y+3][x-1] !==1 )
      {
        counterThree++;
      }
    }

  }
  return counterThree;
}
console.log(validateBattlefield(battleShipArray));
