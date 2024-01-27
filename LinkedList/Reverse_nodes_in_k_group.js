/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let ref = [];
    function getVal(node) {
        if (node) {
            ref.push(node.val);
            getVal(node.next);
        }
    }
    getVal(head);
    function reverseSub(l, s) {
        while (l < s) {
            let temp = ref[l];
            ref[l] = ref[s];
            ref[s] = temp;
            l++;
            s--;
        }
    }
    for (let i = 0; i < ref.length; i = i + k) {
        if (i < ref.length - k + 1) {
            reverseSub(i, i + k - 1);
        }
    }
    function updateHead(node, idx) {
        if (node) {
            node.val = ref[idx];
            idx++;
            updateHead(node.next, idx);
        }
    }
    updateHead(head, 0);
    return head;
};

// Problem 25