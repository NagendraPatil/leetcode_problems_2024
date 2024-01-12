/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let aliceTotal = aliceSizes.reduce((a,b)=>a+b);
    let bobTotal = bobSizes.reduce((a,b)=>a+b);
    let newSize = Math.abs(aliceTotal-bobTotal)/2;
    // console.log(bobTotal,aliceTotal)
    for(let i=0;i<aliceSizes.length;i++){
        for(let j=0;j<bobSizes.length;j++){
            if(Math.abs(aliceSizes[i]-bobSizes[j])===newSize && (aliceTotal-aliceSizes[i]+bobSizes[j])===(bobTotal-bobSizes[j]+aliceSizes[i])){
                return [aliceSizes[i],bobSizes[j]];
            }
        }
    }
};

// Problem 888