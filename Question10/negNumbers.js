function negativenumbers(array){
    let sum;
    for(let i of array){
        if(typeof i==='number' && i<0){
            sum +=i
        }
    }
    return sum;
}

console.log(negativenumbers([29,-2,3,4,-5]))