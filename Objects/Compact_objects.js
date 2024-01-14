/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    let op;
    function getRes(ob) {
        if (ob.length) {
            let res = [];
            for (let i = 0; i < ob.length; i++) {
                if ((typeof ob[i] !== 'object' && Boolean(ob[i]))) {
                    res.push(ob[i]);
                } else if ((ob[i] !== null && typeof ob[i] === 'object')) {
                    if (ob[i].length === 0 || Object.keys(ob[i]).length === 0) {
                        res.push(ob[i]);
                    } else {
                        res.push(getMore(ob[i]));
                    }
                }
            }
            op = res;
        } else if (ob.length === 0) {
            op = [];
        } else {
            let res = {};
            for (let key in ob) {
                if (typeof ob[key] !== 'object' && Boolean(ob[key])) {
                    res[key] = ob[key];
                } else if (ob[key] !== null && typeof ob[key] === 'object') {
                    if (Array.isArray(ob[key])) {
                        res[key] = getMore(ob[key]);
                    } else {
                        res[key] = getMoreOb(ob[key]);
                    }
                }
            }
            op = res;
        }
    }

    function getMoreOb(ob) {
        let res = {};
        for (let key in ob) {
            if (typeof ob[key] !== 'object' && Boolean(ob[key])) {
                res[key] = ob[key];
            } else if (ob[key] !== null && typeof ob[key] === 'object') {
                if (Array.isArray(ob[key])) {
                    res[key] = getMore(ob[key]);
                } else {
                    res[key] = getMoreOb(ob[key]);
                }
            }
        }
        return res;
    }

    function getMore(val) {
        // console.log(val)
        if (val.length) {
            let res = [];
            for (let i = 0; i < val.length; i++) {
                if ((typeof val[i] !== 'object' && Boolean(val[i]))) {
                    res.push(val[i]);
                } else if (val[i] !== null && typeof val[i] === 'object') {
                    if (Array.isArray(val[i])) {
                        if (val[i].length === 0 || Object.keys(val[i]).length === 0) {
                            res.push(val[i]);
                        } else {
                            res.push(getMore(val[i]));
                        }
                    } else {
                        res.push(getMoreOb(val[i]));
                    }
                }
            }
            return res;
        }
    }

    getRes(obj);
    return op;
};

// Problem 2705