// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    helper(result, n, n, '');
    return result;
    
};


function helper(result, open, close, tmpResult) {
    if(open === 0 && close === 0) {
        return result.push(tmpResult);
    }
    
    // if open is less than close we can choose close;
    if(open > 0) {
        helper(result, open-1, close, tmpResult + '(');
    }
    
    if(close > open) {
        helper(result, open, close-1, tmpResult + ')');
    }
}