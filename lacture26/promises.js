console.log("hello");
// alert("dgwuidguiw2dg");
// 
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Kaam ho gaya");
    } else {
        reject("Kaam fail ho gaya");
    }
});

let prom1 = new Promise((resolve , reject)=>{
    
    setTimeout(() =>{
        console.log('Yes i am here');
        resolve("Rajjj")
    },2000);
})

prom1.then((a)=>{
    console.log('a');
    
})