function getPropertyFromPrototype(propertyName, object) {
  if (propertyName in object) {
    return object.__proto__[propertyName];
  }

  return undefined;
}

module.exports = getPropertyFromPrototype;
