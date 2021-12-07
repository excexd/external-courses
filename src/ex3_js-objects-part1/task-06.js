const deepClone = (object) => {
  if (object === null) return null;
  const clone = { ...object };

  Object.keys(clone).forEach(
    (key) => {
      if (typeof object[key] === 'object') {
        clone[key] = deepClone(object[key]);
      } else {
        clone[key] = object[key];
      }
    },
  );

  if (Array.isArray(object) && object.length) {
    clone.length = object.length;
    return Array.from(clone);
  } if (Array.isArray(object)) {
    Array.from(object);
  }
  return clone;
};

module.exports = deepClone;
