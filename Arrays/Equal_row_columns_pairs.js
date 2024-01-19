/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    if (grid.length === 1) {
        return 1;
    }
    let columns = new Array(grid.length).fill('');
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (j < grid.length - 1) {
                columns[i] += grid[j][i] + '.';
            } else {
                columns[i] += grid[j][i];
            }
        }
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        grid[i] = grid[i].join('.');
        columns.map((e) => {
            if (e === grid[i]) {
                count++;
            }
            return;
        })
    }
    return count;
};

// Problem 2352