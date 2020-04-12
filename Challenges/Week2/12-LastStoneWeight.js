/**
 * We have a collection of stones, each stone has a positive integer weight.

    Each turn, we choose the two heaviest stones and smash them together. 
    Suppose the stones have weights x and y with x <= y.  The result of this smash is:

    If x == y, both stones are totally destroyed;
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // Return 0 or last element if single or no element is found
    if(stones.length <= 1){
        return (stones.length == 1) ? stones[0] : 0 ;
    }
    // Sort the array
    stones.sort((a,b) => {return a-b});
    // Find the max weight element
    let maxWeightStone = stones[stones.length - 1];
    // Removing the element from the array
    stones.pop();    
    // Find the second max weight element
    let secondMaxWeightStone = stones[stones.length - 1];
    // Removing the element from the array
    stones.pop();
    // Comparing two max elements and returning 0 if there values are same Or 
    // else returnig the difference of the values
    let temp = (maxWeightStone == secondMaxWeightStone) ? 0 : maxWeightStone - secondMaxWeightStone;
    // If the element is not equal to 0 then add the element to array
    if(temp != 0)
        stones.push(temp);
    // Calling the function recursively with the obtained difference value
    return lastStoneWeight(stones); 
};