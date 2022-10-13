const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
   /* if (!this.root) {
      return null;
    }*/
    return this.root;
}

  add(data) {
    this.root = addInside(this.root, data)

    function addInside(node,data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInside(this.root, data);

    function searchInside(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return searchInside(node.right, data);
      } else {
        return searchInside(node.left, data);
      }
    }
  }
  find(data) {
    return searchNode(this.root, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return searchNode(node.right, data);
      } else {
        return searchNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);
    function removeNode (node, data) {
      if (!node) {
        return null;
      }
  
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (!node.left && !node.right) {
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
      node.data - minRight.data;
  
      node.right = removeNode(node.right, minRight.data);
  
      return node;
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
  
}

/*function rootItems() {
  return item.root;
}

function addItems() {
  item.add(10);
  item.add(8);
  item.add(23);
}

function hasItems() {
  item.has(10);
}

function findItems() {
  item.find(11);
}

function removeItems() {
  item.remove(8);
  
}
const item = new BinarySearchTree();

addItems();
removeItems();
hasItems();
findItems();
rootItems();
*/

module.exports = {
  BinarySearchTree
};