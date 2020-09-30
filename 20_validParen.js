
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        '}' : '{',
        ']' : '[',
        ')' : '('
    }
    
    let stack = [];
    for(let i = 0 ; i< s.length; i++) {
        if(obj[s[i]]) {
            let val = stack.pop();
            if(obj[s[i]] !== val) return false;
        } else {
            stack.push(s[i]);
        }
    }
    
    return (stack.length === 0);
};