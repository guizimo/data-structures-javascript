let doubleLinkedList = new DoubleLinkedList()

// 在链表后面追加元素
doubleLinkedList.append('1')
doubleLinkedList.append('2')
doubleLinkedList.append('3')

// 遍历链表
doubleLinkedList.show()

// 向后遍历链表
doubleLinkedList.showByTail()

// 获取链表的长度
doubleLinkedList.size()

// 判断链表是否为空
doubleLinkedList.isEmpty()

// 获取头节点
doubleLinkedList.getHead()

// 获取尾节点
doubleLinkedList.getTail()

// 插入节点
doubleLinkedList.insert(2, '5')

// 根据索引查找链表的元素
doubleLinkedList.indexOf(2)

// 删除头节点节点
doubleLinkedList.removeHead()

// 删除尾节点
doubleLinkedList.removeTail()

// 根据索引值删除指定的元素
doubleLinkedList.removeByIndex(2)

// 根据传入的元素删除指定的元素
doubleLinkedList.removeByElement(2)


