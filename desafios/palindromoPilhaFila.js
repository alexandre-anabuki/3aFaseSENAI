function isPalindrome(str) {
    const s = str.normalize('NFC');
    const stack = [];
    const queue = [];
    for (const ch of s) {
        stack.push(ch);
        queue.push(ch);
    }
    while (queue.length) {
        const a = stack.pop();   // topo
        const b = queue.shift(); // frente
        if (a !== b) return false;
    }
    return true;
}