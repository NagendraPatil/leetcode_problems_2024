/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {};
    for(let i=0;i<this.length;i++){
        if(obj[fn(this[i])]===undefined){
            obj[fn(this[i])] = [this[i]];
        }else{
            obj[fn(this[i])].push(this[i]);
        }
    }
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Problem 2631