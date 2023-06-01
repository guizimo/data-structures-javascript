![单链表](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/%E5%8D%95%E9%93%BE%E8%A1%A8.png)

## 引言

> 🛹 **AI说：**
>
> 单链表是一种数据结构，用于在内存中存储和操作数据。在前端中，单链表常常用于实现一些常见的算法和数据结构，例如栈、队列和哈希表等。 
>
> 单链表比较灵活，因为它允许你在任意时间添加或删除元素，且不需要移动其他元素。这使得单链表成为一个非常强大的工具，可以用来处理各种不同的问题，如排序、搜索和过滤数据。 
>
> 在前端编程中，单链表也被用来实现一些UI组件和动画，比如轮播图和进度条等。因此，学习和了解单链表也会提高你的编程技能和思维能力，使你更加灵活和高效地解决问题。

## 1、什么是单链表

单链表是一种**链式存取的数据结构**，用一组地址任意的存储单元存放线性表中的数据元素。链表中的数据是以**节点**来表示的。

每个节点的构成：元素(数据元素的映象) + 指针(指示后继元素存储位置)，元素就是存储数据的存储单元，指针就是连接每个节点的地址数据。

## 2、节点的结构

首先来看一张图，会比较直观。

![节点结构](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20230518151410321.png)

链表通过每个节点的链域将线性表的n个节点按其逻辑顺序链接在一起，每个节点只有一个链域的链表被称为单链表（Single Linked List）。

## 3、单链表的头指针head和终端节点

单链表中每个节点的存储地址是存放在其前趋节点next域中，而开始节点无前趋，故应设头指针head指向开始节点。

![image-20230518161648420](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/image-20230518161648420.png)

链表由头指针唯一确定，单链表可以用头指针的名字来命名。

终端节点无后继，故终端节点的指针域为空，即NULL。

## 4、单链表的优点和缺点

- **优点**：插入和删除节点的操作非常高效，时间复杂度为O(1)，同时可以动态地添加或删除节点。
- **缺点**：访问单链表中的任意节点时，需要从头节点开始遍历整个链表，时间复杂度为O(n)，因此不适用于随机访问。

下面是一个示例单链表的结构：

```
+---+    +---+    +---+    +---+    +----+
| 1 | -> | 2 | -> | 3 | -> | 4 | -> |null|
+---+    +---+    +---+    +---+    +----+
```

在上面的示例中，每个节点都包含了一个数据元素和一个指向下一个节点的指针。从第一个节点开始，我们可以通过指针依次访问链表中的每个节点，直到最后一个节点。

单链表的实现通常使用一个头节点（Head Node），头节点不包含任何数据，只是用来标识链表的起始位置。在插入和删除节点时，我们通常需要从头节点开始遍历链表，找到要操作的节点。

## 5、构造一个单链表的数据结构

明白了单链表的数据结构之后，来尝试构造一个单链表。

### 5.1、节点

```js
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
```

### 5.2、添加节点

**思路**

1、找到头节点

2、通过头节点遍历到尾节点

3、插入新的节点

**代码**

```js
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
```

### 5.3、获取头节点

```js
/**
 * 获取头节点
 * @returns 
 */
this.getHead = function(){
    return head;
}
```

### 5.4、获取链表长度

```js
/**
 * 获取链表长度
 * @returns 
 */
this.size = function() {
    return length
}
```

### 5.5、遍历节点

```js
/**
 * 遍历节点
 * @returns 
 */
this.show = function() {
    let res = []
    while (head) {
        res.push(head.element)
        head = head.next
    }
    return res
}
```

### 5.6、查找节点

查找并返回给定节点element的索引值

```js
/**
 * 查找节点
 * @description 查找并返回给定节点element的索引值
 * @param {*} element 
 * @returns 
 */
this.indexOf = function(element) {
    let cur = head, index = 0
    while (cur) {
        if (cur.element === element) {
            return index
        }
        index++
        cur = cur.next
    }
    return -1
}
```

### 5.7、获取尾节点

```js
this.getTail = function() {
	let cur = head
	while(cur) {
		if(!cur.next) {
			return next
		}
	 	cur = cur.next
	}
	return cur
}
```

### 5.8、插入节点

```javascript
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
```

### 5.9、删除尾节点

```javascript
/**
 * 删除尾节点
 * @returns
 */
this.removeTail = function () {
    if (!head) {
        console.error('head is null')
        return false
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
```

### 5.10、删除指定的元素

```javascript
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
```

### 5.11、删除指定的索引的元素

```javascript
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
```

### 5.12、完整代码

**代码**

[single-linked-list.js](https://github.com/guizimo/data-structures-javascript/blob/main/code/linked-list/single-linked-list.js)

**测试**

[single-linked-list.test.js](https://github.com/guizimo/data-structures-javascript/blob/main/test/linked-list/single-linked-list.test.js)

## 6、单链表必刷题库

**思路**

1、**双指针**解法

2、**虚拟头节点**

3、归并排序

4、快慢指针

### [707. 设计链表](https://leetcode.cn/problems/design-linked-list/)

### [21. 合并两个有序链表 ](https://leetcode-cn.com/problems/merge-two-sorted-lists/)【简单】

这道题是链表的基本操作

**题目**

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

**示例**

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

**思路**

1、创建一个虚拟头节点dummy，一个移动指针，初始指向dummy节点

2、 while 循环每次比较 `l1` 和 `l2` 的大小，把较小的节点接到结果链表p上

3、后续会剩下一个未处理的，需要判断

4、返回虚拟头节点的下一个节点

**图解**

[LeetCode题解](https://leetcode.cn/problems/merge-two-sorted-lists/solution/by-guizimo-ay6b/)

![test](https://guizimo.oss-cn-shanghai.aliyuncs.com/img/test.gif)

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 创建虚拟头节点
    const dummy = new ListNode(-1)
    // 移动指针
    let p = dummy
    // 循环，将值较小的的节点接到 p 指针
    while(list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            p.next = list2
            list2 = list2.next
        } else {
            p.next = list1
            list1 = list1.next
        }
        p = p.next
    }
    // 处理最后一个未处理的
    if (list1 !== null) p.next = list1
    if (list2 !== null) p.next = list2
    // 放回虚拟头节点的下一个位置，也就是头节点的位置
    return dummy.next
};
```

### [23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)【困难】

这是一个`hard`的题，刚好可以看看从`low`到`hard`，看看题目变化了多少。

**题目**

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

**示例**

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

**思路**

这道题同上一道题目类似。甚至可以利用上一道题的解题思路。

将k个最终转化为两个，可用用到**归并排序**。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    return mergeList(lists, 0, lists.length - 1)

};

// 并归排序
function mergeList(list, start, end) {
  	// 相等则k为奇数个时
    if (start === end) return list[start]
  	// 计算中间值
    const mid = start + ((end - start) >> 1)
    const leftList = mergeList(list, start, mid)
    const rightList = mergeList(list, mid + 1, end)
    return merge(leftList, rightList)
}

// 合并两个升序链表
function merge(list1, list2) {
    // 虚拟头节点
    let dummy = new ListNode(0)
    // 当前节点
    let temp = dummy
    while(list1 && list2) {
        if (list1.val <= list2.val) {
            temp.next = list1
            list1 = list1.next
        } else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }
  	// 处理剩余的
    temp.next = list1 ? list1 : list2
    return dummy.next
}
```

#### [19. 删除链表的倒数第 N 个节点【中等】](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

**题目**

给你一个链表，删除链表的倒数第 `n` 个节点，并且返回链表的头节点。

**示例**

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

**进阶：**你能尝试使用一趟扫描实现吗？

**思路**

如果没有限制的话，一次遍历获取链表的长度，第二次遍历获取到倒数的第n个节点。

采用一次扫描。考虑使用双指针——快慢指针来解决问题。假定链表长度为k。

1、倒数第n个节点，也就是`k - n + 1`的位置。

2、快指针指向头节点，当快指针到n的位置时，慢指针开始移动。

3、此时快指针距离链表的尾部的距离时`k - n`，那么慢指针的和快指针保持同步的话，移动的距离也是`k - n`，它此时的位置就`k - n + 1`。

4、删除当前节点，返回头节点就好。

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 定义快慢指针
    let fast = slow = pre = head
    // 快指针先移动n步
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    // 长度为1时
    if (!fast) {
        return head.next
    }
    // 此时保持快慢指针同步，快指针到结尾时，慢指针已找到
    while (fast) {
        pre = slow
        fast = fast.next
        slow = slow.next
    }
    // 删除节点
    pre.next = slow.next
    return head
};
```

#### [876. 链表的中间节点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

**题目**

给定一个头节点为 head 的非空单链表，返回链表的中间节点。

如果有两个中间节点，则返回第二个中间节点。

**示例**

```
输入：[1,2,3,4,5]
输出：此列表中的节点 3 (序列化形式：[3,4,5])
返回的节点值为 3 。 (测评系统对该节点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
```

**思路**

1、因为链表无法初始知道链表的长度，所以还是得看双指针

2、快慢指针都指向head，当快指针走两步，慢指针走一步，当快指针走完之后，慢指针指向中间节点

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
```

#### [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

**题目**

给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。

**示例**

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**思路**

1、判断链表是否有环也可以使用双指针的方式

2、快慢指针同时指向head，快指针走两步，慢指针走一步，当快指针与慢指针相遇时，说明有环。

3、因为快指针比慢指针速度快，如果存在环，那么始终会追上。

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) {
            return true
        }
    }
    return false
};
```

#### [142. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

**题目**

给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

**示例**

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

**思路**

1、这题相比环形链表多了一个条件，需要找到环的起点。

2、当第一次快慢指针相遇时，让其中一个节点指向头节点，然后让它们的速度相同，再次相遇的时候就是环的起点。

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = slow = head
    // 第一次相遇
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) break
    }
    // 判断fast是否为空
    if (!fast || !fast.next) {
        return null
    }
    // 让slow重新指向head
    slow = head
    while (slow !== fast) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};
```

#### [160. 相交链表](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)

**题目**

给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 。

**示例**

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

**思路**

1、两个链表的长度不一样，需要做到同步的话，可以`遍历A链表->B链表`与`遍历B链表->A链表`

2、判断这时的链表是否有相等

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA, p2 = headB
    while (p1 !== p2) {
        if (p1) {
            p1 = p1.next
        } else {
          	// A + B
            p1 = headB
        }
        if (p2) {
            p2 = p2.next
        } else {
            // B + A
            p2 = headA
        }
    }
    return p1
};
```

#### [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

**题目**

给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表。

**示例**

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

**思路**

1、使用递归解法，首先需要明白将head.next.next = head

2、标记head.next = null

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head
    }
    let last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
};
```

#### [92. 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

**题目**

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

**示例**

```
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

**思路**

1、可以分解题目

2、当left为1时是求前面链表的反转

3、使用迭代完成反转

**代码**

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (left === 1) { 
        return reversN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};

// 创建一个后继节点
let suc = new ListNode(null)
// 反转前面的节点
function reversN(head, n) {
    if (n === 1) {
        suc = head.next
        return head
    }
    let last = reversN(head.next, n - 1)
    head.next.next = head
    head.next = suc
    return last
}
```

#### [25. K 个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

**题目**

给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

**进阶**

你可以设计一个只使用常数额外空间的算法来解决此问题吗？
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

**示例**

```
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

**思路**



**代码**

```

```

