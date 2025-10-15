let pilha = [10, 20]

function push(stack, valor) {
    // if(value == null || value == undefined) {
    //     return   
    // }
    return stack.push(valor)
    
    
}

function pop(stack) {
    if (!stack.length){
        return
    }
    console.log("chegou")
    return stack.pop()
    
}


function peek(stack){
    if (!stack.length){
        return
    }
    
    return stack[stack.length-1]
}

console.log(push(pilha, 30))
console.log(push(pilha, 90))
console.log(pop(pilha))
console.log(peek(pilha))