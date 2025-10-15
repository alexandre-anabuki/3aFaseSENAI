function isBalanced(str){
    const pairs = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    const stack = []
    for (const ch of str){
        if(ch === '(' || ch === '[' || ch === '{'){
            stack.push(ch)
        }
        else if(ch === ')' || ch === ']' || ch === '}'){
            if (stack.pop() !== pairs[ch]) return false
        }
    }
    return stack.length === 0
}