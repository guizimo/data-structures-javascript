/**
 * 单链表
 */
function SingleLinkedList() {
    /**
     * 节点定义
     */
    const Node = function (element) {
        // 节点内容
        this.element = element
        // 节点指针
        this.next = null
    }

    // 链表长度
    let length = 0
    // 链表头节点
    let head = null

    /**
     * 查找节点
     * @description 查找并返回给定节点element的索引值
     * @param {*} element
     * @returns
     */
    this.indexOf = function (element) {
        let cur = head,
            index = 0
        while (cur) {
            if (cur.element === element) {
                return index
            }
            index++
            cur = cur.next
        }
        return -1
    }

    /**
     * 追加节点
     * @description 给链表添加节点
     * @param {*} element
     * @returns
     */
    this.append = function (element) {
        // 转化为节点结构
        let node = new Node(element)
        let cur = null
        if (!head) {
            head = node
        } else {
            cur = head
            while (cur.next) {
                cur = cur.next
            }
            cur.next = node
        }
        length++
        return true
    }

    /**
     * 遍历节点
     * @returns
     */
    this.show = function () {
        let cur = head,
            res = []
        while (cur) {
            res.push(cur.element)
            cur = cur.next
        }
        return res
    }

    /**
     * 获取链表长度
     * @returns
     */
    this.size = function () {
        return length
    }

    /**
     * 获取头节点
     * @returns
     */
    this.getHead = function () {
        return head;
    }

    /**
     * 获取尾节点
     * @returns
     */
    this.getTail = function () {
        let cur = head
        while (cur) {
            cur = cur.next
        }
        return cur
    }

    /**
     * 判断链表是否为空
     * @returns
     */
    this.isEmpty = function () {
        return length === 0
    }

    /**
     * 插入节点
     * 根据指定的索引插入节点
     * @param {*} index
     * @param {*} element
     * @returns
     */
    this.insert = function (index, element) {
        let cur = head,
            pre, num = 0,
            node = new Node(element)
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }

        if (index === 0) {
            node.next = cur
            head = node
        } else {
            while (cur) {
                if (num === index) {
                    node.next = cur
                    pre.next = node
                    length++
                    return true
                }
                num++
                pre = cur
                cur = cur.next
            }
        }
        length++
        return true
    }

    /**
     * 删除尾节点
     * @returns
     */
    this.removeTail = function () {
        if (!head) {
            console.error('head is null')
            return false
        }
        if (length === 1) { // 最后一个节点
            head = null
            length = 0
            return true
        }
        let cur = head,
            pre = null,
            num = 0
        while (cur) {
            if (!cur.next) {
                if (num === 0) {
                    head = null
                } else {
                    pre.next = null
                }
                length--
                return true
            }
            num++
            pre = cur
            cur = cur.next
        }
        length--
        return true
    }

    /**
     * 删除指定的元素
     * 根据传入的元素删除链表中的元素
     * @param {*} element
     * @returns
     */
    this.removeByElement = function (element) {
        if (!head) {
            console.error('head is null')
            return false
        }
        let cur = head,
            pre = null
        if (head.element === element) {
            head = cur.next
            length--
            return true
        } else {
            while (cur) {
                if (cur.element === element) {
                    pre.next = cur.next
                    length--
                    return true
                }
                pre = cur
                cur = cur.next
            }
        }
        return false
    }

    /**
     * 删除指定的索引的元素
     * 根据传入的索引删除链表中的元素
     * @param {*} index
     * @returns
     */
    this.removeByIndex = function (index) {
        // 检查index
        if (index > length - 1 || index < 0) {
            console.error('index error')
            return false
        }
        let cur = head,
            pre = null,
            num = 0
        if (index === 0) {
            head = cur.next
        } else {
            while (cur) {
                if (num === index) {
                    pre.next = cur.next
                    length--
                    return true
                }
                num++
                pre = cur
                cur = cur.next
            }
        }
        length--
        return true
    }

}

