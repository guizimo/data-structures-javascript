let circularDoubleLinkedList = new CircularDoubleLinkedList()

// 在链表后面追加元素
circularDoubleLinkedList.append('1')
circularDoubleLinkedList.append('2')
circularDoubleLinkedList.append('3')

// 在链表头部追加元素
circularDoubleLinkedList.prepend('0')

// 遍历链表
circularDoubleLinkedList.show()

// 向后遍历链表
circularDoubleLinkedList.showByTail()

// 获取链表的长度
circularDoubleLinkedList.size()

// 判断链表是否为空
circularDoubleLinkedList.isEmpty()

// 获取头节点
circularDoubleLinkedList.getHead()

// 获取尾节点
circularDoubleLinkedList.getTail()

// 插入节点
circularDoubleLinkedList.insert(2, '5')

// 根据索引查找链表的元素
circularDoubleLinkedList.indexOf(2)

// 删除尾节点
circularDoubleLinkedList.removeTail()

// 删除头节点节点
circularDoubleLinkedList.removeHead()

// 根据索引值删除指定的元素
circularDoubleLinkedList.removeByIndex(2)

// 根据传入的元素删除指定的元素
circularDoubleLinkedList.removeByElement('2')


