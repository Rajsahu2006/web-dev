let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter operation")
let c = prompt("Enter second  number")


let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}


if (random > 0.1){
    //perform correct calculation
// perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    c = obj[c]
    //perform wrong calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}