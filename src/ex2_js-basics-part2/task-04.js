/* eslint-disable no-plusplus */
/* eslint linebreak-style: ["error", "windows"] */

function areAllValuesEqual(array) {
  const firstElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== firstElement) {
      return false;
    }
  }
  return true;
}

module.exports = areAllValuesEqual;
