/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */

function getMaxValue(array) {
  if (array.length !== 0) {
    let maxElement = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxElement) {
        maxElement = array[i];
      }
    }
    return maxElement;
  }
  return 0;
}

module.exports = getMaxValue;
