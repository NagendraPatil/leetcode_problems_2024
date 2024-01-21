/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let s = 1;
    let e = n;
    let op = 0;
    console.log(n)
    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);
        let ref = guess(mid);
        // console.log(ref,s,e,mid)
        if (ref === 0) {
            op = mid;
            break;
        } else if (ref > 0) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }
    return op;
};

// Problem 374