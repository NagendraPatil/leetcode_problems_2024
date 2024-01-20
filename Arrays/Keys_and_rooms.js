/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let arr = new Array(rooms.length).fill(false);
    arr[0] = true;
    goDeep(rooms, 0);
    function goDeep(ref, i) {
        if (ref[i].length) {
            for (let j = 0; j < ref[i].length; j++) {
                if (!arr[ref[i][j]]) {
                    arr[ref[i][j]] = true;
                    goDeep(ref, ref[i][j]);
                }

            }
        } else {
            return;
        }
    }
    arr = [...new Set(arr)];
    if (arr.length > 1) {
        return false;
    } else {
        return arr[0];
    }
};

// Problem 841