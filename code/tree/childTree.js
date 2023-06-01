class TreeNode {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
  setNext(next = null) {
    this.next = next;
  }
}

class TreeNodeChain {
  constructor(treeNodeSub, next = null) {
    this.treeNodeSub = treeNodeSub;
    this.next = next;
  }
  setNext(next = null) {
    this.next = next;
  }
  setSub(treeNodeSub) {
    this.treeNodeSub = treeNodeSub;
  }
}



class ChildTree {
  constructor() {
    this.data = []
  }

  show() {
    return this.data.filter(i => !!i)
  }

  size() {
    return this.data.filter(i => !!i).length
  }

  /**
   * 返回树的深度
   * @returns {number}
   */
  treeDepth() {
    if (this.size() === 0) return 0
    let result = 0
    // 找到根节点
    const root = this.data[0]
    const getDepth = (node, depth = 1) => {
      if (node.next) {
        let nextNode = node.next
        getDepth(this.data[nextNode.treeNodeSub], depth++)
        while (nextNode && nextNode.next){
          getDepth(this.data[nextNode.next.treeNodeSub], depth++)
          nextNode = nextNode.next
        }
      }
      result = Math.max(result, depth)
    }
    getDepth(root)
    return result
  }

  /**
   * 插入节点
   */
  insertChild(node) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === null) {
        this.data[i] = node
        return true
      }
    }
    this.data.push(node)
    return true
  }

  /**
   * 删除结点及其子树
   * @param node
   * @returns {boolean}
   */
  deleteChild(node) {
    const nodeIndex = this.data.indexOf(node)
    if (nodeIndex > -1) {
      // 删除后代节点[递归]
      const delChildNode = (waitDel) => {
        if (!waitDel.next) return
        while (waitDel.next) {
          let pre = waitDel
          waitDel = waitDel.next
          pre.setNext(null)
          const childNode = this.data[waitDel.treeNodeSub]
          this.data[waitDel.treeNodeSub] = null
          if (childNode.next) {
            delChildNode(childNode)
          }
        }
      }
      // 首先置为空
      this.data[nodeIndex] = null
      // 删除后代节点
      delChildNode(node)
      // 更新父母链表关系
      for (let i = 0; i < this.data.length; i++) {
        let node = this.data[i];
        while (node && node.next) {
          if (node.next.treeNodeSub === nodeIndex) {
            node.next = node.next.next;
            return true;
          } else {
            node = node.next;
          }
        }
      }
      return true
    }
    return false
  }
}
