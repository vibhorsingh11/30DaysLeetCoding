/**
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

    Example:

    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 /**
 * @param {number[]} nums
 * @return {maxSum}
 */
var maxSubArray = function(nums) {
  // Assigning first index value to variable
  let maxSum = nums[0];
  let partialSum =0;
 
  for (let item = 0; item < nums.length ; item++) { 
    partialSum += nums[item]; 
    // Getting max value 
    maxSum = Math.max(maxSum, partialSum); 
    // Setting partialsum to 0 if it is less than 0
    if (partialSum < 0) partialSum = 0; 
  }  
  return maxSum;
};