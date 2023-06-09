function CircularSingleLinkedList() {

    /**
     * 节点定义
     * @param {*} element
     */
    const Node = function(element) {
        // 节点元素
        this.element = element
        // 后继指针
        this.next = null
    }

    // 链表长度
    let length = 0
    // 头节点
    let head = null
    // wei
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
            tail.next = head
        } else {
            node.next = head
            tail.next = node
            tail = node
        }
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
            tail.next = head
        } else {
            node.next = head
            head = node
            tail.next = head
        }
        length++
        return true
    }

    /**
     * 遍历节点
     * @returns
     */
    this.show = function() {
        let cur = head, res = [], num = 0
        while(num < length) {
            res.push(cur.element)
            cur = cur.next
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
        let cur = head, prev, num = 0, node = new Node(element)
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }
        if (index === 0) {
            return this.prepend(element)
        } else if (index === length - 1) {
            return this.append(element)
        } else {
            while (num < length) {
                if (num === index) {
                    node.next = cur
                    prev.next = node
                    length++
                    return true
                }
                num++
                prev = cur
                cur = cur.next
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
        let cur = head, num = 0, pre
        while (num < length - 1) { // 遍历到最后一个的前一个
            pre = cur
            cur = cur.next
            num++
        }
        tail = pre
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
            while(num < index - 1) { // 找到前驱节点
                num++
                cur = cur.next
            }
        }
        cur.next = cur.next.next
        length--
        return true
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
