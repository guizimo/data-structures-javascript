function ArrayQueue() {

  let list = []

  /**
   * 向队列尾部添加一个元素
   * @param element
   */
  this.enqueue = function (element) {
    return list.push(element);
  }

  /**
   * 从队列头部移除一个元素
   * @returns {*}
   */
  this.dequeue = function () {
    return list.shift();
  }

  /**
   * 获取队列
   * @returns {*}
   */
  this.show = function () {
    return list;
  }

  /**
   * 查看队列头部的元素
   * @returns {*}
   */
  this.front = function () {
    if (list.length === 0) {
      console.error('queue empty')
      return
    }
    return list[0];
  }

  /**
   * 检查队列是否为空
   * @returns {boolean}
   */
  this.isEmpty = function () {
    return list.length === 0;
  }

  /**
   * 获取队列的长度
   * @returns {number}
   */
  this.size = function () {
    return list.length;
  }

  /**
   * 清空队列
   */
  this.clear = function () {
    list = [];
  }

}
