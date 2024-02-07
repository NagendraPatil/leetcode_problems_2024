/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let refobj = {};
    for (let i = 0; i < s.length; i++) {
        if (refobj[s[i]] === undefined) {
            refobj[s[i]] = 1;
        } else {
            refobj[s[i]]++;
        }
    }
    let arr = [];
    for (let k in refobj) {
        let str = '';
        for (let i = 0; i < refobj[k]; i++) {
            str += k;
        }
        arr.push(str);
    }
    arr = arr.sort((a,b)=>{return b.length-a.length});
    return arr.join('');
};

// Problem 451