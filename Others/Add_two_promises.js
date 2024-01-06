/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let el1 = await promise1;
    let el2 = await promise2;
    return el1+el2;
     // return num1 + num2;
 };
 
 /**
  * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  *   .then(console.log); // 4
  */
 //problem 2723