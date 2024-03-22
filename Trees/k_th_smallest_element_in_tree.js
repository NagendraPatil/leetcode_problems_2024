/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ref = [];
    function getAllTreeVals(node) {
        if (!node) {
            return;
        }
        ref.push(node.val);
        getAllTreeVals(node.left);
        getAllTreeVals(node.right);
    }
    getAllTreeVals(root);
    ref.sort((a, b) => a - b);
    return ref[k-1];
};

// Problem 230