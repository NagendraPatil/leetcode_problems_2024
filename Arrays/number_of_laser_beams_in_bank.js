//solution 1
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    let count = 0;
    for (let i = 0; i < bank.length - 1; i++) {
        if (bank[i].includes('1')) {
            let nextones = 0;
            let k = i + 1;
            while (k < bank.length && !bank[k].includes('1')) {
                k++;
            }
            if (k > bank.length - 1) {
                k = bank.length - 1;
            }
            // console.log(count, i, bank[i], k, bank[k])
            for (let j = 0; j < bank[k].length; j++) {
                if (bank[k][j] === '1') {
                    nextones++;
                }
            }

            let currones = 0;
            for (let j = 0; j < bank[i].length; j++) {
                if (bank[i][j] === '1') {
                    currones++;
                }
            }
            // console.log(count);
            count = count + (nextones * currones);
        }
    }
    return count;
};

//solution 2 (better tc and sc)

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
    for (let i = 0; i < bank.length; i++) {
        let ones = 0;
        for (let j = 0; j < bank[i].length; j++) {
            if (bank[i][j] === '1') {
                ones++;
            }
        }
        bank[i] = ones;
    }
    let count = 0;
    let current = 0;
    let next = 1;
    while (next < bank.length) {
        if (bank[next] > 0) {
            count += bank[next] * bank[current];
            current = next;
            next++;
        } else {
            next++;
        }
    }
    return count;
};
