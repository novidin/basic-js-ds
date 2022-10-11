const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
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
    this.arr = [];
  }

  convert(a) {
    let l = null;
    a.reverse().forEach(el => {
      let node = new ListNode(el);
      if (l) node.next = l;
      l = node;
    });
    a.reverse();
    return l;
  }

  getUnderlyingList() {
    return this.convert(this.arr);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    this.arr.push(value);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    return this.arr.shift();
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
