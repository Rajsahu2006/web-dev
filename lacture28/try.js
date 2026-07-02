let a = prompt("Enter your first number");

let b = prompt("Enter your second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
    
}
let sum = parseInt(a) + parseInt(b);


try {
    console.log("Sum is ",sum);
    
} catch (error) {
    console.log(' Error aa gya ha ');
    
}
finally{
    console.log('It is used to execute a code (trycatch ya na chale finally chalta ha _)');
    
}
