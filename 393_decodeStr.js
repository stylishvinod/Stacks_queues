
// https://leetcode.com/problems/decode-string/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    let stack = [];
    
    for(let i = 0 ; i < s.length; i++) {
        
        if(s[i] !== ']') {
            stack.push(s[i]);
        } else {
            let tmpStr = '';
            while(stack[stack.length-1] !== '[') {
                tmpStr =  stack.pop() + tmpStr;
            }
        
            stack.pop();
            
            let numStr = '';
            
            while(stack[stack.length-1] >= '0' && stack[stack.length-1] <= '9') {
                  numStr = stack.pop() + numStr;
            }
            
            let count = parseInt(numStr);
        
            let repeatStr = tmpStr;
            for(let i = 1; i< count; i++) {
                repeatStr += tmpStr;
            };
    
            stack.push(repeatStr)
        }
    }
  
    return stack.join('');
};