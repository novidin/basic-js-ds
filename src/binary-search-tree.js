const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
    } else {
      this.insertNode(this._root, newNode);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this._root, data) ? true : false;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return this.search(this._root, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};