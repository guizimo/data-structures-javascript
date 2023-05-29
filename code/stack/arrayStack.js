function ArrayStack() {
  let list = []

  /**
   * 判断栈是否为空
   * @returns {boolean}
   */
  this.isEmpty = function () {
    return list.length === 0;
  }

  /**
   * 打印栈
   */
  this.show = function () {
    console.log(list)
  }

  /**
   * 获取栈的大小
   * @returns {number}
   */
  this.size = function () {
    return list.length;
  }

  /**
   * 入栈
   * @param element
   * @returns {number}
   */
  this.push = function (element) {
    return list.push(element)
  }

  /**
   * 出栈
   * @returns {*}
   */
  this.pop = function () {
    return list.pop()
  }

  /**
   * 查看栈顶元素
   * @returns {*}
   */
  this.peek = function () {
    return list[list.length - 1]
  }

  /**
   * 清空栈
   */
  this.clear = function () {
    list = []
  }


}
