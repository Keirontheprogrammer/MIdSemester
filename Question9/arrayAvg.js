const arrayofnumbers=(array)=>{

    let sum = 0;
        for(let i of array){
            sum +=i;
        }
         const average = sum/array.length;
        
    return average;
}
console.log(arrayofnumbers([2,3,4,5,6]));
