// https://leetcode.com/problems/simplify-path/
var simplifyPath = function(path) {
    const arry = path.split('/');
    console.log(arry);
    let stack = [];
    arry.forEach(ele => {
        if(ele === '' || ele === '.') {
        } else if(ele === '..') {
            stack.pop();
        } else {
            stack.push(ele);
        }
    });

    return '/' + stack.join('/');
};