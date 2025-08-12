export function subtracao(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "Erro"
    }
    return a - b;
}

console.log(subtracao("a", "b"))