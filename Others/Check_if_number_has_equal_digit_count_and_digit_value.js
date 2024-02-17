/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    for (let i = 0; i < num.length; i++) {
        let ct = 0;
        for (let j = 0; j < num.length; j++) {
            // console.log(num[j],i)
            if (num[j] == i) {
                ct++;
            }
        }
        // console.log(ct, num[i])
        if (ct != num[i]) {
            return false;
        }
    }
    return true;
};

// Problem 2283