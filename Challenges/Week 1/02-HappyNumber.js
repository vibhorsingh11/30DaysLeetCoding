/**
 * Write an algorithm to determine if a number n is "happy".

    A happy number is a number defined by the following process: Starting with any positive integer, replace 
    the number by the sum of the squares of its digits, and repeat the process until the number equals 1 
    (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which 
    this process ends in 1 are happy numbers.

    Return True if n is a happy number, and False if not.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // Running the loop till n greater than 9
    while(n > 9) {
        // Converting number to array of string
        let num = Array.from(n + "",Number);   
        // Using Array.reduce to get the sum each time each digit of number is squared
        n = num.reduce((acc,digit) => 
            acc + (digit*digit)
         ,0);
    }
    // Checking if n is eqaul to 1 or 7(it will result in 1)
    return (n == 7 || n == 1) ? true : false;
};