class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }

  findLargest(rootNode) {
    let current = rootNode;
    while (current) {
      if (!current.right) return current.value;
      current = current.right;
    }
  }

  findSecondLargest(rootNode) {
    if (!rootNode || (!rootNode.left && !rootNode.right)) {
      throw new Error('Tree must have at least 2 nodes');
    }

    let current = rootNode;
    while (current) {
      if (current.left && !current.right) {
        this.findLargest(current.left);
      }

      if (current.right && !current.right.left && !current.right.right) {
        return current.value;
      }

      current = current.right;
    }
  }
}
