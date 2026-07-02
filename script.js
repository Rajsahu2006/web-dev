async function sleep() {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
        resolve(35); 
        }, 1000);
    })
}
//IIFE (immedetly invoke function Expression);
//Ya define hota he turant exicute ho jata ha ;

(async function main() {
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);
})()

// //Destructuring

//Destructuring ek ES6 feature hai jo array ya object ke values ko alag-alag variables me extract karne ke liye use hota hai.
// let [x,y, ...rest] = [1,2,3,4,5,6];
// console.log(x,y,rest);

const object =  {
    a:1,
    b:2,
    c:7
}
let {a,b} = object
console.log(a ,b);

//Spread Sentex 

function sum(a ,b,c){
    return a+b+c;

}
let arr = [1,2,3];
console.log(sum(...arr));

// Hostingg

//Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution. var variables are hoisted and initialized with undefined, while let and const are hoisted but remain inaccessible until their declaration is reached.


greet();

function greet() {
    console.log("Hello");
}