/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let op = [];
    let ref = [];

    function getOccurance(num, idx, len) {
        if (len === 0) {
            // console.log(ref)
            op.push([...ref]);
            return;
        }

        for (let i = idx; i <= num; ++i) {
            ref.push(i);
            getOccurance(num, i + 1, len - 1);
            ref.pop();
        }
    }

    getOccurance(n, 1, k);
    return op;
};

// Problem 77