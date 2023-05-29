function CircularDoubleLinkedList() {

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
        let node = new Node(element)
        if (!head) {
            head = node
            tail = node
        } else {
            node.prev = tail
            tail.next = node
            tail = node
        }
        tail.next = head
        head.prev = tail
        length++
        return true
    }

    /**
     * 首部追加节点
     * @param {*} element
     * @returns
     */
    this.prepend = function(element) {
        let node = new Node(element)
        if (!head) {
            head = node
            tail = node
        } else {
            node.next = head
            head.prev = node
            head = node
        }
        tail.next = head
        head.prev = tail
        length++
        return true
    }

    /**
     * 遍历节点
     * @returns
     */
    this.show = function() {
        let cur = head, num = 0, res = []
        while(num < length) {
            res.push(cur.element)
            cur = cur.next
            num++
        }
        return res
    }

    /**
     * 向后遍历链表
     * @returns
     */
    this.showByTail = function() {
        let cur = tail, num = 0, res = []
        while(num < length) {
            res.push(cur.element)
            cur = cur.prev
            num++
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
            return this.append(element)
        } else if (index === 0) {
           return this.prepend(element)
        } else {
            while (num < length) {
                if (num === index) {
                    node.prev = cur.prev
                    node.next = cur
                    cur.prev.next = node
                    cur.prev = node
                    length++
                    return true
                }
                cur = cur.next
                num++
            }
        }
        return false
    }

    /**
     * 查找节点
     * @param index
     * @returns {number|null}
     */
    this.indexOf = function(index) {
        let cur = head, num = 0
        while(num < length) {
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
        tail = tail.prev
        tail.next = head
        length--
        return true
    }

    /**
     * 移除头节点
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
        head = head.next
        head.prev = tail
        length--
        return true
    }

    /**
     * 通过index移除节点
     * @param index
     * @returns {boolean}
     */
    this.removeByIndex = function(index) {
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }
        if (!head) {
            console.error('head is null')
            return false
        }
        let cur = head, num = 0
        if (index === 0) {
            return this.removeHead()
        } else if (index === length - 1) {
            return this.removeTail()
        } else {
            while(num < length) {
                if (num === index) {
                    const pre = cur.prev
                    cur.prev.next = cur.next
                    cur.next.prev = pre
                    length--
                    return true
                }
                num++
                cur = cur.next
            }
        }
        return false
    }

    /**
     * 通过元素移除节点
     * @param element
     */
    this.removeByElement = function(element) {
        // 检查index
        if (element === '') {
            console.error('element is not empty')
            return false
        }
        let num = 0, cur = head
        while (num < length) {
            if (cur.element === element) {
                return this.removeByIndex(num)
            } else {
                cur = cur.next
                num++
            }
        }
        console.error('not find')
        return false
    }


}
