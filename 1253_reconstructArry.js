// https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/


/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function(upper, lower, colsum) {
    
    let matrix = new Array(2).fill(0).map(a => new Array(colsum.length).fill(0));

    for(let i = 0 ; i< colsum.length; i++) {
       if(colsum[i] === 2) {
            matrix[0][i] = 1;
            matrix[1][i] = 1;
            upper--;
            lower--;
        } 
        
        if(colsum[i] === 1) {
            if(upper > lower) {
                matrix[0][i] = 1;
                upper--;
            } else {
                matrix[1][i] = 1;
                lower--;
            }
        }
        if(upper < 0 || lower < 0) return [];
    }
    

    return (upper + lower === 0) ? matrix : [];
};