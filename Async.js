//Async await in JS
//Promise ek object hota hai jo future me kisi asynchronous operation ka result represent karta hai.

// Await JavaScript में asynchronous code को आसान तरीके से लिखने का तरीका है। इससे Promises को handle करना simple हो जाता है।
// function getData() {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(3456)
//         }, 3500);
//     })
// }
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await x.json();
    console.log(data);
}

getData();
// Async hamesa promise return karta ha 
async function main() {

    console.log("Loding");


    // Await kisi promise ke complete hone ka wait karta hai, aur uske baad hi next line execute hoti    ha    Yaha pe getData() promise return karta hai, aur await uske resolve hone ka wait karta hai.


    let data = await getData();
    console.log(data);

    console.log("Loding done");
    console.log("data")
    console.log("process data")
    console.log("permanent data")

}
main();
//Call back functions

// data.then((v) => {

// console.log("data")

// console.log("process data")

// console.log("permanent data")

// 
// })
async function createPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "My Post",
                body: "Hello World",
                userId: 1
            })
        }
    );

    const data = await response.json();
    console.log(data);
}

createPost();