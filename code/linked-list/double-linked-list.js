function DoubleLinkedList() {
    /**
     * 节点定义
     * @param {*} element
     */
    const Node = function(element) {
        // 节点元素
        this.element = element
        // 后继指针
        this.next = null
        // 前驱指针
        this.prev = null
    }

    // 链表长度
    let length = 0
    // 头节点
    let head = null
    // 尾节点
    let tail = null

    /**
     * 获取链表的长度
     * @returns
     */
    this.size = function() {
        return length
    }

    /**
     * 获取尾节点
     * @returns
     */
    this.getTail = function() {
        return tail
    }

    /**
     * 获取头节点
     * @returns
     */
    this.getHead = function() {
        return head
    }

    /**
     * 判断链表是否为空
     * @returns
     */
    this.isEmpty = function() {
        return length === 0
    }

    /**
     * 追加节点
     * @param {*} element
     * @returns
     */
    this.append = function(element) {
        let node = new Node(element), cur, pre
        if (!head) {
            head = node
        } else {
            cur = head
            while(cur) {
                pre = cur
                cur = cur.next
            }
            node.next = cur
            pre.next = node
            node.prev = pre
        }
        // 更新尾节点
        tail = node
        length++
        return true
    }

    /**
     * 遍历节点
     * @returns
     */
    this.show = function() {
        let cur = head, res = []
        while(cur) {
            res.push(cur.element)
            cur = cur.next
        }
        return res
    }

    /**
     * 遍历节点（以尾节点遍历）
     * @returns
     */
    this.showByTail = function() {
        let cur = tail, res = []
        while(cur) {
            res.push(cur.element)
            cur = cur.prev
        }
        return res
    }

    /**
     * 插入节点
     * @param {*} index
     * @param {*} element
     * @returns
     */
    this.insert = function(index, element) {
        let cur = head, num = 0, node = new Node(element)
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }
        // 判断是否尾节点
        if (index === length - 1) {
            node.prev = tail.prev
            node.next = tail
            tail.prev.next = node
            tail.prev = node
        } else if (index === 0) { // 判断是否头节点
            node.next = cur
            cur.prev = node
            // 更新头节点
            head = node
        } else {
            while (cur) {
                if (num === index) {
                    node.next = cur
                    node.prev = cur.prev
                    cur.prev.next = node
                    cur.prev = node
                    length++
                    return true
                }
                num++
                cur = cur.next
            }
        }
        length++
        return true
    }

    /**
     * 查找
     * @param index
     * @returns {number|null}
     */
    this.indexOf = function(index) {
        let cur = head, num = 0
        while(cur) {
            if (num === index) {
                return cur
            }
            num++
            cur = cur.next
        }
        return -1
    }

    /**
     * 移除尾节点
     * @returns {boolean}
     */
    this.removeTail = function() {
        if (!tail) {
            console.error('tail is null')
            return false
        }
        if (length === 1) { // 最后一个节点
            head = null
            tail = null
            length = 0
            return true
        }
        let prev = tail.prev
        prev.next = null
        // 更新尾节点
        tail = prev
        length--
        return true
    }

    /**
     * 移除尾节点
     * @returns {boolean}
     */
    this.removeHead = function() {
        if (!head) {
            console.error('head is null')
            return false
        }
        if (length === 1) { // 最后一个节点
            head = null
            tail = null
            length = 0
            return true
        }
        let next = head.next
        next.prev = null
        // 更新尾节点
        head = next
        length--
        return true
    }

    /**
     * 删除指定的索引的元素
     * @param index
     * @returns {boolean}
     */
    this.removeByIndex = function(index) {
        if (!head) {
            console.error('head is null')
            return false
        }
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }
        let cur = head, num = 0, prev, next
        if (index === 0) {
            return this.removeHead()
        } else if (index === length - 1) {
            return this.removeTail()
        } else {
            while(num < index) {
                cur = cur.next
                num++
            }
            prev = cur.prev
            next = cur.next
            prev.next = cur.next
            next.prev = prev
            length--
            return true
        }
    }

    /**
     * 删除指定的元素
     * @param element
     */
    this.removeByElement = function(element) {
        if (!head) {
            console.error('head is null')
            return false
        }
        let cur = head, num = 0, prev, next
        if (head.element === element) {
            this.removeHead()
        } else  {
            while (cur) {
                if (cur.element === element) {
                    return this.removeByIndex(num)
                }
                cur = cur.next
                num++
            }
        }
        return false
    }
}

