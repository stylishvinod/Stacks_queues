// https://leetcode.com/problems/longest-valid-parentheses/


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let left = 0;
    let maxLen = 0;
    let right = 0;
    
    // scan string from left to right
    for(let i = 0 ; i < s.length; i++) {
        if(s[i] === '(') {
            left++;
        } else {
            right++;
        }
        // if both are equal means valid string
        if(left === right) {
            maxLen = Math.max(maxLen, left + right);
        } else if(left < right) { // when scanning from left, left count should be more else string is not valid, so start counting new string;
            left = 0;
            right = 0
        }
    }
    
    //scan from right side
    left = 0; right = 0;
    
    for(let i = s.length - 1; i >=0; i--) {
        if(s[i] === ')') {
            right++
        } else {
            left++;
        }
        
          // if both are equal means valid string
        if(left === right) {
            maxLen = Math.max(maxLen, left + right);
        } else if(right < left) { // when scanning from right, right count should be more else string is not valid, so start counting new string;
            left = 0;
            right = 0
        }
    }
    
    return maxLen;
};