let a=("Youssef elatmani");
    console.log(a.length);
    console.log(a.toUpperCase());
    console.log(a.toLowerCase());
    console.log(a.includes("e"));
      console.log(a.slice(8,16));
        console.log(a.indexOf("e"));
          console.log(a.replace("Youssef","Mohamad"));
            console.log(a.split(","));
              console.log(a.startsWith("Y"));
                console.log(a.endsWith("b"));
//////

//// level1-1
let x=("bonjour");
console.log(x.length);
console.log(x.toUpperCase());

////level 1-2


let text=("bonjour")
console.log(text[0])
console.log(text.slice(-1));
////
console.log(text.at(0));
 console.log(text.at(-1));

 //// level 1-3
 
 let y=("I love apples");
 console.log(y.replace("apples","bananas"));



/// level 2-1


function red(k){
     let n =("");
    for(let z=k.length-1; z>=0;z--){
        n+=k[z];
    }
    if(k===n){
    return true
    }else{
return false
    }
}
console.log(red("radar"));


/// level 2-2

function vers(b){
    let w=("");
for(let z=b.length-1;z>=0;z--){
    w +=b[z];
}
 return w
}
console.log(vers("youssef"))


/// level 2-3


function countChar(str, char){
let cunt=0
    
    for(let x=0;x<=str.length;x++){
        if(str[x]===char)
            cunt++;
    }
return cunt
}
console.log( countChar("youyssef","y") )




///// 
let word = "hello";
let f=""
for( let i=word.length-1;i>=0;i--){
f+=word[i];

}

console.log(f);





