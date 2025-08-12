export function verificaIdade(idade){
    // const idade = Number(a)
    // if(isNaN(idade) || Array.isArray(a) || a == null){
    //     return "Erro"
    // }
    // else if(idade >= 18){
    //     return "Maior de idade"
    // }
    // else{
    //     return "Menor de idade"
    // }
    
    if(typeof idade !== "number" || idade < 0){
        return "Erro"
    }
    if (idade >= 18){return "Maior"}
    if (idade < 18){return "Menor"}

}