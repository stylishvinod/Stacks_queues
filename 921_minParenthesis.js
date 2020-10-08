

// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let open = 0;
    let result = 0;
    
    for(let i = 0 ; i< S.length ;i++) {
        if(S[i] === '(') {
            open++
        } else {
            open > 0 ? open-- : result++;
        }
    }
    
    return result + open;
    
};