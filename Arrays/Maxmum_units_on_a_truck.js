/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    // console.log(boxTypes)
    let op = 0;
    let idx = 0;
    while (truckSize > 0 && idx<boxTypes.length) {
        if (truckSize >= boxTypes[idx][0]) {
            op += boxTypes[idx][0] * boxTypes[idx][1];
            truckSize -= boxTypes[idx][0];
        } else {
            op += truckSize * boxTypes[idx][1];
            truckSize = 0;
        }
        idx++;
    }
    return op;
};

// Problem 1710