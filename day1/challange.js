//level 1-1


let i = 1;          
while (i <= 20){
    console.log(i); 
    i++;           
}
//level 1-2
let somme=0;
for(let i=1; i<=100; i++){
    somme+=i;
}
console.log(+somme);
//level 1-3
let num=5;
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

//level 2-1

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//level 2-2

let text = "Programming";
let count = 0;

for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
}
console.log("Number of vowels: " + count);

//level 2-3



for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5; j++) {
        row += "* ";
    }
    console.log(row);
}

//level 3-1

for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}


//level 3-2

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// level 3-3



let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);

for (let i = 3; i <= 10; i++) {
    let nextTerm = n1 + n2;
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
}