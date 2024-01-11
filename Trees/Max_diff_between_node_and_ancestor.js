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
var maxAncestorDiff = function (root) {
    let ref = [];
    function getDiffs(node, prev) {
        if (node === null) {
            prev.pop()
            return null;
        }
        // console.log('')
        if (prev.length) {
            ref.push(Math.abs(node.val - Math.min(...prev)));
            ref.push(Math.abs(node.val - Math.max(...prev)));
        }
        prev.push(node.val);
        getDiffs(node.left, [...prev]);
        getDiffs(node.right, [...prev]);
    }

    getDiffs(root, []);
    // console.log(ref);
    return Math.max(...ref);
};

// Problem 1026