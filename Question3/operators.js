//multiplication (/)
let num1=30;
let num2 =2;
let div =num1/num2;
console.log(div);

// logical NOT //
const NOT=(Str1)=>{
    let number = 20;
    if (Str1 !=number){
        console.log(Str1);
    }
    else{
        console.log("Strings must not be the specified number");
    }
}
NOT("This is a sentence");

//ternary operator (.. ? .. : .. )
let age = 20;
let message =(age>=18)? "You are an adult" : "you are young";
console.log(message);

//increment and decrement operators (++ and ---)
let number =20;
let increment=number++;
let decrement=number--;
console.log(increment);
console.log(decrement);