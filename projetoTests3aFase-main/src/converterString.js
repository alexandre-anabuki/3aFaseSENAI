
export function conversao(str){
    const numero = Number(str)
    if(isNaN(numero) || Array.isArray(str) || str == null){
        return "Erro"
    }
    return numero
}