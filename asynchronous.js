// console.log("first");

// setTimeout(()=>{
//     console.log("second");
// },2000);

// console.log("third");


//draw back

// let a=10;
// let b=40;

// setTimeout(()=>
// {
//     b=50;
// },2000)

// console.log(a+b);

//  promise 


let a=10;
let b=40;

let watingdata = new Promise((resolve,reject)=>{
    setTimeout(()=>
        {
           resolve(50);
        },2000)
})

watingdata.then((data)=>{
       b=data;
       console.log(a+b);
})
