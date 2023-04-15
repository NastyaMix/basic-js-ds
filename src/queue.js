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
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else if( this.tail === null ){
      this.head.next = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
    const prevHead = this.head.value;
    this.head = this.head.next;
    return prevHead;
  }
}

module.exports = {
  Queue
};
