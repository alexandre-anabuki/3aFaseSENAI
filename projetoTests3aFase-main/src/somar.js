export function somar(a, b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "Erro"
    }
    return a + b;
}

console.log(somar("a", "b"))