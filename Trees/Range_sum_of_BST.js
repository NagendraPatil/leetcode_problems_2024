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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    if (root === null) {
        return 0;
    }

    let op = 0;
    let left = rangeSumBST(root.left, low, high);
    let right = rangeSumBST(root.right, low, high);
    if (root.val <= high && root.val >= low) {
        op += root.val;
    }
    // console.log(op)
    op += left + right;
    return op;
};
// Problem 938