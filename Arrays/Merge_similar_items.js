/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    items1 = [...items1, ...items2];
    items1.sort((a, b) => a[0] - b[0]);
    let ret = [];
    for (let i = 0; i < items1.length-1; i++) {
        if (items1[i][0] === items1[i + 1][0]) {
            ret.push([items1[i][0], items1[i][1] + items1[i + 1][1]]);
            i++;
        } else {
            ret.push(items1[i]);
        }
    }
    if(ret[ret.length-1][0]!==items1[items1.length-1][0]){
        ret.push(items1[items1.length-1])
    }
    return ret;
};

// Problem 2363