/* eslint-disable no-plusplus */
function reduce(array, callback, initialValue) {
  let startIndex = 1;
  let previousValue = array[0];

  if (initialValue !== undefined) {
    previousValue = initialValue;
    startIndex = 0;
  }

  for (let i = startIndex; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = reduce;
