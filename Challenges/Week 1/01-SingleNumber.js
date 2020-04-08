/*
    Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    Example 1:

    Input: [2,2,1]
    Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // Assigning first array value to variable
    let singleNumber = nums[0];
    for(let i=1;i<nums.length;i++) {
        // Applying XOR to get the single occurance value
        singleNumber = singleNumber ^ nums[i];
    }
    return singleNumber;
};