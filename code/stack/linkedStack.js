function LinkedStack() {

  /**
   * 节点定义
   */
  const Node = function (element) {
    // 节点内容
    this.element = element
    // 节点指针
    this.next = null
  }

  // 链表长度
  let length = 0
  // 链表头节点
  let head = null

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  this.isEmpty = function () {
    return length === 0;
  }

  /**
   * 打印栈
   */
  this.show = function () {
    let arr = [], cur = head
    while (cur) {
      arr.push(cur.element)
      cur = cur.next
    }
    return arr
  }

  /**
   * 获取栈的大小
   * @returns {number}
   */
  this.size = function () {
    return length;
  }

  /**
   * 入栈
   * @param element
   * @returns {number}
   */
  this.push = function (element) {
    let node = new Node(element), cur = head
    if (!head) {
      head = node
    } else {
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    length++
    return element
  }

  /**
   * 出栈
   * @returns {*}
   */
  this.pop = function () {
    if (length === 0) {
      console.error('stack empty')
    }
    let res, cur = head, pre
    if (length === 1) {
      res = head.element
      head = null
      length = 0
    } else {
      while (cur.next) {
        pre = cur
        cur = cur.next
      }
      res = cur.element
      pre.next = null
      length--
    }
    return res
  }

  /**
   * 查看栈顶元素
   * @returns {*}
   */
  this.peek = function () {
    if (length === 0) {
      console.error('stack empty')
    }
    let cur = head
    while (cur.next) {
      cur = cur.next
    }
    return cur.element
  }

  /**
   * 清空栈
   */
  this.clear = function () {
    head = null
    length = 0
  }


}
