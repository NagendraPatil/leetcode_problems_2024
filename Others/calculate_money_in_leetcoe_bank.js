/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let count = 0;
    let strt = 1;
    let ref = 1;
    while (n) {
        if (n % 7 === 0) {
            ref++;
            strt = ref;
        }
        count += strt;
        strt++;
        n--;
    }
    return count;
};