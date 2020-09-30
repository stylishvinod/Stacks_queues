
//  https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let lmax = 0, rmax = 0;
    let maxArea = 0;
    
    let left = 0, right = height.length-1;
    
    while(left < right) {
        lmax = Math.max(lmax, height[left]);
        rmax = Math.max(rmax, height[right]);
        
        if(lmax <= rmax) {
            maxArea = Math.max(maxArea, lmax *(right-left));
            left++
        } else {
            maxArea = Math.max(maxArea, rmax *(right-left));
            right--;
        }
    }
  return maxArea;  
};