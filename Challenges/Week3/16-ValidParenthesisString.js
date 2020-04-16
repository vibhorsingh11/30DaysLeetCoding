/**
 * Given a string containing only three types of characters: '(', ')' and '*', 
 * write a function to check whether this string is valid. We define the validity of a string by these rules:

    Any left parenthesis '(' must have a corresponding right parenthesis ')'.
    Any right parenthesis ')' must have a corresponding left parenthesis '('.
    Left parenthesis '(' must go before the corresponding right parenthesis ')'.
    '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
    An empty string is also valid.
 */

var checkValidString = function(s) {
    return check(0, s, 0);
};

function check(count, s, idx) {
    if (count < 0) return false;
    if (idx >= s.length) return count === 0;
    
    switch (s[idx]) {
        case "(":
            return check(count + 1, s, idx + 1);
        case ")":
            return check(count - 1, s, idx + 1);
        case "*":
            return check(count + 1, s, idx + 1) || 
                check(count - 1, s, idx + 1) || 
                check(count, s, idx + 1);
    }
};