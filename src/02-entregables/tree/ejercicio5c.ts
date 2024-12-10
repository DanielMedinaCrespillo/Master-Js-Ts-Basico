interface TreeNode<T> {
  value: T;
  children?: TreeNode<T>[];
}

const rootNode: TreeNode<number> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 5 }, { value: 6 }],
    },
    {
      value: 3,
    },
    {
      value: 4,
      children: [{ value: 7 }, { value: 8 }],
    },
  ],
};
