/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let greatest = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= greatest) {
            candies[i] = true;
        } else {
            candies[i] = false;
        }
    }
    return candies;
};

// Problem 1431