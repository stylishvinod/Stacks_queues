// https://leetcode.com/problems/min-stack/


// approach 1: using only single stack

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // will store elements in stack with [value, minValue] order
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.stack.length) {
        // get top element of stack
        let topEle = this.stack[this.stack.length - 1];
        let minEle = Math.min(topEle[1], x)
        this.stack.push([x, minEle])    
    } else {
     this.stack.push([x,x])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let top = this.stack.pop();
    return top[0]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(!this.stack.length) return null;
    let topEle = this.stack[this.stack.length - 1];
    return topEle[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(!this.stack.length) return null;
     let topEle = this.stack[this.stack.length - 1];
    return topEle[1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */