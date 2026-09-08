let numbers = [4, 7, 5, 9, 10, 13];
let evennum = 0;
let oddnum = 0;
for(let i=0;i<=numbers.length;i++){
    if(numbers[i]%2==0){
        evennum++;

    } else{
        oddnum = numbers.length - evennum;
    }
}
console.log(oddnum);
console.log(evennum);


//// 
const arr=[3,2,6,5,2,2];
let max=0;
let contur=0;
let min=0;
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
contur++;
        }
        if(max<contur){
            max=contur;
            min=arr[i]
        }
       
    }
    contur=0
}



console.log(min);


//// level 1-1

const car={
    brand : "bmw",
    model : "golf",
    year : 2020 ,

detail : function (){
    console.log("this car is a"+" "+ car.brand +" "+ car.model )
 }
}
 car.detail();


 //// level 1-2
 

 const user={
    name :"youssef",
    year:16,
 }
 user.year=18
console.log(user.name+" "+ "is"+" "+ user.year)




//// level 2-1
    ///// level 

    function x(y){
        let m=y[0];
        for(let i=1;i<y.length;i++){
    if(m.age<y[i].age){
        m=y[i];
    }
        }
        return m.nan;
    }
    const y=[
        {nan:"oussama", age:92},
        {nan:"omar", age:94},
    ]
       console.log(x(y));
       
       

       //// level 2-2
function check(produit){
    let arr=[];
    for(i=0;i<produit.length;i++){
        if(produit[i].instock === true){
          arr.push(produit[i]);
        }
    }
    return arr
}

       const produit=[
        {name:"pool",price:250,instock:true},
        {name:"dool",price:270,instock:false},
        {nama:"cool",price:280,instock:false},
       ]
       console.log(check(produit));


       //// level 2-3


       const produits=[
        {price:5,quantity:10},
        {price:10,quantity:2},
       ]
       let somm=0;
for(i=0;i<produits.length;i++){
    somm+=produits[i].price*produits[i].quantity;
}
console.log(somm);




//// level 
function moyen(arrl){
    let moyenstudien=0;
    let moyenclaas=0;
    for( let notes of arrl){
        moyenstudien+= notes;
    }
    return moyenstudien;
    // moyenclaas=moyenstudien/arrl.length;
}
const arrl=[
    {name:"ali",notes:[12,15,16]},
    {name:"mehdi",notes:[12,11,15]},
]
console.log(moyenstudien);
