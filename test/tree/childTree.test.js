// 初始化树，结点
const tree = new ChildTree();
const A = new TreeNode('A');
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');
const G = new TreeNode('G');
const H = new TreeNode('H');
const I = new TreeNode('I');
const J = new TreeNode('J');
const K = new TreeNode('K');
const L = new TreeNode('L');
const M = new TreeNode('M');

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

// 设置关系
const A1 = new TreeNodeChain(1);
const A2 = new TreeNodeChain(2);
A.setNext(A1);
A1.setNext(A2);

const B1 = new TreeNodeChain(3);
B.setNext(B1);

const C1 = new TreeNodeChain(4);
const C2 = new TreeNodeChain(5);
C.setNext(C1);
C1.setNext(C2);

const D1 = new TreeNodeChain(6);
const D2 = new TreeNodeChain(7);
const D3 = new TreeNodeChain(8);
D.setNext(D1);
D1.setNext(D2);
D2.setNext(D3);

const E1 = new TreeNodeChain(9);
E.setNext(E1);

const J1 = new TreeNodeChain(10);
const J2 = new TreeNodeChain(11);
J.setNext(J1);
J1.setNext(J2);

tree.show()

tree.deleteChild(C)

tree.treeDepth()

