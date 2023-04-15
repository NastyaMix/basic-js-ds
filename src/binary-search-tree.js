const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add( data ) {
    let newNode = new Node (data);
    if(this.head === null){
      this.head = newNode;
    } else {
      this.insertNode(this.head, newNode);
    }
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

  has( data ) {
    return hasData(this.head, data);

  function hasData(node, data) {
    if (node === null) {
      return false;
  } else if (data < node.data) {
      return hasData(node.left, data);
  } else if (data > node.data) {
      return hasData(node.right, data);
  } else {
      return true;
  }
  }
}

  find( data) {
    return search(this.head, data);

  function search(node, data) {
    if (node === null) {
      return null;
  } else if (data < node.data) {
      return search(node.left, data);
  } else if (data > node.data) {
      return search(node.right, data);
  } else {
      return node;
  }
  }
}



  remove(data) {
    this.head = removeData(this.head, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }




  min() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};