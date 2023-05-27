let circularSingleLinkedList = new CircularSingleLinkedList()

// 在链表后面追加元素
circularSingleLinkedList.append('1')
circularSingleLinkedList.append('2')
circularSingleLinkedList.append('3')

// 遍历链表
circularSingleLinkedList.show()

// 获取链表的长度
circularSingleLinkedList.size()

// 判断链表是否为空
circularSingleLinkedList.isEmpty()

// 获取头节点
circularSingleLinkedList.getHead()

// 获取尾节点
circularSingleLinkedList.getTail()

// 插入节点
circularSingleLinkedList.insert(2, '5')

// 根据索引查找链表的元素
circularSingleLinkedList.indexOf(2)

// 删除尾节点
circularSingleLinkedList.removeTail()

// 删除头节点节点
circularSingleLinkedList.removeHead()

// 根据索引值删除指定的元素
circularSingleLinkedList.removeByIndex(2)

// 根据传入的元素删除指定的元素
circularSingleLinkedList.removeByElement(2)


