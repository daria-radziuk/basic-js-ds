const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 *  
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
    this.tail = 0;
    this.head = 0;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue() {
      this.queue[this.tail++] = data;
  }

  dequeue() {
    if (this.tail === this.head)
      return undefined
  
      const data = this.queue[this.head];
      delete this.data[this.head++];
      return data;
  }
}

/*const queue = new Queue();

queue.enqueue(1); 
queue.enqueue(3); 
queue.dequeue(); 
queue.getUnderlyingList();*/


module.exports = {
  Queue
};
