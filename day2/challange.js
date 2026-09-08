//level 1-1

function greet(name) {
return "hello"+" "+ name
}
console.log(greet("Youssef"));

///level 1-2

const add=(a,b)=>{
    return a+b
}
console.log(add(5,10));
////level 1-3
const square=(num)=> num*num
console.log(square(20));

////level 2-1
const celsiusToFahrenheit=(c) => (c*9/5)+32 +" "+ "Fahrenheit"
console.log(celsiusToFahrenheit(18));

///level 2-2
const isempty=(str)=>{
    if(str.trim().length===0){
        return true;
    
} else {
return false
}
}
console.log(isempty(""));


///level 2-3


const factorial=(n)=>{
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i
    }
    return result;
}
console.log(factorial(5));


//level 3-1


function calculate(a, b, operation){
        return  operation(a,b)
    }
    const plus =(a,b)=>{
        return(a+b);
    }
    const moin=(a,b)=>{
        return(a-b);
    }
console.log(calculate(20,8,plus));

/// level 3-2

function createMultiplier(multiplier){
    const mult=()=> (multiplier*multiplier)
    return mult()
}
console.log(createMultiplier(5))

/// level 3-3

function filterOddNumbers(arr, callback){ 
  console.log(callback(arr));
}
let checkodd = (arry) => {
  if(arry % 2 !== 0) {
    return true;
  }
  else {
    return false;
  }
}

