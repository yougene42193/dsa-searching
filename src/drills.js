class BinarySearchTree {
    constructor(key=null, value=null, parent=null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
    insert(key, value) {
      if (this.key === null) {
        this.key = key;
        this.value = value;
      }
  
      else if (key < this.key) {
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this);
        }
        else {
          this.left.insert(key, value);
        }
      }
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        }
        else {
          this.right.insert(key, value);
        }
      }
    }
    find(key) {
      if (this.key == key) {
        return this.value;
      }
      else if (key < this.key && this.left) {
        return this.left.find(key);
      }
      else if (key > this.key && this.right) {
        return this.right.find(key);
      }
      else {
        throw new Error('Key error');
      }
    }
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        }
        else if (this.left) {
          this._replaceWith(this.left);
        }
        else if (this.right) {
          this._replaceWith(this.right);
        }
        else {
          this._replaceWith(null);
        }
      }
      else if (key < this.key && this.left) {
        this.left.remove(key);
      }
      else if (key > this.key && this.right) {
        this.right.remove(key);
      }
      else {
        throw new Error('Key error');
      }
    }
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        }
        else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      }
      else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        }
        else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }

    _findMax() {
        if (!this.right) {
            return this;
        }
        return this.right._findMax();
    }
  }

  const bst = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22';

  function main() {
    let bst = new BinarySearchTree();
    bst.insert(25);
    bst.insert(15);
    bst.insert(50);
    bst.insert(10);
    bst.insert(24);
    bst.insert(35);
    bst.insert(70);
    bst.insert(4);
    bst.insert(12);
    bst.insert(18);
    bst.insert(31);
    bst.insert(44);
    bst.insert(66);
    bst.insert(90);
    bst.insert(22);
  }

  main();

  function preorder(bst) {
    console.log(bst.key);
    if (bst.left) {
      preorder(bst.left);
    }
    if (bst.right) {
      preorder(bst.right);
    }
  }

  function inOrder(bst) {
    if (bst.left) {
      inOrder(bst.left);
    }
    console.log(bst.key);
    if (bst.right) {
      inOrder(bst.right);
    }
  }

  function postOrder(bst) {
    if (bst.left) {
      postOrder(bst.left);
    } 
    if (bst.right) {
      postOrder(bst.right);
    }
    console.log(bst.key);
  }

  const sharesPrice = [128, 97, 121, 123, 98, 97, 105]

  function maxProfit(array) {
    let minVal = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if(array[i] < minVal) {
        minVal = array[i];
        index = 1;
      }
    }
    let maxVal = array[index];
    for (let i = index; i < array.lengthj; i++) {
      if(maxVal < array[i]) {
        maxVal = array[i];
      }
    }
    return maxVal - minVal;
  }