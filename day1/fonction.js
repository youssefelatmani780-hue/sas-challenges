function saywelcom(){
return "welcom in program"
} 
    console.log(saywelcom())
////

const espas=(a,b) => a*b
console.log(espas(5,5));
// param(a,b)
/// args(5,5)
const square=(num)=> num*num
console.log(square(10))
/////
const num=(x) => {
    if(x >=10){
        return x + "number is big";

     } else{
       return x +   "number is petit";
    }
}
 console.log(num(5));
 console.log(num(12));
    ///
    const chekscore=(score )=> {
        if(score>=50){
        return "congulition"+" "+  score
        } else{
            return "soory" +" "+  score
        }
    }
    console.log(chekscore(100));
    console.log(chekscore(20));