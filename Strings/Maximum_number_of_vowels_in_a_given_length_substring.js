/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let count = 0;
    let ref = 0;
    let newref = 0;
    let maxSoFar = 0;
    for (let i = 0; i < s.length; i++) {
        ref = i;
        if (ref >= k) {
            if (maxSoFar >= k) {
                return k;
            }
            newref = ref-k;
            if (s[newref] === 'a' || s[newref] === 'e' || s[newref] === 'i' || s[newref] === 'o' || s[newref] === 'u') {
                count--;
            }
        }
        if ((s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u')) {
            count++;
            if (maxSoFar < count) {
                maxSoFar = count;
            }
        }
        if (maxSoFar >= k) {
            return k;
        }
    }
    return maxSoFar;
};

//Problem 1456 - solution is better than 92% of JS submissions.