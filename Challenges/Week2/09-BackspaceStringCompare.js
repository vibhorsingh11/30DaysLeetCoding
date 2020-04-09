/**
 Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

    Example 1:

    Input: S = "ab#c", T = "ad#c"
    Output: true
    Explanation: Both S and T become "ac".
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    // Converting strings into Array
    let nS = S.split("");
     let nT = T.split("");    
      for(let i=1; i<nS.length ; i++){
        // Check if index value is equal to "#" then remove that part
        if(nS[i]=="#"){
            nS.splice(i-1,2);            
            if(i!=1){
              i--;  
            }   
            i--;
        }
    }
    // Removing "#" if it occurs at index 0
    S = nS.join("").replace("#","");
    for(let i=1; i<nT.length ; i++){
        // Check if index value is equal to "#" then remove that part
        if(nT[i]=="#"){
            nT.splice(i-1,2);            
            if(i!=1){
              i--;  
            }   
            i--;
        }
    }
    // Removing "#" if it occurs at index 0
    T = nT.join("").replace("#","");
    return (S==T);
};