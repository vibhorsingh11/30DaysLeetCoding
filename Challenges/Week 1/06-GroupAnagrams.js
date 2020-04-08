/**
 Given an array of strings, group anagrams together.
 Example:

    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    Output:
    [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {};
    let arr = [];
    for(let s of strs) {
        // Sorting each element of array
        let temp = s.split('').sort().join('');
        // Checking if the object already contain the property
        if(!obj.hasOwnProperty(temp)){
            // Creating new property 
            obj[temp] = [s];
        } else {
            // Updating already exist property
            obj[temp].push(s);
        }
    }
    // Looping through the object to create an array like output
    for (let o in obj){
       arr.push(obj[o]);
    }
  return arr;
};