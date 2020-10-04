
//https://leetcode.com/problems/next-greater-element-i/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();
    
    // first create next greates ele from nums2 store that in map
    
    for(let i = 0 ; i <nums2.length; i++) {
        
        while(stack.length > 0 && stack[stack.length-1] < nums2[i]) {
            map.set(stack.pop(), nums2[i]);
        }
        stack.push(nums2[i])
    }
    
    // second check if math value preset in map
    
    for(let i = 0 ; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]) || -1;
    }
    
    return nums1;
    
};