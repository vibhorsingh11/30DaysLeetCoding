/**
 * Given an array of integers and an integer k, 
 * you need to find the total number of continuous subarrays whose sum equals to k.
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    // Map to store subarrays 
    let map = new Map();  
    for(let i=0;i<nums.length;i++) {
        // Calculating sum 
        sum += nums[i];
        if(sum == k) {
            count++;
        }
        if (map.has(sum - k))   
            count += map.get(sum - k); 
        
         let num = map.get(sum); 
        if (num == null) 
            map.set(sum, 1); 
        else
            map.set(sum, num+1); 
    }
    return count;
};