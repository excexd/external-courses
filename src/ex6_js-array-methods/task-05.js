function map(array, callback) {
  const resultArray = [];
  let newElement;

  array.forEach((element) => {
    newElement = callback(element, array.indexOf(element), array);
    resultArray.push(newElement);
  });

  return resultArray;
}

module.exports = map;
