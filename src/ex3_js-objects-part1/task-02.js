function showKeysAndValues(object) {
  Object.keys(object).forEach((key) => {
    console.log(`${key} - ${object[key]}`);
  });
}

module.exports = showKeysAndValues;
