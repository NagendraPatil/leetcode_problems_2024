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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let obj = {};
    function getArrs(node, lvl) {
        if (!node) {
            return;
        }
        if (obj[lvl] === undefined) {
            obj[lvl] = [node.val];
        } else {
            obj[lvl].push(node.val);
        }
        let lvl2 = lvl + 1;
        getArrs(node.left, lvl2);
        getArrs(node.right, lvl2);
    }
    getArrs(root, 0);
    // console.log(obj)
    for (let key in obj) {
        if (Number(key) % 2 === 0) {
            for (let i = 0; i < obj[key].length - 1; i++) {
                if (obj[key][i] % 2 === 0 || obj[key][i + 1] % 2 === 0 || obj[key][i] >= obj[key][i + 1]) {
                    return false;
                }
            }
        } else {
            for (let i = 0; i < obj[key].length - 1; i++) {
                // console.log(obj[key][i], obj[key][i + 1])
                if (obj[key][i] % 2 !== 0 || obj[key][i + 1] % 2 !== 0 || obj[key][i] <= obj[key][i + 1]) {
                    return false;
                }
            }
        }
    }
    return true;
};

// Problem 1609