/**
 Given an integer array arr, count element x such that x + 1 is also in arr.
    If there're duplicates in arr, count them seperately.

    Example 1:
    Input: arr = [1,2,3]
    Output: 2
    Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count = 0;
    // Copying array in Set
    let set = new Set([...arr])
    // Iterating over the array and checking in Set if number greater than current element exist.
    // If Exist then increament the count.
    for(let ele of arr) {
        if(set.has(ele+1)){
            count++;
        }
    }
    return count;
};