/**
 * You are given a string s containing lowercase English letters, and a matrix shift, 
   where shift[i] = [direction, amount]:

    -> direction can be 0 (for left shift) or 1 (for right shift). 
    -> amount is the amount by which string s is to be shifted.
    -> A left shift by 1 means remove the first character of s and append it to the end.
    -> Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
    Return the final string after all operations.
 */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let lShift = 0;
    let rShift = 0;
    // Splitted the string to make it an array for performing operations 
    s = s.split('');
    // Looping through the shift array and storing the number of left shift and right shift needs
    // to be performed on the string s. 
    for(let i=0;i<shift.length;i++) {
        if(shift[i][0] == 0)
            lShift += shift[i][1];
        if(shift[i][0] == 1)
            rShift += shift[i][1];
    }
    // Getting the final shift needs to perfomed on string s
    let count = Math.max(lShift, rShift) - Math.min(lShift, rShift);
    // Knowing which shift to be performed
    let shifts = (lShift > rShift) ? 0 : 1;
    // Doing shift on array whether they are left shift or right shift
    for(let i=0;i<count;i++) {
        if(shifts == 0) {
            s.push(s.shift());
        } else {
            s.unshift(s.pop());
        }
    }
    // Returning the string s after making it an string by using join()
    return s.join('');
};