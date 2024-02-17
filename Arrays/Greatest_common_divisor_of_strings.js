/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if([...new Set(str1.split(''))].length!==[...new Set(str2.split(''))].length){
        return '';
    }
    let len = Math.min(str1.length, str2.length);
    let op = '';
    for (let i = 0; i < len; i++) {
        if (str1[i] === str2[i]) {
            op += str1[i];        }
    }
    let ref = '';
    if(Math.abs(str1.length-str2.length)===len){
        return op;
    }
    for (let i = 0; i < op.length; i++) {
        if (ref[0]!==op[i]) {
            ref += op[i];
        }else{
            break;
        }
    }
    return ref;
};

// Partial solution