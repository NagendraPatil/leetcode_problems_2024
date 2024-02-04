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
var oddEvenList = function (head) {
    let list1 = [];
    let list2 = [];
    function getLists(node, count) {
        if (node && count % 2 === 0) {
            list2.push(node.val);
            count += 1;
            getLists(node.next, count)
        } else if (node && count % 2 === 1) {
            list1.push(node.val);
            count += 1;
            getLists(node.next, count);
        }
    }
    getLists(head, 1)
    list1 = [...list1, ...list2];
    list2 = [];
    function updateList(node, count) {
        if (count < list1.length) {
            node.val = list1[count];
            count += 1;
            updateList(node.next, count);
        }
    }
    updateList(head, 0);
    return head;
};

// Problem 328