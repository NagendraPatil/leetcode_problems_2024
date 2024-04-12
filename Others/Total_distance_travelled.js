/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
    let usedfuel = 0;
    while (mainTank >= 5) {
        usedfuel += 5;
        mainTank -= 5;
        if (additionalTank >= 1) {
            mainTank += 1;
            additionalTank--;
        }
    }
    return (usedfuel + mainTank) * 10;
};

// Problem 2739