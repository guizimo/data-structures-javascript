

/**
 * 测试
 */
let singleLinkedList = new SingleLinkedList()

// 在链表后面追加元素
singleLinkedList.append('1')
singleLinkedList.append('2')
singleLinkedList.append('3')

// 遍历链表
singleLinkedList.show()

// 判断链表是否为空
singleLinkedList.isEmpty()

// 获取链表的长度
singleLinkedList.size()

// 获取头节点
singleLinkedList.getHead()

// 获取尾节点
singleLinkedList.getTail()

// 插入节点
singleLinkedList.insert(1, '5')

// 根据索引查找链表的元素
singleLinkedList.indexOf(2)

// 删除尾节点
singleLinkedList.removeTail()

// 删除头节点节点
singleLinkedList.removeHead()

// 根据索引值删除指定的元素
singleLinkedList.removeByIndex(2)

// 根据传入的元素删除指定的元素
singleLinkedList.removeByElement('1')
