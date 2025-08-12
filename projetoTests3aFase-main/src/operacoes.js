export function executarOperacao(a, b, operacao) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "Erro"
    }
    if(operacao == "soma"){
        return a + b
    }
    else if (operacao == "multiplicacao") {
        return a * b
    }
    else if (operacao == "divisao") {
        if(b != 0){
            return Number((a / b).toFixed(2))
        }
        else{
            return "Erro"
        }
    }
    else if (operacao == "subtracao") {
        return a - b
    }
    else {
        return "erro: operação não existe"
    }
}

console.log(executarOperacao(2, 2, "soma"))
console.log(executarOperacao(2, 2, "multiplicacao"))
console.log(executarOperacao(2, 2, "divisao"))
console.log(executarOperacao(2, 2, "subtracao"))
console.log(executarOperacao(2, 2, "adicionar"))