/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let ref = head;
    let arr = [];
    while (ref) {
        arr.push(ref.val);
        ref = ref.next;
    }
    let ref2 = head;
    let idx1 = 0, idx2 = arr.length - 1;
    let pt = idx1;
    while (ref2) {
        if (idx1 === pt) {
            ref2.val = arr[pt];
            idx1++;
            pt = idx2;
        } else {
            ref2.val = arr[pt];
            idx2--;
            pt = idx1;
        }
        ref2 = ref2.next;
    }
    return head;
};

// Problem 143