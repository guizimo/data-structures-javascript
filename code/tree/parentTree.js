class TreeNode {
  constructor(data, parentSub) {
    this.data = data
    this.parent = parentSub
  }
}

class ParentTree {
  constructor() {
    this.data = []
  }

  show() {
    return this.data.filter(i => !!i)
  }

  size() {
    return this.data.filter(i => !!i).length
  }

  treeDepth() {
    if (this.size() === 0) return 0
    // 找到最深的子节点
    const maxParentNode = Math.max(...this.data.map(i => i ? i.parent : -1))
    let depth = 1, lastChild = this.data[maxParentNode]
    if (!lastChild) {
      return depth
    }
    while (this.data[lastChild.parent]) {
      lastChild = this.data[lastChild.parent]
      depth++
    }
    return depth + 1
  }

  /**
   * 插入节点
   */
  insertChild(node) {
    if (this.data[0] && !this.data[node.parent]) {
      return false
    }
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === null) {
        this.data[i] = node
        return true
      }
    }
    this.data.push(node)
    return true
  }

  deleteChild(node) {
    const nodeIndex = this.data.indexOf(node)
    if (nodeIndex > -1) {
      // 首先置为空
      this.data[nodeIndex] = null
      let waitDel = [nodeIndex]
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] && waitDel.indexOf(this.data[i].parent) > -1) {
          waitDel.push(i)
          this.data[i] = null
        }
      }
      return true
    }
    return false
  }
}
