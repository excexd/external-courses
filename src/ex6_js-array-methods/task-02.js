/* eslint-disable no-plusplus */
function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }

  return false;
}

module.exports = some;
