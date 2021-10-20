function showKeysAndValues(object) {
  Object.keys(object).forEach((key) => {
    console.log(`${key} - ${object[key]}`);
  });
  // eslint-disable-next-line no-useless-return
  return;
}

module.exports = showKeysAndValues;
