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
}

const isBinarySearchTree = (rootNode) => {
  const nodeBoundsStack = [];
  nodeBoundsStack.push = ({
    node: rootNode,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  while (nodeBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeBoundsStack.pop();

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    node.left && nodeBoundsStack.push({
      node: node.left,
      lowerBound,
      upperBound: node.value,
    });

    node.right && nodeBoundsStack.push({
      node: node.right,
      lowerBound: node.value,
      upperBound,
    });
  }

  return true;
};
