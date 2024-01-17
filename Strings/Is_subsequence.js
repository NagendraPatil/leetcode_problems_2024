/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (t.length == 0) {
        if (s.length === 0) {
            return true;
        }
        return false;
    }
    if (s.length === t.length && s.length === 1) {
        if (s[0] === t[0]) {
            return true;
        } else {
            return false;
        }
    }

    let arr = [-1];
    let id = t.indexOf(s[0]);
    t = t.substring(id, t.length);
    t = t.split('');
    let ref = [];
    for (let i = 0; i < t.length; i++) {
        if (s.includes(t[i])) {
            ref[i] = t[i];
        }
    }
    t = ref.join('').split('');
    // console.log(t);
    if (t.length < s.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        let idx = t.indexOf(s[i]);
        // console.log(s[i])
        if (idx >= 0) {
            if (idx > arr[arr.length - 1]) {
                arr.push(idx);
                t[idx] = 1;
            } else {
                t[idx] = 2;
                i--;
            }
        }
    }
    if(arr.length !== s.length+1){
        return false;
    }
    // console.log(arr, s, t);
    if (arr.length >= s.length) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
    return false;

    // OR
    // let idx = 0;
    // for (let i = 0; i < t.length; i++) {
    //     if (s[idx] === t[i]) {
    //         idx++;
    //     }
    // }
    // if (idx === s.length) {
    //     return true;
    // }
    // return false;
};

// Problem 392
