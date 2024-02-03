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
var deleteMiddle = function (head) {
    if (!head.next) {
        return null;
    }
    let eles = [];
    function getLen(node) {
        if (node) {
            eles.push(node.val);
            getLen(node.next)
        }
    }
    getLen(head);
    let len = Math.floor(eles.length / 2);
    let ref = { val: 0, next: null };
    eles.splice(len, 1)
    function createList(obj, idx) {
        if (!obj) {
            return;
        }
        obj.val = eles[idx];
        idx += 1;
        if (idx < eles.length) {
            obj.next = { val: 0, next: null };
            createList(obj.next, idx)
        } else {
            obj.next = null;
        }

    }
    createList(ref, 0);
    // console.log(ref);
    return ref;
};

//Problem 2095