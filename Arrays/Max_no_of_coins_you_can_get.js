/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles = piles.sort((a, b) => a - b);
    let st = 0;
    let ed = piles.length - 1;
    let count = 0;
    while (st < ed) {
        count += piles[ed - 1];
        ed -= 2;
        st++;
    }
    return count;
};