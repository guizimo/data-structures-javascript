![双向链表](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.png)

## 引言

>  双向链表是计算机科学中常见的一种数据结构，它由一系列节点组成，每个节点包含两个指针，一个指向前一个节点，一个指向后一个节点。相比于单向链表，双向链表可以在节点之间进行双向遍历，从而使得一些操作更加高效。
>
>  双向链表是计算机科学中的基础数据结构之一，它在许多算法和应用中都有广泛的应用。比如，在操作系统中，进程控制块就是通过双向链表来组织的；在文本编辑器中，用于实现撤销和重做操作的编辑历史也可以使用双向链表来实现。此外，双向链表还可以用于实现高效的LRU缓存算法、模拟游戏中的角色列表等。
>
>  在本篇文章中，我们将深入探讨双向链表的原理、特点、实现和应用。我们将详细介绍如何实现双向链表的插入、删除、遍历等操作，并讨论一些常见的应用场景和算法。通过本文的学习，读者将能够更深入地理解双向链表的工作原理，掌握如何使用双向链表来解决实际问题。



## 1、什么是双向链表

双向链表（Doubly Linked List）是一种常见的数据结构，它由一系列节点组成，每个节点包含两个指针，一个指向前一个节点，一个指向后一个节点。相比于单向链表，双向链表可以在节点之间进行双向遍历。

双向链表的头节点通常包含一个指向第一个节点和最后一个节点的指针。在插入和删除节点时，双向链表可以通过修改前后节点的指针来实现高效的操作，不需要像单向链表那样需要遍历整个链表找到前一个节点。但是，相比于单向链表，双向链表占用更多的存储空间，因为每个节点需要存储两个指针。

双向链表在许多场景下都有广泛的应用，例如实现LRU Cache缓存、实现文本编辑器中的撤销和重做操作、实现游戏中的角色列表等。

## 2、节点的结构

![image-20230518162125684](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20230518162125684.png)

## 3、双向链表



![image-20230518182807605](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20230518182807605.png)





## 4、构造一个单链表的数据结构

### 4.1、节点

```javascript
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
```

### 4.2、追加节点

```javascript
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
    tail = node
    length++
    return true
}
```

### 4.3、获取链表的长度

```javascript
/**
 * 获取链表的长度
 * @returns
 */
this.size = function() {
    return length
}
```

### 4.4、获取尾节点

```javascript
/**
 * 获取尾节点
 * @returns
 */
this.getTail = function() {
    return tail
}
```

### 4.5、获取头节点

```javascript
/**
 * 获取头节点
 * @returns
 */
this.getHead = function() {
    return head
}
```



4.2、判断链表是否为空

```javascript
/**
 * 判断链表是否为空
 * @returns
 */
this.isEmpty = function() {
    return length === 0
}
```



4.2、遍历节点

```javascript
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
```





4.2、插入节点

```javascript
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
```



4.2、遍历节点

```javascript
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
```





4.2、遍历节点

```javascript
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
```





4.2、遍历节点

```javascript
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
```







4.2、判断链表是否为空

```javascript
/**
 * 判断链表是否为空
 * @returns
 */
this.isEmpty = function() {
    return length === 0
}
```



