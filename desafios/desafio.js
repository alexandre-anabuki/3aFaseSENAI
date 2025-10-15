function desafioArray(array){
    res = []
    for(let n = 0; n < array.lenght; n++){
        for(let x = 0; x < array.lenght; x++){
            if(n !== x){
                res[n] = !res[n] ? array[x] : res[n] * array[x]
            }
        }
    }
    return res
}
console.log(desafioArray([2, 5, 1]))