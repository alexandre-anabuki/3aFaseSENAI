function reverseString(str){
    const stack = []
    for (const ch of str) stack.push(ch)
    let out = ''
    while (stack.length) out += stack.pop()
    return out
}