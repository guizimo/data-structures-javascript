function DoubleLinkedList() {
    /**
     * 结点定义
     * @param {*} element
     */
    const Node = function(element) {
        // 结点元素
        this.element = element
        // 后继指针
        this.next = null
        // 前驱指针
        this.prev = null
    }

    // 链表长度
    let length = 0
    // 头结点
    let head = null
    // 尾结点
    let tail = null

    /**
     * 获取链表的长度
     * @returns
     */
    this.size = function() {
        return length
    }

    /**
     * 获取尾结点
     * @returns
     */
    this.getTail = function() {
        return tail
    }

    /**
     * 获取头结点
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
     * 追加结点
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
        tail = node
        length++
        return true
    }

    /**
     * 遍历结点
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
     * 插入结点
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
        // 判断是否尾结点
        if (index === length - 1) {
            node.prev = tail.prev
            node.next = tail
            tail.pre = node
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
        let pre = tail.pre
        pre.next = null
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
        let cur = head, num = 0, pre
        while(num < index) {
            num++
            cur = cur.next
        }
        pre = cur.prev
        pre.next = cur.next
        length--
        return true
    }

    /**
     * 删除指定的元素
     * @param element
     */
    this.removeByElement = function(element) {

    }


}

let doubleLinkedList = new DoubleLinkedList()

doubleLinkedList.append('1')
doubleLinkedList.append('2')
doubleLinkedList.append('3')
