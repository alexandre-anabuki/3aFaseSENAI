
// export function atividade(indice){
//     const numero = [1, 3, 5, 7, 8]

//     if(typeof indice !== "number"  || indice > numero.length){
//         return "Erro"
//     }
//     return numero[indice]

// }


/*---Modelo do professor---*/

export function atividade(array, indice){
    if(!Array.isArray(array)){
        return "Erro"
    }
    else if(indice < 0){
        return "Não existe indice negativo"
    }
    return array[indice]
}