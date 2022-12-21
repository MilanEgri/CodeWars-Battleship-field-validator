/* eslint-disable max-len */
/* eslint-disable comma-spacing */
/* eslint-disable prefer-const */

const testArray =[[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
[1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

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
  let counterFour = 0;
  for (let y = 1;y < 11;y++) {
    for (let x = 1;x < 11;x++) {
      /*###########
        #1x1 ships#
        ###########*/
      if (field[y][x] === 1 && field[y][x + 1] !== 1 && field[y][x - 1] !== 1 &&  field[y - 1][x - 1] !== 1 && field[y - 1][x] !== 1 && field[y - 1][x + 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 1][x] !== 1 && field[y + 1][x + 1] !== 1 ) {
        counter++;
      }
      /*####################
        #2x1 vertical ships#
        ####################*/
      if (field[y][x] === 1 && field[y + 1][x] === 1 && field[y + 2][x] !== 1 && field[y - 1][x] !== 1 && field[y][x - 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 2][x - 1] !== 1 && field[y - 1][x - 1] !== 1 && field[y][x + 1] !== 1 && field[y + 1][x + 1] !== 1 && field[y + 2][x + 1] !== 1 && field[y - 1][x + 1] !== 1) {
        counterTwo++;
      }
      /*######################
        #2x1 horizontal ships#
        ######################*/
      if (field[y][x] === 1 && field[y][x + 1] === 1 && field[y][x - 1] !== 1 && field[y][x + 2] !== 1 &&  field[y - 1][x] !== 1 && field[y - 1][x + 1] !== 1 && field[y - 1][x - 1] !== 1 && field[y - 1][x + 2] !== 1 && field[y + 1][x] !== 1 && field[y + 1][x + 1] !== 1 && field[y + 1][x - 1] !== 1 && field[y + 1][x + 2] !== 1) {
        counterTwo++;
      }
      /*####################
        #3x1 vertical ships#
        ####################*/
      if(field[y][x] === 1 && field[y+1][x] ===1 && field[y+2][x]  ===1 && field[y-1][x] !==1 &&field[y+3][x] !==1 && field[y][x+1] !== 1 && field[y+1][x+1] !==1 && field[y+2][x+1]  !==1 && field[y-1][x+1] !==1 &&field[y+3][x+1] !==1 && field[y][x-1] !== 1 && field[y+1][x-1] !==1 && field[y+2][x-1]  !==1 && field[y-1][x-1] !==1 &&field[y+3][x-1] !==1 )
      {
        counterThree++;
      }
      /*######################
        #2x1 horizontal ships#
        ######################*/
      if(field[y][x] ===1 && field[y][x+1] ===1  && field[y][x+2] ===1 && field[y][x+3] !==1 && field[y][x-1] !==1 && field[y-1][x] !==1 && field[y-1][x+1] !==1  && field[y-1][x+2] !==1 && field[y-1][x+3] !==1 && field[y-1][x-1] !==1 && field[y+1][x] !==1 && field[y+1][x+1] !==1  && field[y+1][x+2] !==1 && field[y+1][x+3] !==1 && field[y+1][x-1] !==1 )
      {
        counterThree++;
      }
      /*####################
        #4x1 vertical ships#
        ####################*/
      if(field[y][x] ===1 && field[y+1][x] ===1 && field[y+2][x] ===1 && field[y+3][x] ===1 && field[y+4][x] !==1 && field[y-1][x] !==1 && field[y][x-1] !==1 && field[y+1][x-1] !==1 && field[y+2][x-1] !==1 && field[y+3][x-1] !==1 && field[y+4][x-1] !==1 && field[y-1][x-1] !==1 && field[y][x+1] !==1 && field[y+1][x+1] !==1 && field[y+2][x+1] !==1 && field[y+3][x+1] !==1 && field[y+4][x+1] !==1 && field[y-1][x+1] !==1 )
      {
        counterFour++;
      }
      /*######################
        #2x1 horizontal ships#
        ######################*/
      if(field[y][x] === 1 && field[y][x+1] === 1&& field[y][x+2]===1&& field[y][x+3]===1 && field[y][x+4]!==1 && field[y][x-1] !==1 && field[y-1][x] !== 1 && field[y-1][x+1] !== 1&& field[y-1][x+2]!==1&& field[y-1][x+3] !==1 && field[y-1][x+4]!==1 && field[y-1][x-1] !==1 && field[y+1][x] !== 1 && field[y+1][x+1] !== 1&& field[y+1][x+2]!==1&& field[y+1][x+3] !==1 && field[y+1][x+4]!==1 && field[y+1][x-1] !==1)
      {
        counterFour++;
      }
    }

  }
  return String(counter)+String(counterTwo)+String(counterThree)+String(counterFour) === '4321' ? true : false ;
}
console.log(validateBattlefield(testArray));
