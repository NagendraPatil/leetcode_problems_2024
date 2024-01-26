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
    if(!head){
            return head;
    }
let start = null;
let newlist = {};
let curr = head;
    while(curr.next!==null){
            newlist.val = curr.val;
            newlist.next = start;
            curr = curr.next;
            start = newlist;
            newlist = {};
    }
    newlist.val = curr.val;
            newlist.next = start;
            curr = curr.next;
            start = newlist;
    return start;
};

//Problem 206