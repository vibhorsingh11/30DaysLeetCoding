/**
 * Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let total=1, zero = 0 ;
    // Finding the total of array
    for(let a of nums){
        // If index value in array is not equal to 0 then multiply all values
      if(a!= 0){
         total *= a;
        }
      else{
          // Increase the count of zeros
         zero++;
        }
    }
    // If there is more than 1 zero then total will be 0 
    if(zero>1) total = 0;
    
    for(let i=0; i<nums.length ; i++){
      // If first value is 0 then replace it with total
      if(nums[i]==0){
        nums[i] = total;
      }
      // if there are 0 on other index also then replace the value with 0
      else if(zero){
          nums[i] = 0;
        }
      else {
        nums[i] = total/nums[i];
      }
    }
    return nums;
};
