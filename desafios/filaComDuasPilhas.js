const entrada = []
const saida = []

function enqueue2(value) {
    entrada.push(value);                   // O(1)
}

function dequeue2() {
    if (saida.length === 0) {
        while (entrada.length) saida.push(entrada.pop()); // move todos (amort. O(1))
    }
    return saida.pop();                 // O(1)
}

function front2() {
    if (saida.length === 0) {
        while (entrada.length) saida.push(entrada.pop());
    }
    return saida[saida.length - 1];
}