/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let count = 0;
    let idx = 0;
    let idx2 = 0;
    while (idx < trainers.length) {
        if (trainers[idx] >= players[idx2]) {
            idx++;
            idx2++;
            count++;
        } else {
            idx++;
        }
    }
    return count;
};

// Problem 2410