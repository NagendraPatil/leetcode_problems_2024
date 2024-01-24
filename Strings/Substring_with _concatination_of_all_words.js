/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let ref = [];
    let len = (words.length * words[0].length);
    let str = 0;
    let wrdlen = words[0].length;
    let newr = [...new Set(words)];
    if (newr.length === 1 && words[0].length === 1) {
        let idxs = s.length - len;
        for (let i = 0; i <= idxs; i++) {
            ref.push(i);
        }
        return ref;
    } else {
        while (len <= s.length) {
            let el = s.substring(str, len);
            let rerel = [];
            for (let i = 0; i < el.length; i = i + wrdlen) {
                rerel.push(el.slice(i, i + wrdlen));
            }
            el = rerel;
            ref.push(str);
            for (let i = 0; i < words.length; i++) {
                let idx = el.findIndex((e) => e === words[i]);
                if (idx === -1) {
                    ref.pop();
                    break;
                } else {
                    rerel[idx] = '';
                }
            }
            str++;
            len++;
        }
        return ref;
    }
};

// Problem 30