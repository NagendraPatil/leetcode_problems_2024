/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr = [];
    function getEles(root) {
        if (root.left === null && root.right === null) {
            arr.push(root.val);
            return;
        }
        if (root.left) getEles(root.left);
        if (root.right) getEles(root.right);
        return;
    }

    getEles(root1);
    let len = arr.length;
    getEles(root2);
    let len2 = arr.length - len;
    if (len2 !== len) {
        return false;
    }
    for (let i = 0; i < len; i++) {
        if (arr[i] !== arr[len + i]) {
            return false;
        }
    }
    return true;
};

//Problem 872