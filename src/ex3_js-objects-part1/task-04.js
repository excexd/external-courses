function addPropertyIfItDoesntExist(key, object) {
  if (!object.hasOwnProperty(key)) {
    // eslint-disable-next-line no-param-reassign
    object[key] = 'new';
  }
  return object;
}

module.exports = addPropertyIfItDoesntExist;
