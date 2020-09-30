
//https://leetcode.com/problems/trapping-rain-water/

// approach:1 usign two arrays, capturing left and righ max

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length
    let leftMax = new Array(len).fill(0);
    let rightMax = new Array(len).fill(0);
    
    // fill left array from left with max value
    
    leftMax[0] = height[0];
    for(let i = 1;i<len;i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1]);
    }
    
    rightMax[len-1] = height[len-1];

    for(let i = len-2; i>=0;i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1]);
    }
    
 
    // For every point check what is left max and right max
    // get min of that
    let sum = 0
    for(let i = 0 ; i < len;i++) {
        let minValue = Math.min(leftMax[i], rightMax[i]);
        sum += (minValue - height[i]);   
    }
    return sum;
};


// approach::2 two pointer approach

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let total_water = 0;
    let lMax = 0;
    let rMax = 0;
    
    while(left <=right) {
        lMax = Math.max(lMax, height[left]);
        rMax = Math.max(rMax, height[right]);
        
        if(lMax <= rMax) {
            total_water = total_water  + (lMax - height[left]);
            left++;
        } else {
            total_water = total_water  + (rMax - height[right]);
            right--;
        }
        
    }
    return total_water;
};