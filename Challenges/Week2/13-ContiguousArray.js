/**
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

    Example 1:
    Input: [0,1]
    Output: 2
    Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 */

/**
 * Algorithm *
 * In this we will calculate the to 0. As, only 0 & 1 are used. We will loop over the array and set sum = -1
 * when 0 isfound on index value. So, if there is equal number of 0's & 1's in a subarray, 
 * then the sum of them will be equal to 0.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    // Creating a map to store sum and index
    let map = new Map();
    // Setting initial sum and index in map
    map.set(0, -1);  
    // Created variable which will return the max length of sub-array
    let maxLen = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        // Adding to -1 when 0 found else 1
        sum += (nums[i] == 0) ? -1 : 1;
        // If map has the sum already then compare it with current maxLen, else set it in map
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        }
        else {
            map.set(sum, i);
        }
    }  
    return maxLen;
};