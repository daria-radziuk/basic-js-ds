const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  /*constructor(value) {
    this.queue = {};
    this.tail = this.head;
  }*/
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newNode = new ListNode(value)

    if (!this.queue) {
      this.queue = newNode;
    }
    else {
      let item = this.queue;
      while (item) {
        if (!item.next) {
          item.next = newNode;
          break;
        }
        item = item.next;
      }
    }
  }

  dequeue() {
    let element = this.queue.value;
    this.queue = this.queue.next;
    return element;
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
