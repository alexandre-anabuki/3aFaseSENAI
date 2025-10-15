let fila = ["A"]

function enqueue(queue, value){
    return queue.push(value)
}

function dequeue(queue){
    if(queue.length === 0) return
    return queue.shift()
}

function front(queue){
    if(queue.length === 0) return
    return queue[0]
}

console.log(enqueue (fila, "B"))
console.log(enqueue (fila, "C"))
console.log(dequeue(fila))
console.log(front(fila))