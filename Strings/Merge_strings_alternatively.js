/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let op = '';
    let max = Math.max(word1.length, word2.length);
    for (let i = 0; i < max; i++) {
        if (word1[i]) {
            op += word1[i];
        }
        if (word2[i]) {
            op += word2[i];
        }
    }
    return op;
    // let op = '';
    // let len = Math.min(word1.length, word2.length);
    // let idx = 0;
    // while (idx <= len) {
    //     if (idx === len) {
    //         op += word1.substring(idx, word1.length) + word2.substring(idx, word2.length);
    //     } else {
    //         op += word1[idx] + word2[idx];
    //     }
    //     idx++;
    // }
    // return op;
};