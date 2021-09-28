/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */

function getNumbetOfEvenAndOddValues(array) {
  let numberOfEven = 0;
  let numberOfOdd = 0;
  let numberOfZeros = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'number') {
      if (array[i] === 0) {
        numberOfZeros++;
      } else if (array[i] % 2 === 0) {
        numberOfEven++;
      } else if (array[i] % 2 === 1) {
        numberOfOdd++;
      }
    }
  }
  console.log(`четных: ${numberOfEven}; нечетных: ${numberOfOdd}; нуль: ${numberOfZeros}`);
  return [numberOfEven, numberOfOdd, numberOfZeros];
}

module.exports = getNumbetOfEvenAndOddValues;
