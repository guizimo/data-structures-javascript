
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
        if (index > length || index < 0) {
            console.error('index error')
            return false
        }
        if (index === 0) {
            node.next = cur
            head = node
            tail.next = head
        } else if (index === length) {
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
        length++
        return true
    }

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
        let cur = head, num = 0
        while (num < length) {
            cur = cur.next
            num++
        }
        let pre = tail.pre
        pre.next = null

        length--
        return true
    }

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

    this.removeByElement = function(element) {

    }


}
