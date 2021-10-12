function getPropertyFromPrototype(propertyName, object) {
  if (propertyName in object.__proto__) {
    return object.__proto__[propertyName];
  }
  return undefined;
}

module.exports = getPropertyFromPrototype;
