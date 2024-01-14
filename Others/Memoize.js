/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let obj = {};
    return function (...args) {
        // console.log(obj)
        let ref = args.toString();
        if (obj.hasOwnProperty(ref)) {
            return obj[ref];
        } else {
            let el = fn(...args);
            obj[ref] = el;
            return el;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
// Problem 2623