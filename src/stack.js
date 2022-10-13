const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.units = [];
  };
  
  push(unit) {
    this.units.push(unit);
  }

  peek() {
    if(this.units.length == 0) {
      return null;
    }

    return this.units[this.units.length -1];
  }

  pop() {
    return this.units.pop();
  }

}

/*const figures = new Stack();

figures.push(1);

figures.peek();

figures.pop();

figures.pop();*/

module.exports = {
  Stack
};
