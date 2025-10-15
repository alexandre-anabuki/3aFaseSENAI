function linearSearch(arr, target){
    for (let i=0; i < arr.length; i++){
        if(arr[i] === target) return i
    }
    return -1
}

function binarySearch(arr, target){
    let l = 0, r = arr.length -1
    while (l <= r){
        const m = (l + r) >> 1
        if(arr[m] === target) return m
        if(arr[m] < target) l = m +1
        else r = m -1
    }
    return -1
    // m -> meio do array; l -> inicio do array; r -> fim do array
}