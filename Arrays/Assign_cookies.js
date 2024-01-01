/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0;
    g = g.sort((a,b)=>a-b);
    s = s.sort((a,b)=>a-b);
    for(let i=g.length-1;i>=0;i--){
        let idx = s.findIndex((e)=>e>=g[i]);
        if(idx>=0){
            count++;
            // console.log(s[idx],g[i])
            s[idx] = -2;
        }
    }
    return count;
};