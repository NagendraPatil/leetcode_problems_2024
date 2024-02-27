/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    function decToBin(n) {
        let ref = n;
        let binDigit = '';
        while (ref >= 1) {
            if (ref % 2 === 0) {
                binDigit += '0';
            } else {
                binDigit += '1';
            }
            ref = Math.floor(ref / 2);
        }
        return binDigit;
    }
    function binToDec(n) {
        let numsArr = n.split('').map(Number);
        let op = 0;
        for (let i = 0; i < numsArr.length; i++) {
            if (numsArr[i] === 0) {
                op += (2 ** i) * 1;
            }
        }
        return op;
    }

    let toBin = decToBin(num);
    let op = binToDec(toBin);
    return op;
};

// Problem 476