function filter(array, callback) {
  const resultArray = [];

  array.forEach((element) => {
    if (callback(element, array.indexOf(element), array)) {
      resultArray.push(element);
    }
  });

  return resultArray;
}

module.exports = filter;
