function Calculator() {
  let result = 0;
  function checkArgument(a) {
    return a !== undefined;
  }
  return {
    add(a) {
      if (checkArgument(a)) {
        result += a;
      }
      return this.add;
    },
    subtract(a) {
      if (checkArgument(a)) {
        result -= a;
      }
      return this.subtract;
    },
    divide(a) {
      if (checkArgument(a)) {
        result /= a;
      }
      return this.divide;
    },
    multiply(a) {
      if (checkArgument(a)) {
        result *= a;
      }
      return this.multiply;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
    },
  };
}

const calculator = Calculator();

module.exports = calculator;
