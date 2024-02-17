/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
    let champ = 0;
    let ones = 0;
    for (let i = 0; i < grid.length; i++) {
        let ct = 0
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                ct++;
            }
        }
        if (ones < ct) {
            ones = ct;
            champ = i;
        }
    }
    return champ;
};

// Problem 2963