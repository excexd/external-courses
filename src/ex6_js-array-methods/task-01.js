/* eslint-disable no-plusplus */
function slice(array, begin, end) {
  const resultArray = [];
  let beginIndex = begin;
  let endIndex = end;

  if ((beginIndex < 0) && (-beginIndex < array.length)) {
    beginIndex = array.length + beginIndex;
  } else if ((beginIndex < 0) && (-beginIndex >= array.length)) {
    beginIndex = 0;
  } else if (beginIndex > array.length) {
    beginIndex = array.length;
  } else if (beginIndex === undefined) {
    beginIndex = 0;
  }

  if ((endIndex < 0) && (-endIndex < array.length)) {
    endIndex = array.length + endIndex;
  } else if ((endIndex < 0) && (-endIndex >= array.length)) {
    endIndex = 0;
  } else if (endIndex > array.length) {
    endIndex = array.length;
  } else if (endIndex === undefined) {
    endIndex = array.length;
  }

  for (let i = beginIndex; i < endIndex; i++) {
    resultArray.push(array[i]);
  }

  return resultArray;
}

module.exports = slice;
