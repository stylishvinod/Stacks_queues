// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let row = new Array(grid.length).fill(0);
    let col = new Array(grid[0].length).fill(0);
    
    // find the row max and col max in row and col array
    
    for(let i =0;i < grid.length; i++) {
        for(let j = 0 ; j < grid[0].length; j++) {
            row[i] = Math.max(row[i], grid[i][j]);
            col[j] = Math.max(col[j], grid[i][j]);
        }
    }
    
    let increse = 0;
    
    // Now find for each element what we can increase
    for(let i = 0 ; i< grid.length; i++) {
        for(let j = 0 ; j < grid[0].length; j++) {
            increse += Math.min(row[i], col[j]) - grid[i][j];
        }
    }
    
    return increse;
};