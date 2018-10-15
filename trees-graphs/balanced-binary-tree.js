function isSuperBalanced(treeRoot) {
  if (!treeRoot) return true;

  const depths = [];
  const nodes = [];
  nodes.push(treeRoot, 0);

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      if (depths.indexOf(depth) === -1) depths.push(depth);
      if (
        depths.length > 2 ||
        (depths.length === 2 && Math.abs(depths[0] - depths[1] > 1))
      )
        return false;
    } else {
      if (node.left) node.push([node.left, depth + 1]);
      if (node.right) node.push([node.right, depth + 1]);
    }
  }

  return true;
}
