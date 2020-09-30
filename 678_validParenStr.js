
// https://leetcode.com/problems/valid-parenthesis-string/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    
    let leftBalance = 0;
    // first check from left side with open brance point
    for(let i = 0 ; i< s.length; i++) {
        if(s[i] === '('  || s[i] === '*') {
            leftBalance++;
        } else {
            leftBalance--;
        }
        
        if(leftBalance < 0) return false;
    }
    
    if(leftBalance === 0 ) return true;
    
    // again check for right balance, for every close there is open or * present
    
    let rightBalance = 0;
        for(let i = s.length-1 ; i >= 0; i--) {
        if(s[i] === ')'  || s[i] === '*') {
            rightBalance++;
        } else {
            rightBalance--;
        }
        
        if(rightBalance < 0) return false;
    }
    
    return  rightBalance >= 0;
    
};

// using stacks

var checkValidString = function(s) {
    
    const openStack = [];
    const starStack = [];
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === '(') {
            openStack.push(i);
        } else if (s[i] === '*') {
            starStack.push(i);
        } else {
            if(openStack.length > 0) {
                openStack.pop();
            } else if(starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = openStack.length - 1;
    let j = starStack.length - 1;
    
    while(openStack[i] < starStack[j]) {
        openStack.pop();
        starStack.pop();
        i--;
        j--;
    }
    
    if(openStack.length === 0) {
        return true;
    } else {
        return false;
    }
};