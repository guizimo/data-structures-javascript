const arrayQueue = new ArrayQueue()

// 向队列尾部添加一个元素
arrayQueue.enqueue(1)
arrayQueue.enqueue(2)
arrayQueue.enqueue(3)
arrayQueue.enqueue(4)

// 获取队列的长度
arrayQueue.size()

// 获取队列
arrayQueue.show()

// 查看队列头部的元素
arrayQueue.front()

// 检查队列是否为空
arrayQueue.isEmpty()

// 从队列头部移除一个元素
arrayQueue.dequeue()

// 清空队列
arrayQueue.clear()
