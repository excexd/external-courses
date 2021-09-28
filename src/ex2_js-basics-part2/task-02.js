/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */

function getArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  console.log(`Array length: ${array.length}`);
}

module.exports = getArrayValues;
