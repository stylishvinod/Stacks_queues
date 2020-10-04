// https://leetcode.com/problems/remove-duplicate-letters/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {

    let map = new Map();
    let set = new Set();
    let stack = [];
    // fill the map  with input string counts
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }

    // Now iterate through the string

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i];
        let stackTop = stack[stack.length - 1];

        map.set(s[i], map.get(s[i]) - 1)
        // if already part of set, it means we already considered it and it is duplicate one.

        if (set.has(s[i])) continue;


        while (currentLetter < stackTop && map.get(stackTop) > 0) {
            set.delete(stack.pop());
            stackTop = stack[stack.length - 1];
        }

        // push current letter to stack
        stack.push(currentLetter);
        set.add(currentLetter)
    }

    return stack.join('');

};