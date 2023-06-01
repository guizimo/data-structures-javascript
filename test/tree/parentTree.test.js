// 初始化树，结点
const tree = new ParentTree();
const A = new TreeNode('A', -1);
const B = new TreeNode('B', 0);
const C = new TreeNode('C', 0);
const D = new TreeNode('D', 1);
const E = new TreeNode('E', 2);
const F = new TreeNode('F', 2);
const G = new TreeNode('G', 3);
const H = new TreeNode('H', 3);
const I = new TreeNode('I', 3);
const J = new TreeNode('J', 4);
const K = new TreeNode('K', 9);
const L = new TreeNode('L', 9);
const M = new TreeNode('M', 9);

// 插入结点
tree.insertChild(A);
tree.insertChild(B);
tree.insertChild(C);
tree.insertChild(D);
tree.insertChild(E);
tree.insertChild(F);
tree.insertChild(G);
tree.insertChild(H);
tree.insertChild(I);
tree.insertChild(J);
tree.insertChild(K);
tree.insertChild(L);


tree.deleteChild(D);


tree.treeDepth();

tree.size()

tree.show()
