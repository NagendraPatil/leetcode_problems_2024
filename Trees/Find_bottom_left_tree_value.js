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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let op = {};
    let ele = '1';
    function getLeft(node, lvl) {
        if (!node) {
            return;
        }
        if (op[lvl] === undefined) {
            op[lvl] = [node.val];
        } else {
            op[lvl].push(node.val);
        }
        let lvl2 = lvl + 1;
        if (ele) {
            ele = lvl2.toString();
        }
        getLeft(node.left, lvl2);
        getLeft(node.right, lvl2);
    }
    getLeft(root, 1);
    return (Object.values(op)[Object.values(op).length-1][0])
};

// Problem 513