
// https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/
/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    
    let open = 0;
    let result = 0
    
    for(let i = 0 ; i< s.length; i++) {
        // if we find opne increment open
        if(s[i] === '(') {
            open++;
        } else {
            // if not open that is close brace
            //1. check if open already exists, then simple decrement open
            // else we need corresponding open so increment result
           open > 0 ? open-- : result++;
            
            //2. chekc next element is also opne
            // if yes skip that element else increment result;
            s[i+1] === ')' ? i++ : result++;
            
        }
        
    }
    
    return result + 2 * open;
};