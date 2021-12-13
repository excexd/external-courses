const Calculator = {
  state: 0,

  checkArgument(a) {
    return a !== undefined;
  },

  setState(a) {
    if (this.checkArgument(a)) {
      this.state = a;
    }
    return this;
  },

  getResult() {
    return this.state;
  },

  reset() {
    this.state = 0;
    return this;
  },

  add(a) {
    if (this.checkArgument(a)) {
      this.state += a;
    }
    return this;
  },

  subtract(a) {
    if (this.checkArgument(a)) {
      this.state -= a;
    }
    return this;
  },

  divide(a) {
    if (this.checkArgument(a)) {
      this.state /= a;
    }
    return this;
  },

  multiply(a) {
    if (this.checkArgument(a)) {
      this.state *= a;
    }
    return this;
  },

  fetchData(callback) {
    const desiredState = 500;

    setTimeout(() => {
      if (callback(desiredState)) {
        Calculator.state = desiredState;
      }
    }, 0);

    return this;
  },

};

module.exports = Calculator;
