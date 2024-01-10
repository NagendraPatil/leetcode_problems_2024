/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// let ele;
var createCounter = function (init) {
    let ele = init;
    return {
        increment: () => {
            return ++ele;
        },
        decrement: () => {
            return --ele;
        },
        reset: () => {
            ele = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
//Problem 2665